import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>(0)
  const visibleRef = useRef(true)
  const rectRef = useRef<DOMRect | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      rectRef.current = canvas.getBoundingClientRect()
    }
    resize()
    window.addEventListener('resize', resize)

    // Fewer nodes for performance
    const nodeCount = Math.min(50, Math.floor((w * h) / 20000))
    const nodes: Node[] = []
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.5 + 1,
      })
    }

    const handleMouse = (e: MouseEvent) => {
      const rect = rectRef.current
      if (!rect) return
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
      if (entry.isIntersecting && !animationRef.current) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }, { threshold: 0 })
    observer.observe(canvas)

    const connectionDist = 140
    const connectionDistSq = connectionDist * connectionDist
    const mouseRadius = 200
    const mouseRadiusSq = mouseRadius * mouseRadius

    const animate = () => {
      if (!visibleRef.current) {
        animationRef.current = 0
        return
      }

      ctx.clearRect(0, 0, w, h)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      // Update nodes — use squared distance to avoid Math.sqrt
      for (const node of nodes) {
        const dx = mx - node.x
        const dy = my - node.y
        const distSq = dx * dx + dy * dy
        if (distSq < mouseRadiusSq && distSq > 0) {
          const dist = Math.sqrt(distSq)
          const force = (1 - dist / mouseRadius) * 0.04
          node.vx += (dx / dist) * force
          node.vy += (dy / dist) * force
        }

        node.x += node.vx
        node.y += node.vy
        node.vx *= 0.98
        node.vy *= 0.98

        if (node.x < -10) node.x = w + 10
        if (node.x > w + 10) node.x = -10
        if (node.y < -10) node.y = h + 10
        if (node.y > h + 10) node.y = -10
      }

      // Batch draw connections (single color, no per-line gradients)
      ctx.strokeStyle = 'rgba(123, 104, 238, 0.35)'
      ctx.lineWidth = 0.6
      ctx.beginPath()
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distSq = dx * dx + dy * dy
          if (distSq < connectionDistSq) {
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
          }
        }
      }
      ctx.stroke()

      // Draw brighter connections near mouse — use squared distance
      if (mx > 0 && my > 0) {
        ctx.strokeStyle = 'rgba(74, 144, 217, 0.4)'
        ctx.lineWidth = 1
        ctx.beginPath()
        for (let i = 0; i < nodes.length; i++) {
          const dxi = mx - nodes[i].x
          const dyi = my - nodes[i].y
          if (dxi * dxi + dyi * dyi > mouseRadiusSq) continue
          for (let j = i + 1; j < nodes.length; j++) {
            const dxj = mx - nodes[j].x
            const dyj = my - nodes[j].y
            if (dxj * dxj + dyj * dyj > mouseRadiusSq) continue
            const dx = nodes[i].x - nodes[j].x
            const dy = nodes[i].y - nodes[j].y
            if (dx * dx + dy * dy < connectionDistSq) {
              ctx.moveTo(nodes[i].x, nodes[i].y)
              ctx.lineTo(nodes[j].x, nodes[j].y)
            }
          }
        }
        ctx.stroke()
      }

      // Batch draw nodes — 2 fill calls instead of N
      const nearNodes: Node[] = []
      const farNodes: Node[] = []
      for (const node of nodes) {
        const dx = mx - node.x
        const dy = my - node.y
        if (mx > 0 && dx * dx + dy * dy < mouseRadiusSq) {
          nearNodes.push(node)
        } else {
          farNodes.push(node)
        }
      }

      ctx.fillStyle = 'rgba(123, 104, 238, 0.7)'
      ctx.beginPath()
      for (const node of farNodes) {
        ctx.moveTo(node.x + node.radius, node.y)
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      }
      ctx.fill()

      ctx.fillStyle = 'rgba(74, 144, 217, 0.9)'
      ctx.beginPath()
      for (const node of nearNodes) {
        ctx.moveTo(node.x + node.radius, node.y)
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      }
      ctx.fill()

      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouse)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  )
}
