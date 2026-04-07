import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  href?: string
  to?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function Button({ children, variant = 'primary', href, to, className, onClick, type = 'button' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-button)] font-semibold text-sm transition-all duration-200 cursor-pointer'
  const variants = {
    primary: 'bg-cta text-white hover:bg-cta-hover shadow-lg shadow-cta/25 hover:shadow-cta/40 hover:-translate-y-0.5',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
  }
  const classes = cn(base, variants[variant], className)

  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>
  if (to) return <Link to={to} className={classes}>{children}</Link>
  return <button type={type} onClick={onClick} className={classes}>{children}</button>
}
