import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Mail, ExternalLink, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

interface NavItem {
  to: string
  label: string
  end?: boolean
}

const mainLinks: NavItem[] = [
  { to: '/', label: 'About', end: true },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
]

const moreLinks: NavItem[] = [
  { to: '/certifications', label: 'Certifications' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

const findMeLinks = [
  { href: 'https://github.com/ube09', label: 'GitHub', icon: GithubIcon },
  { href: 'https://linkedin.com/in/usama-bin-ejaz', label: 'LinkedIn', icon: LinkedinIcon },
  { href: 'https://www.upwork.com/freelancers/~0114a62f0bcb3d56fa', label: 'Upwork', icon: ExternalLink },
  { href: 'mailto:ejazusamabin@gmail.com', label: 'Email', icon: Mail },
]

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-6 mb-2 text-[10px] font-semibold uppercase tracking-widest text-text-muted">
      {children}
    </p>
  )
}

function NavGroup({ label, links, onNavigate }: { label: string; links: NavItem[]; onNavigate?: () => void }) {
  return (
    <div>
      <GroupLabel>{label}</GroupLabel>
      <ul className="flex flex-col">
        {links.map(link => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.end}
              onClick={onNavigate}
              className={({ isActive }) => cn(
                'block border-l-[3px] pl-[21px] pr-6 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'border-coral bg-white/5 text-white'
                  : 'border-transparent text-text-muted hover:text-text-primary hover:bg-white/5'
              )}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col">
      {/* Identity */}
      <div className="px-6 pt-8 pb-6">
        <Link to="/" onClick={onNavigate} className="text-lg font-bold text-white leading-tight">
          Usama Bin Ejaz
        </Link>
        <p className="mt-1 text-xs text-text-muted">AI/ML Engineer · Data Scientist</p>
        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-coral/80">Founder · UBE Labs</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-2 flex flex-col gap-6">
        <NavGroup label="Main" links={mainLinks} onNavigate={onNavigate} />
        <NavGroup label="More" links={moreLinks} onNavigate={onNavigate} />
        <div>
          <GroupLabel>Find Me</GroupLabel>
          <ul className="flex flex-col">
            {findMeLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-6 py-2 text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  <link.icon size={15} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Availability */}
      <div className="px-6 py-5 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <p className="text-xs text-text-muted">Open to Work · Remote (Global)</p>
        </div>
      </div>
    </div>
  )
}

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the drawer whenever the route changes (adjust state during render)
  const [prevPathname, setPrevPathname] = useState(location.pathname)
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname)
    setOpen(false)
  }

  // Escape closes the drawer; body scroll locked while open
  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed inset-y-0 left-0 z-40 w-[260px] bg-bg-dark border-r border-white/10">
        <SidebarContent />
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between px-4 bg-bg-dark/90 backdrop-blur-md border-b border-white/10">
        <Link to="/" className="text-base font-bold text-white">Usama Bin Ejaz</Link>
        <button
          className="p-2 text-text-primary"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          <Menu size={22} />
        </button>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              key="backdrop"
              className="lg:hidden fixed inset-0 z-[60] bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer"
              className="lg:hidden fixed inset-y-0 left-0 z-[70] w-[280px] bg-bg-dark border-r border-white/10"
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <button
                className="absolute top-4 right-4 p-1 text-text-muted hover:text-text-primary"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
              <SidebarContent onNavigate={() => setOpen(false)} />
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
