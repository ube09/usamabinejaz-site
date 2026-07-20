import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import CountUp from '@/components/animations/CountUp'
import GridBackground from '@/components/animations/GridBackground'
import ScrollReveal from '@/components/animations/ScrollReveal'
import FilterChips from '@/components/portfolio/FilterChips'
import type { ProjectFilter } from '@/components/portfolio/FilterChips'
import ProjectCard from '@/components/portfolio/ProjectCard'
import usePageMeta from '@/hooks/usePageMeta'
import { CATEGORY_META, projects } from '@/data/portfolio'

const stats = [
  { value: projects.length, suffix: '', label: 'Projects' },
  { value: 10, suffix: '+', label: 'Computer Vision Systems' },
  { value: 4, suffix: '', label: 'LLM Systems in Production' },
  { value: Object.keys(CATEGORY_META).length, suffix: '', label: 'Domains' },
]

const featured = projects.filter(project => project.featured)

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral">{children}</p>
  )
}

export default function ProjectsHub() {
  usePageMeta(
    'Projects',
    '22 real AI/ML builds — GenAI and LLM systems, computer vision pipelines, ML, data engineering, and full-stack — with honest metrics and code links.'
  )

  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all')

  const filtered = useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter || project.secondary?.includes(activeFilter)),
    [activeFilter]
  )

  return (
    <div>
      {/* Hero band */}
      <section className="relative overflow-hidden section-dark noise-overlay">
        <GridBackground />
        <span
          aria-hidden
          className="absolute -bottom-8 right-0 text-[7rem] md:text-[12rem] font-bold leading-none text-white/[0.03] whitespace-nowrap select-none pointer-events-none"
        >
          projects
        </span>
        <Container className="relative z-10 py-20 md:py-28">
          <ScrollReveal>
            <Kicker>Projects</Kicker>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
              Real builds, <span className="gradient-text">real metrics</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-text-muted">
              Production systems, client deliveries, and research work across GenAI, computer vision, ML, and data —
              every number on this page comes from shipped work.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map(stat => (
                <div key={stat.label} className="rounded-[var(--radius-card)] border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-coral">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 text-xs text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Featured strip */}
      <section className="py-16 md:py-20">
        <Container>
          <ScrollReveal>
            <Kicker>Featured</Kicker>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-text-primary">Flagship builds</h2>
            <p className="mt-3 max-w-2xl text-text-muted">
              The work with the strongest proof — products and pipelines running in production for real clients and users.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.08} className="h-full">
                <ProjectCard project={project} variant="featured" />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* All projects */}
      <section className="relative overflow-hidden section-dark noise-overlay py-16 md:py-20">
        <Container className="relative z-10">
          <ScrollReveal>
            <Kicker>All Projects</Kicker>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-white">The full catalog</h2>
            <p className="mt-3 max-w-2xl text-text-muted">
              Every project, filterable by domain. Cards link to the code on GitHub where it's public, or to a full case study.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-8">
              <FilterChips active={activeFilter} onChange={setActiveFilter} />
              <p className="mt-3 font-mono text-xs text-text-muted" aria-live="polite">
                {filtered.length} of {projects.length} projects
              </p>
            </div>
          </ScrollReveal>
          <motion.div layout className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Closing note */}
      <section className="py-16 md:py-24">
        <Container>
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-gradient-to-br from-coral/10 via-bg-secondary to-violet/10 p-8 text-center md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary">Want the story behind a build?</h2>
              <p className="mx-auto mt-3 max-w-xl text-text-muted">
                Some of this work is private client or product code. I'm happy to walk through the architecture,
                decisions, and results — just ask.
              </p>
              <div className="mt-8">
                <Button to="/contact">Get in Touch</Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  )
}
