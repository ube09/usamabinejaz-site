import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { Link } from 'react-router-dom'

export interface LegalSection {
  id: string
  title: string
  content: React.ReactNode
}

interface LegalLayoutProps {
  product: string
  productColor?: string
  pageTitle: string
  subtitle: string
  effectiveDate: string
  sections: LegalSection[]
}

export default function LegalLayout({ product, productColor = 'text-accent', pageTitle, subtitle, effectiveDate, sections }: LegalLayoutProps) {
  return (
    <div className="pt-20 pb-24">
      {/* Sticky Sub-header */}
      <div className="sticky top-16 md:top-20 z-40 bg-bg-primary/90 backdrop-blur-md border-b border-white/5">
        <Container className="flex items-center justify-between h-12">
          <div className="flex items-center gap-3">
            <span className={`font-bold text-sm ${productColor}`}>{product}</span>
            <span className="text-[10px] text-text-muted uppercase tracking-widest px-2 py-0.5 border border-white/10 rounded-full">Legal</span>
          </div>
          <Link to="/products" className="text-xs text-text-muted hover:text-text-primary transition-colors">
            Back to Products
          </Link>
        </Container>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 text-center">
        <Container className="max-w-3xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {pageTitle.split(' ').map((word, i) => (
                <span key={i}>
                  {i === pageTitle.split(' ').length - 1
                    ? <span className="gradient-text">{word}</span>
                    : `${word} `
                  }
                </span>
              ))}
            </h1>
            <p className="text-text-muted text-lg mb-6">{subtitle}</p>
            <span className="inline-block text-xs text-text-muted px-4 py-1.5 border border-white/10 rounded-full tracking-wide">
              Effective: {effectiveDate}
            </span>
          </ScrollReveal>
        </Container>
      </section>

      <Container className="max-w-3xl">
        {/* Table of Contents */}
        <ScrollReveal>
          <nav className="bg-bg-secondary/50 border border-white/5 rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Contents</h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors py-1"
                  >
                    <span className="text-[10px] font-mono text-accent/50 min-w-[20px]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </ScrollReveal>

        {/* Sections */}
        {sections.map((section, i) => (
          <ScrollReveal key={section.id} delay={i * 0.03}>
            <section id={section.id} className="mb-12 scroll-mt-40">
              <h2 className="flex items-center gap-3 text-lg md:text-xl font-bold mb-4 pb-3 border-b border-white/5">
                <span className="text-[11px] font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-md">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {section.title}
              </h2>
              <div className="legal-content text-text-muted text-[15px] leading-relaxed space-y-3">
                {section.content}
              </div>
            </section>
          </ScrollReveal>
        ))}

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-text-muted text-xs">
          <p>&copy; {new Date().getFullYear()} UBE Labs. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-3">
            <Link to="/neuromail/privacy" className="hover:text-accent transition-colors">NeuroMail Privacy</Link>
            <Link to="/neuromail/terms" className="hover:text-accent transition-colors">NeuroMail Terms</Link>
            <Link to="/nexus/privacy" className="hover:text-accent transition-colors">Nexus Web And Mobile App Privacy</Link>
            <Link to="/nexus/terms" className="hover:text-accent transition-colors">Nexus Web And Mobile App Terms</Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* Reusable content helpers */
export function Highlight({ children, variant = 'info' }: { children: React.ReactNode; variant?: 'info' | 'success' }) {
  const cls = variant === 'success'
    ? 'bg-emerald-500/5 border-emerald-500/15'
    : 'bg-accent/5 border-accent/15'
  return <div className={`${cls} border rounded-xl p-5 my-4`}>{children}</div>
}

export function ScopeTable({ rows }: { rows: { scope: string; purpose: string }[] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 px-4 text-accent text-xs uppercase tracking-wider font-semibold">Scope</th>
            <th className="text-left py-3 px-4 text-accent text-xs uppercase tracking-wider font-semibold">Purpose</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.scope} className="border-b border-white/5">
              <td className="py-3 px-4"><code className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded">{row.scope}</code></td>
              <td className="py-3 px-4 text-text-muted">{row.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
