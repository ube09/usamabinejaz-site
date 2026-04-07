import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const dotPos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
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
        if (ringRef.current) ringRef.current.style.opacity = '1'
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
      if (ringRef.current) ringRef.current.style.opacity = '0'
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleEnter)
    document.addEventListener('mouseout', handleLeave)
    document.addEventListener('mouseleave', handleOut)

    const animate = () => {
      // Dot follows tightly
      dotPos.current.x += (pos.current.x - dotPos.current.x) * 0.35
      dotPos.current.y += (pos.current.y - dotPos.current.y) * 0.35
      // Ring trails behind with lag
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x - 3}px, ${dotPos.current.y - 3}px)`
      }
      if (ringRef.current) {
        const size = hovering.current ? 44 : 28
        const offset = size / 2
        ringRef.current.style.width = `${size}px`
        ringRef.current.style.height = `${size}px`
        ringRef.current.style.transform = `translate(${ringPos.current.x - offset}px, ${ringPos.current.y - offset}px)`
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
    <>
      {/* Small solid dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0 will-change-transform"
        style={{ transition: 'opacity 0.3s' }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-coral" />
      </div>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] opacity-0 will-change-transform rounded-full border border-coral/40 mix-blend-difference"
        style={{ transition: 'opacity 0.3s, width 0.2s ease-out, height 0.2s ease-out' }}
      />
    </>
  )
}
