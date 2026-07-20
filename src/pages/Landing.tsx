import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import ScrollReveal from '@/components/animations/ScrollReveal'
import NeuralNetwork from '@/components/animations/NeuralNetwork'
import CountUp from '@/components/animations/CountUp'
import SpotlightCard from '@/components/animations/SpotlightCard'
import GridBackground from '@/components/animations/GridBackground'
import { usePageMeta } from '@/hooks/usePageMeta'
import { projects, CATEGORY_META } from '@/data/portfolio'
import { experience, education } from '@/data/experience'
import { skillGroups } from '@/data/skills'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const stats = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: projects.length, suffix: '', label: 'Projects Shipped' },
  { value: Object.keys(CATEGORY_META).length, suffix: '', label: 'Domains' },
  { value: 2, suffix: '', label: 'Products in Production' },
]

const currentJob = experience.find(e => e.company === 'AiGenix') ?? experience[0]
const msDegree = education[0]

const snapshotFacts = [
  { label: 'Location', value: 'Karachi, Pakistan (UTC+5)' },
  { label: 'Current Role', value: `${currentJob.role} · ${currentJob.company}` },
  { label: 'Founder', value: 'UBE Labs · 2026' },
  { label: 'Education', value: `${msDegree.degree} · ${msDegree.location}` },
  { label: 'Availability', value: 'Open to Work · Remote (Global)', accent: true },
]

const focusAreas = [
  {
    title: 'GenAI / LLM Systems',
    accent: CATEGORY_META.genai.accent,
    body: 'Multi-agent orchestration with LangGraph, RAG over 10K+ documents with source attribution, and local Mistral 7B summarization — LLM systems that run in production, not in notebooks.',
  },
  {
    title: 'Computer Vision',
    accent: CATEGORY_META.cv.accent,
    body: 'Detection, segmentation, and tracking across YOLOv5–v11, Detectron2, and CLIP — from endangered-species monitoring at ~97% mAP@50 to road-damage mapping and traffic analytics.',
  },
  {
    title: 'Data & Full-Stack Delivery',
    accent: CATEGORY_META.dataeng.accent,
    body: 'Metadata-driven ETL into BigQuery and AWS data lakes, plus the dashboards, APIs, and web + mobile apps that put models in front of real users.',
  },
]

// Employers first, own lab last (UBE Labs is the founder venture, not the headline).
const workHistory = [
  ...experience.filter(e => e.company !== 'UBE Labs'),
  ...experience.filter(e => e.company === 'UBE Labs'),
]

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-coral">
      {children}
    </p>
  )
}

function SectionHeader({ kicker, title, sub }: { kicker: string; title: React.ReactNode; sub?: string }) {
  return (
    <ScrollReveal>
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold">{title}</h2>
      {sub ? <p className="mt-3 max-w-2xl text-text-muted">{sub}</p> : null}
    </ScrollReveal>
  )
}

