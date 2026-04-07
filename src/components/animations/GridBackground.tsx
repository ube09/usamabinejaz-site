import { useEffect, useRef } from 'react'

interface GridBackgroundProps {
  className?: string
  dotColor?: string
  activeColor?: string
}

export default function GridBackground({
  className = '',
  dotColor = 'rgba(156, 163, 175, 0.15)',
  activeColor = 'rgba(132, 94, 194, 0.4)',
}: GridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const rafRef = useRef<number>(0)
  const visibleRef = useRef(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    const gap = 30
    const radius = 120
    const radiusSq = radius * radius

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }
    canvas.addEventListener('mousemove', handleMouse)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    // Pause when off-screen
    const observer = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting
    }, { threshold: 0 })
    observer.observe(canvas)

    const draw = () => {
      if (!visibleRef.current) {
        rafRef.current = requestAnimationFrame(draw)
        return
      }

      ctx.clearRect(0, 0, w, h)
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      // Batch 1: all static dots (single beginPath + fill)
      ctx.fillStyle = dotColor
      ctx.beginPath()
      for (let x = gap; x < w; x += gap) {
        for (let y = gap; y < h; y += gap) {
          const dx = mx - x
          const dy = my - y
          if (dx * dx + dy * dy < radiusSq) continue // skip active ones
          ctx.moveTo(x + 1, y)
          ctx.arc(x, y, 1, 0, Math.PI * 2)
        }
      }
      ctx.fill()

      // Batch 2: active dots near mouse (displaced + larger)
      if (mx > -500 && my > -500) {
        ctx.fillStyle = activeColor
        ctx.beginPath()
        // Only check dots in mouse vicinity
        const startX = Math.max(gap, Math.floor((mx - radius) / gap) * gap)
        const endX = Math.min(w, mx + radius + gap)
        const startY = Math.max(gap, Math.floor((my - radius) / gap) * gap)
        const endY = Math.min(h, my + radius + gap)

        for (let x = startX; x < endX; x += gap) {
          for (let y = startY; y < endY; y += gap) {
            const dx = mx - x
            const dy = my - y
            const distSq = dx * dx + dy * dy
            if (distSq >= radiusSq) continue

            const dist = Math.sqrt(distSq)
            const t = 1 - dist / radius
            const size = 1 + t * 2.5
            const displaceX = dist > 0 ? (dx / dist) * t * 4 : 0
            const displaceY = dist > 0 ? (dy / dist) * t * 4 : 0
            const px = x + displaceX
            const py = y + displaceY

            ctx.moveTo(px + size, py)
            ctx.arc(px, py, size, 0, Math.PI * 2)
          }
        }
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouse)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
      cancelAnimationFrame(rafRef.current)
    }
  }, [dotColor, activeColor])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
    />
  )
}
