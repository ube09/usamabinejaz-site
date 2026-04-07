import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { cn } from '@/lib/utils'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-bg-primary/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    )}>
      <Container className="flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-1 text-xl font-bold text-text-primary">
          <span className="gradient-text">UBE</span>
          <span className="font-normal text-text-muted">labs</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => cn(
                'text-sm font-medium transition-colors',
                isActive ? 'text-accent' : 'text-text-muted hover:text-text-primary'
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button to="/contact" variant="primary">Get in Touch</Button>
        </div>

        <button
          className="md:hidden p-2 text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="md:hidden bg-bg-primary/95 backdrop-blur-md border-t border-gray-100">
          <Container className="py-4 flex flex-col gap-4">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => cn(
                  'text-base font-medium py-2',
                  isActive ? 'text-accent' : 'text-text-muted'
                )}
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" variant="primary" className="w-full mt-2">Get in Touch</Button>
          </Container>
        </div>
      )}
    </nav>
  )
}
