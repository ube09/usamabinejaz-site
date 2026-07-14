import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import ScrollReveal from '@/components/animations/ScrollReveal'
import GridBackground from '@/components/animations/GridBackground'
import usePageMeta from '@/hooks/usePageMeta'
import { certifications } from '@/data/certifications'
import type { Certification } from '@/data/certifications'

function CertCard({ cert }: { cert: Certification }) {
  return (
    <Card className="relative overflow-hidden h-full pt-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
      {/* Accent bar (Danish-style, per-issuer color) */}
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: cert.accent }}
        aria-hidden="true"
      />
      {/* Soft radial glow in the accent color */}
      <div
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${cert.accent}26 0%, transparent 70%)` }}
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">{cert.issuer}</p>
          {cert.date ? (
            <p className="font-mono text-xs text-text-muted shrink-0">{cert.date}</p>
          ) : null}
        </div>
        <h2 className="mt-3 text-lg font-semibold text-text-primary">{cert.name}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {cert.tags.map(tag => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default function Certifications() {
  usePageMeta(
    'Certifications',
    'Certifications of Usama Bin Ejaz — IELTS C1 Advanced (British Council), HackerRank SQL, Next-Gen Analytics Data Science, and DataCamp machine learning credentials.'
  )

  return (
    <div>
      {/* Hero band */}
      <section className="py-20 relative overflow-hidden">
        <GridBackground />
        <Container className="relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral">Certifications</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Credentials <span className="gradient-text">on record</span>
            </h1>
            <p className="mt-4 text-lg text-text-muted max-w-2xl">
              {certifications.length} certifications across English proficiency, SQL, data science,
              and machine learning — the complete list, nothing padded.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Cert grid */}
      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.id} delay={i * 0.08} className="h-full">
                <CertCard cert={cert} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
