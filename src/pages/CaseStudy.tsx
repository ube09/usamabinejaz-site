import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink, Lock } from 'lucide-react'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import ScrollReveal from '@/components/animations/ScrollReveal'
import CountUp from '@/components/animations/CountUp'
import GridBackground from '@/components/animations/GridBackground'
import usePageMeta from '@/hooks/usePageMeta'
import { CATEGORY_META, projects } from '@/data/portfolio'
import type { CaseStudy as CaseStudyData, PortfolioProject } from '@/data/portfolio'

type CaseStudyProject = PortfolioProject & { caseStudy: CaseStudyData }

const caseStudyProjects = projects.filter((p): p is CaseStudyProject => Boolean(p.caseStudy))

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted">
      {children}
    </h2>
  )
}

function ProsePanel({ label, text, accent }: { label: string; text: string; accent: string }) {
  return (
    <Card className="relative h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted">{label}</h2>
      <p className="mt-4 leading-relaxed text-text-primary">{text}</p>
      <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: accent }} aria-hidden="true" />
    </Card>
  )
}

function CaseStudyDetail({ project, next }: { project: CaseStudyProject; next?: CaseStudyProject }) {
  usePageMeta(project.title, project.description)

  const { caseStudy } = project
  const meta = CATEGORY_META[project.category]
  const heroImage = caseStudy.heroImage ?? project.image
  const gallery = caseStudy.screenshots.filter(src => src !== heroImage)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden section-dark noise-overlay">
        <GridBackground />
        <Container className="relative z-10 py-16 lg:py-20">
          <ScrollReveal>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
            >
              <ArrowLeft size={15} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
              All Projects
            </Link>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: meta.accent }}>
              {meta.label} · {project.kicker}
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold text-white max-w-3xl">{project.title}</h1>
            <p className="mt-4 text-lg text-text-muted max-w-2xl">{project.description}</p>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              {project.client ? (
                <p className="text-sm text-text-muted">
                  Client: <span className="text-text-primary">{project.client}</span>
                </p>
              ) : null}
              {project.metric ? (
                <p className="font-mono text-xs" style={{ color: meta.accent }}>{project.metric}</p>
              ) : null}
            </div>
          </ScrollReveal>

          {heroImage ? (
            <ScrollReveal delay={0.15}>
              <div className="relative mt-12 rounded-[var(--radius-card)] overflow-hidden border border-white/10 shadow-lg">
                <img src={heroImage} alt={project.title} className="w-full" />
                <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: meta.accent }} aria-hidden="true" />
              </div>
            </ScrollReveal>
          ) : null}
        </Container>
      </section>

      {/* Challenge / Approach / Results / Stack */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ScrollReveal>
              <ProsePanel label="The Challenge" text={caseStudy.challenge} accent={meta.accent} />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <ProsePanel label="The Approach" text={caseStudy.approach} accent={meta.accent} />
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-16">
            <SectionKicker>Results</SectionKicker>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {caseStudy.results.map(result => (
                <div
                  key={result.label}
                  className="text-center p-5 rounded-lg bg-bg-secondary border border-white/10 transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="text-3xl font-bold text-coral">
                    <CountUp to={result.value} suffix={result.suffix} />
                  </div>
                  <p className="text-xs mt-2 text-text-muted">{result.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-16">
            <SectionKicker>Stack</SectionKicker>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map(t => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Screenshots */}
      {gallery.length > 0 ? (
        <section className="relative overflow-hidden section-dark noise-overlay py-16 lg:py-20">
          <Container className="relative z-10">
            <ScrollReveal>
              <SectionKicker>Screenshots</SectionKicker>
            </ScrollReveal>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {gallery.map((src, i) => (
                <ScrollReveal key={src} delay={i * 0.1}>
                  <div className="bg-surface rounded-[var(--radius-card)] border border-white/10 p-2 shadow-sm transition-transform duration-200 hover:-translate-y-1">
                    <img
                      src={src}
                      alt={`${project.title} — screenshot ${i + 1}`}
                      loading="lazy"
                      className="w-full rounded-[calc(var(--radius-card)-0.5rem)]"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Code access */}
      {project.link.type === 'request' ? (
        <section className="py-16">
          <Container>
            <ScrollReveal>
              <Card className="relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <Lock size={18} className="mt-0.5 shrink-0 text-text-muted" />
                  <div>
                    <p className="font-semibold text-text-primary">Code available on request</p>
                    <p className="mt-1 text-sm text-text-muted">
                      This is proprietary work — reach out via the{' '}
                      <Link to="/contact" className="text-coral hover:underline">contact page</Link>.
                    </p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: meta.accent }} aria-hidden="true" />
              </Card>
            </ScrollReveal>
          </Container>
        </section>
      ) : null}
      {project.link.type === 'github' && project.link.href ? (
        <section className="py-16">
          <Container>
            <ScrollReveal>
              <Button href={project.link.href} variant="outline">
                View on GitHub
                <ExternalLink size={14} className="ml-2" />
              </Button>
            </ScrollReveal>
          </Container>
        </section>
      ) : null}

      {/* Footer nav */}
      <section className="py-10 border-t border-white/10">
        <Container className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            All Projects
          </Link>
          {next ? (
            <Link to={`/projects/${next.id}`} className="group sm:text-right">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted">Next Case Study</p>
              <p className="mt-1 flex items-center sm:justify-end gap-2 text-sm font-semibold text-text-primary transition-colors group-hover:text-coral">
                {next.title}
                <ArrowRight size={16} className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
              </p>
            </Link>
          ) : null}
        </Container>
      </section>
    </div>
  )
}

export default function CaseStudy() {
  const { id } = useParams()
  const index = caseStudyProjects.findIndex(p => p.id === id)

  if (index === -1) return <Navigate to="/projects" replace />

  const project = caseStudyProjects[index]
  const next = caseStudyProjects[(index + 1) % caseStudyProjects.length]

  return <CaseStudyDetail project={project} next={next.id !== project.id ? next : undefined} />
}
