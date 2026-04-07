import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn('bg-surface rounded-[var(--radius-card)] shadow-sm border border-gray-100 p-6', className)}>
      {children}
    </div>
  )
}
