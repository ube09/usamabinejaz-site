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
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const running = useRef(false)

  useEffect(() => {
    if ('ontouchstart' in window) return

    const startLoop = () => {
      if (running.current) return
      running.current = true
      rafRef.current = requestAnimationFrame(animate)
    }

    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!visible.current) {
        visible.current = true
        if (dotRef.current) dotRef.current.style.opacity = '1'
        if (ringRef.current) ringRef.current.style.opacity = '1'
      }
      startLoop()
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => {
        running.current = false
      }, 150)
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
      if (!running.current) {
        rafRef.current = 0
        return
      }

      dotPos.current.x += (pos.current.x - dotPos.current.x) * 0.35
      dotPos.current.y += (pos.current.y - dotPos.current.y) * 0.35
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x - 3}px, ${dotPos.current.y - 3}px)`
      }
      if (ringRef.current) {
        const scale = hovering.current ? 1.57 : 1
        ringRef.current.style.transform = `translate(${ringPos.current.x - 14}px, ${ringPos.current.y - 14}px) scale(${scale})`
      }

      rafRef.current = requestAnimationFrame(animate)
    }
    startLoop()

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleEnter)
      document.removeEventListener('mouseout', handleLeave)
      document.removeEventListener('mouseleave', handleOut)
      cancelAnimationFrame(rafRef.current)
      if (idleTimer.current) clearTimeout(idleTimer.current)
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
      {/* Trailing ring — scale transform instead of width/height, no mix-blend-difference */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] opacity-0 will-change-transform rounded-full border border-coral/40 w-7 h-7"
        style={{ transition: 'opacity 0.3s, transform 0.2s ease-out' }}
      />
    </>
  )
}
