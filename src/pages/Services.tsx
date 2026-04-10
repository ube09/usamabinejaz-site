import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/animations/ScrollReveal'
import SpotlightCard from '@/components/animations/SpotlightCard'
import GridBackground from '@/components/animations/GridBackground'
import { services, processSteps } from '@/data/services'

export default function Services() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <GridBackground activeColor="rgba(255, 107, 107, 0.35)" />
        <Container className="text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold">
              What I <span className="gradient-text">Build</span>
            </h1>
            <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
              End-to-end engineering — from data pipelines to production AI to shipped products.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Service Blocks */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 right-0 w-72 h-72 bg-coral/10 rounded-full blur-2xl animate-float-slow will-change-transform" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 bg-violet/10 rounded-full blur-2xl animate-float-medium will-change-transform" />
        </div>
        <Container className="relative z-10">
          <div className="space-y-16">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <SpotlightCard className="p-8 md:p-12" spotlightColor="rgba(132, 94, 194, 0.06)">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <service.icon className="text-coral mb-4" size={32} />
                      <h2 className="text-2xl font-bold">{service.title}</h2>
                      <p className="text-text-muted mt-2">{service.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wider text-text-muted mb-3">What I deliver</h4>
                      <ul className="space-y-2">
                        {service.bullets.map(b => (
                          <li key={b} className="flex items-start gap-2 text-sm">
                            <span className="text-coral mt-0.5">→</span> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wider text-text-muted mb-3">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map(t => <Badge key={t}>{t}</Badge>)}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process — Dark Section */}
      <section className="py-24 section-dark noise-overlay relative overflow-hidden">
        <Container className="relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-2">
              How I <span className="gradient-text">Work</span>
            </h2>
            <p className="text-gray-400 text-center mb-16">Straightforward process. No fluff.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-coral to-violet text-white flex items-center justify-center font-bold text-lg mx-auto shadow-[0_0_20px_rgba(255,107,107,0.3)]">
                    {step.step}
                  </div>
                  <h3 className="font-bold mt-4 text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <Container className="text-center">
          <ScrollReveal>
            <h3 className="text-2xl font-bold">Pricing</h3>
            <p className="mt-4 text-text-muted">
              Starting at <strong className="text-text-primary">$40/hr</strong> for freelance engagements.
              Fixed-price available for defined scopes.
            </p>
            <p className="text-text-muted text-sm mt-2">
              Formal proposals via{' '}
              <a href="https://www.upwork.com/freelancers/~0114a62f0bcb3d56fa" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
                Upwork
              </a>
              .
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-coral/10 via-violet/10 to-cta/10 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-coral/15 rounded-full blur-2xl animate-float-slow will-change-transform" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet/15 rounded-full blur-2xl animate-float-medium will-change-transform" />
        </div>
        <Container className="text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold">Have a project in mind?</h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary">Let's Talk</Button>
              <Button href="https://www.upwork.com/freelancers/~0114a62f0bcb3d56fa" variant="outline">View Upwork Profile</Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  )
}
