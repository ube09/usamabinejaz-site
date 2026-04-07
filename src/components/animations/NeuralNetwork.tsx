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
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }
    canvas.addEventListener('mousemove', handleMouse)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const connectionDist = 140
    const connectionDistSq = connectionDist * connectionDist
    const mouseRadius = 200

    const animate = () => {
      ctx.clearRect(0, 0, w, h)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      // Update nodes
      for (const node of nodes) {
        const dx = mx - node.x
        const dy = my - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < mouseRadius && dist > 0) {
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
      ctx.strokeStyle = 'rgba(132, 94, 194, 0.2)'
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

      // Draw brighter connections near mouse
      if (mx > 0 && my > 0) {
        ctx.strokeStyle = 'rgba(255, 107, 107, 0.25)'
        ctx.lineWidth = 0.8
        ctx.beginPath()
        for (let i = 0; i < nodes.length; i++) {
          const distI = Math.sqrt((mx - nodes[i].x) ** 2 + (my - nodes[i].y) ** 2)
          if (distI > mouseRadius) continue
          for (let j = i + 1; j < nodes.length; j++) {
            const distJ = Math.sqrt((mx - nodes[j].x) ** 2 + (my - nodes[j].y) ** 2)
            if (distJ > mouseRadius) continue
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

      // Draw nodes (simple dots, no radialGradient)
      for (const node of nodes) {
        const nearMouse = mx > 0 && Math.sqrt((mx - node.x) ** 2 + (my - node.y) ** 2) < mouseRadius
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = nearMouse ? 'rgba(255, 107, 107, 0.8)' : 'rgba(132, 94, 194, 0.5)'
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouse)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
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
