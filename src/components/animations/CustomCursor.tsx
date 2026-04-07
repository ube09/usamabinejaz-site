import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const dotPos = useRef({ x: 0, y: 0 })
  const visible = useRef(false)
  const hovering = useRef(false)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if ('ontouchstart' in window) return

    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!visible.current) {
        visible.current = true
        if (dotRef.current) dotRef.current.style.opacity = '1'
      }
    }

    const handleEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        hovering.current = true
      }
    }

    const handleLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        hovering.current = false
      }
    }

    const handleOut = () => {
      visible.current = false
      if (dotRef.current) dotRef.current.style.opacity = '0'
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleEnter)
    document.addEventListener('mouseout', handleLeave)
    document.addEventListener('mouseleave', handleOut)

    const animate = () => {
      dotPos.current.x += (pos.current.x - dotPos.current.x) * 0.3
      dotPos.current.y += (pos.current.y - dotPos.current.y) * 0.3

      if (dotRef.current) {
        const scale = hovering.current ? 3 : 1
        dotRef.current.style.transform = `translate(${dotPos.current.x - 5}px, ${dotPos.current.y - 5}px) scale(${scale})`
      }

      rafRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleEnter)
      document.removeEventListener('mouseout', handleLeave)
      document.removeEventListener('mouseleave', handleOut)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0 will-change-transform"
      style={{ transition: 'opacity 0.3s' }}
    >
      <div className="w-2.5 h-2.5 rounded-full bg-coral shadow-[0_0_12px_rgba(255,107,107,0.6)]" />
    </div>
  )
}
