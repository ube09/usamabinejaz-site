import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import ScrollReveal from '@/components/animations/ScrollReveal'
import CountUp from '@/components/animations/CountUp'
import Button from '@/components/ui/Button'
import GridBackground from '@/components/animations/GridBackground'
import { projects } from '@/data/projects'

export default function Work() {
  return (
    <div className="pt-24">
      <section className="py-16 relative overflow-hidden">
        <GridBackground />
        <Container className="text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Work</span>
            </h1>
            <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
              Case studies from production systems — with real metrics.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {projects.map((project, i) => (
        <section
          key={project.id}
          id={project.id}
          className={`py-24 scroll-mt-24 relative overflow-hidden ${i % 2 === 1 ? 'section-dark noise-overlay' : ''}`}
        >
          <Container className="relative z-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <ScrollReveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`rounded-[var(--radius-card)] overflow-hidden shadow-lg ${i % 2 === 1 ? 'border border-gray-800' : 'border border-gray-100'}`}>
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div>
                  <h2 className={`text-2xl md:text-3xl font-bold ${i % 2 === 1 ? 'text-white' : ''}`}>{project.title}</h2>
                  <p className={`mt-1 ${i % 2 === 1 ? 'text-gray-400' : 'text-text-muted'}`}>{project.subtitle}</p>

                  <div className="mt-6">
                    <h4 className={`font-semibold text-sm uppercase tracking-wider mb-2 ${i % 2 === 1 ? 'text-gray-500' : 'text-text-muted'}`}>Challenge</h4>
                    <p className={`text-sm leading-relaxed ${i % 2 === 1 ? 'text-gray-300' : 'text-text-primary'}`}>{project.challenge}</p>
                  </div>

                  <div className="mt-4">
                    <h4 className={`font-semibold text-sm uppercase tracking-wider mb-2 ${i % 2 === 1 ? 'text-gray-500' : 'text-text-muted'}`}>Approach</h4>
                    <p className={`text-sm leading-relaxed ${i % 2 === 1 ? 'text-gray-300' : 'text-text-primary'}`}>{project.approach}</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {project.results.map(result => (
                      <div key={result.label} className={`text-center p-3 rounded-lg ${i % 2 === 1 ? 'bg-bg-dark-lighter border border-gray-800' : 'bg-bg-secondary'}`}>
                        <div className="text-2xl font-bold text-coral">
                          <CountUp to={result.value} suffix={result.suffix} />
                        </div>
                        <p className={`text-xs mt-1 ${i % 2 === 1 ? 'text-gray-500' : 'text-text-muted'}`}>{result.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      i % 2 === 1
                        ? <span key={t} className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700">{t}</span>
                        : <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-coral/5 via-violet/5 to-cta/5 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-coral/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet/10 rounded-full blur-3xl animate-float-medium" />
        </div>
        <Container className="text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold">Want results like these?</h2>
            <div className="mt-8">
              <Button to="/contact" variant="primary">Start a Conversation</Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  )
}
