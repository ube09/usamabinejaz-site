import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/animations/ScrollReveal'
import usePageMeta from '@/hooks/usePageMeta'
import { experience, education } from '@/data/experience'
import { GraduationCap } from 'lucide-react'

export default function Experience() {
  usePageMeta(
    'Experience',
    'Work experience of Usama Bin Ejaz — Founder at UBE Labs, Lead Data Scientist at Dellsons Associates, AI/ML Engineer at Zapdas Technologies, TDK Electronics, and Swvl.'
  )

  return (
    <div>
      {/* Hero band */}
      <section className="relative overflow-hidden section-dark noise-overlay">
        <span
          aria-hidden
          className="absolute -bottom-8 right-0 text-[7rem] md:text-[12rem] font-bold leading-none text-white/[0.03] whitespace-nowrap select-none pointer-events-none"
        >
          experience
        </span>
        <Container className="relative z-10 py-20 md:py-28">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral">Experience</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
              Work <span className="gradient-text">Experience</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-text-muted">
              4+ years across five roles in Pakistan and Germany — from analytics intern to lead data scientist and founder.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Job list */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            {experience.map((entry, i) => (
              <ScrollReveal key={entry.company} delay={i * 0.08} className="border-b border-white/10 last:border-b-0">
                <article className="group grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8 px-4 sm:px-6 py-10 rounded-[var(--radius-card)] transition-all duration-300 hover:bg-white/[0.03] hover:-translate-y-1">
                  <p className="font-mono text-xs text-text-muted md:text-right md:pt-1.5">{entry.dates}</p>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{entry.role}</h3>
                    <p className="mt-1 text-sm text-coral">{entry.company} · {entry.location}</p>
                    <ul className="mt-4 space-y-2.5">
                      {entry.bullets.map(bullet => (
                        <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-text-primary/90">
                          <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-coral/60 group-hover:bg-coral transition-colors" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {entry.tech.map(t => (
                        <Badge key={t} className="border border-white/10">{t}</Badge>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Education */}
      <section className="pb-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Education" align="left" className="mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, i) => (
                <ScrollReveal key={edu.institution} delay={i * 0.15}>
                  <Card className="relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-violet/30">
                    <GraduationCap className="text-violet mb-3" size={22} />
                    <h3 className="font-bold">{edu.degree}</h3>
                    <p className="text-coral text-sm mt-1">{edu.institution}</p>
                    <p className="font-mono text-xs text-text-muted mt-2">{edu.location} · {edu.dates}</p>
                    <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-coral to-violet" />
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