export default function Landing() {
  usePageMeta(
    'About',
    'AI/ML Engineer and Data Scientist in Karachi, Pakistan — 4+ years shipping GenAI, computer vision, and data systems in production. MS in AI & Data Science (Germany). Founder of UBE Labs.'
  )

  return (
    <>
      {/* Hero — Neural Network backdrop */}
      <section className="relative flex min-h-[85dvh] items-center overflow-hidden py-20">
        <NeuralNetwork />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <ScrollReveal>
                <Kicker>AI/ML Engineer · Data Scientist · Remote (Global)</Kicker>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                  AI that <span className="gradient-text">ships</span>.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
                  4+ years shipping GenAI, computer vision, and data systems that hold up in
                  production — from multi-agent email triage to ~97% mAP@50 wildlife detection.
                  MS in AI & Data Science from Deggendorf Institute of Technology, Germany.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.45}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button to="/projects" variant="primary">
                    View Projects <ArrowRight size={16} className="ml-2" />
                  </Button>
                  <Button to="/resume" variant="outline">Resume</Button>
                  <Button href="https://github.com/ube09" variant="outline">
                    GitHub <ArrowUpRight size={15} className="ml-1.5" />
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} direction="left">
              <div className="mx-auto h-56 w-56 overflow-hidden rounded-full border-4 border-coral/20 animate-glow-pulse md:h-72 md:w-72">
                <img
                  src="/images/usama-profile.png"
                  alt="Usama Bin Ejaz"
                  className="h-full w-full scale-[1.9] object-cover object-[29%_10%]"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Stat tiles */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="relative h-full overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-surface p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-bold gradient-text md:text-5xl">
                    <CountUp to={stat.value} suffix={stat.suffix} duration={2} />
                  </div>
                  <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
                  <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-coral to-violet opacity-70" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Introduction + Snapshot — Dark Section */}
      <section className="section-dark noise-overlay relative overflow-hidden py-24">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <SectionHeader
                kicker="Introduction"
                title={<>Production systems, <span className="gradient-text">not prototypes</span>.</>}
              />
              <ScrollReveal delay={0.15}>
                <p className="mt-6 leading-relaxed text-gray-400">
                  I'm an AI/ML engineer who builds{' '}
                  <strong className="font-semibold text-gray-200">production systems — not just prototypes</strong>.
                  Over the past 4+ years, I've worked across e-commerce, transport logistics, HR/SaaS,
                  healthcare, and property valuation, shipping ML models, data pipelines, and
                  full-stack applications.
                </p>
                <p className="mt-4 leading-relaxed text-gray-400">
                  I studied Computer Science in Pakistan (FAST-NUCES), then moved to Germany for my
                  Master's in AI & Data Science (Deggendorf Institute of Technology). After working
                  at <strong className="font-semibold text-gray-200">TDK Electronics</strong> in Munich,
                  I came back to Karachi to build.
                </p>
                <blockquote className="mt-6 border-l-2 border-coral pl-4 italic text-gray-300">
                  The best way to prove you can build is to actually build.
                </blockquote>
                <p className="mt-6 leading-relaxed text-gray-400">
                  Today I build client AI solutions as a Data Scientist at{' '}
                  <strong className="font-semibold text-gray-200">AiGenix</strong>, alongside a
                  freelance computer-vision and LLM practice. In 2026, I founded{' '}
                  <strong className="gradient-text">UBE Labs</strong> — the independent lab where I
                  ship my own products, NeuroMail and Nexus.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.25}>
              <Card className="lg:mt-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">Snapshot</p>
                <div className="mt-2">
                  {snapshotFacts.map(fact => (
                    <div
                      key={fact.label}
                      className="flex items-start justify-between gap-4 border-b border-white/5 py-3 last:border-0"
                    >
                      <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-text-muted">
                        {fact.label}
                      </span>
                      <span className={cn('text-right text-sm', fact.accent ? 'font-medium text-success' : 'text-text-primary')}>
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Focus cards */}
      <section className="relative overflow-hidden py-24">
        <GridBackground />
        <Container className="relative z-10">
          <SectionHeader
            kicker="Focus Areas"
            title={<>What I <span className="gradient-text">Do</span></>}
            sub="Three tracks, one standard: it has to work outside the demo."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {focusAreas.map((focus, i) => (
              <ScrollReveal key={focus.title} delay={i * 0.1}>
                <div className="h-full transition-transform duration-300 hover:-translate-y-1">
                  <SpotlightCard className="h-full pb-8" spotlightColor="rgba(123, 104, 238, 0.12)">
                    <p
                      className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em]"
                      style={{ color: focus.accent }}
                    >
                      Focus 0{i + 1}
                    </p>
                    <h3 className="mt-3 text-lg font-bold">{focus.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{focus.body}</p>
                    <span
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-1"
                      style={{ backgroundColor: focus.accent }}
                    />
                  </SpotlightCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Where I've Worked — Dark Section */}
      <section className="section-dark noise-overlay relative overflow-hidden py-24">
        <Container className="relative z-10">
          <SectionHeader
            kicker="Track Record"
            title={<>Where I've <span className="gradient-text">Worked</span></>}
            sub="Four companies across Pakistan and Germany — plus my own lab."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {workHistory.map((job, i) => (
              <ScrollReveal key={job.company} delay={i * 0.08}>
                <div className="h-full rounded-[var(--radius-card)] border border-white/10 bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-coral/30">
                  <h3 className="font-bold leading-snug text-white">{job.company}</h3>
                  <p className="mt-1 text-sm text-coral">{job.role}</p>
                  <p className="mt-3 font-mono text-xs text-text-muted">{job.dates}</p>
                  <p className="mt-1 text-xs text-text-muted">{job.location}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <Link
                to="/experience"
                className="inline-flex items-center gap-1 text-sm font-medium text-coral transition-all hover:gap-2"
              >
                Full experience & metrics <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Skills — grouped chips */}
      <section className="py-24">
        <Container>
          <SectionHeader
            kicker="Stack"
            title={<>Skills & <span className="gradient-text">Tooling</span></>}
            sub="The tools behind the work — grouped by domain, no self-assessed percentages."
          />
          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {skillGroups.map((group, i) => (
              <ScrollReveal key={group.label} delay={i * 0.05}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                  {group.label}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <Badge key={item} className="border border-white/10">{item}</Badge>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA — Dark gradient */}
      <section className="section-dark noise-overlay relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-coral/10 blur-2xl animate-float-slow will-change-transform" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-violet/10 blur-2xl animate-float-medium will-change-transform" />
        </div>
        <Container className="relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Let's build something <span className="gradient-text">intelligent</span>.
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Have a role or a project in mind? I'm open to remote work worldwide.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button to="/contact" variant="primary">Get in Touch</Button>
              <Button to="/resume" variant="outline">View Resume</Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  )
}
