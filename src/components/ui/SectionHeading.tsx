import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ title, subtitle, className, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
