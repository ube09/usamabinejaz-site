import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
}

export default function SpotlightCard({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' }: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(0.6)}
      onMouseLeave={() => setOpacity(0)}
      className={cn('relative rounded-[var(--radius-card)] border border-gray-100 bg-surface overflow-hidden p-6', className)}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  )
}
