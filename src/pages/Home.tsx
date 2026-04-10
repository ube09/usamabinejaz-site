import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/animations/ScrollReveal'
import NeuralNetwork from '@/components/animations/NeuralNetwork'
import FloatingOrbs from '@/components/animations/FloatingOrbs'
import CountUp from '@/components/animations/CountUp'
import SpotlightCard from '@/components/animations/SpotlightCard'
import Typewriter from '@/components/animations/Typewriter'
import TerminalMockup from '@/components/animations/TerminalMockup'
import GridBackground from '@/components/animations/GridBackground'
import { services } from '@/data/services'
import { techStack } from '@/data/techStack'
import Tilt from 'react-parallax-tilt'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: '', label: 'Products Shipped' },
  { value: 4, suffix: '', label: 'Companies Served' },
  { value: 15, suffix: '+', label: 'Technologies' },
]

const products = [
  {
    name: 'NeuroMail',
    tagline: 'AI-powered email assistant with agent orchestration',
    image: '/images/neuromail/neuromail-dashboard-dark.webp',
    tech: ['Electron', 'LangGraph', 'OpenAI', 'FastAPI'],
    link: '/products#neuromail',
  },
  {
    name: 'Nexus',
    tagline: 'Cross-platform team collaboration suite',
    image: '/images/nexus/nexus-dashboard-dark.webp',
    tech: ['Next.js', 'React Native', 'PostgreSQL', 'Socket.io'],
    link: '/products#nexus',
  },
]

const typewriterWords = [
  'LLM agents',
  'data pipelines',
  'ML models',
  'full-stack products',
  'AI automations',
  'RAG systems',
]

export default function Home() {
  return (
    <>
      {/* Hero — Neural Network Background */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
        <NeuralNetwork />
        <FloatingOrbs />
        <Container className="relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="gradient-text">AI that ships.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-text-muted font-light max-w-full overflow-hidden">
              I build{' '}
              <Typewriter
                words={typewriterWords}
                className="text-text-primary font-semibold inline-block"
              />
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/products" variant="primary">See Products</Button>
              <Button to="/services" variant="outline">Hire Me</Button>
            </div>
          </ScrollReveal>

          {/* Terminal Mockup */}
          <ScrollReveal delay={0.6}>
            <div className="mt-16">
              <TerminalMockup />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Social Proof — Animated counters */}
      <section className="py-20 relative">
        <div className="absolute inset-0 animate-shimmer" />
        <Container className="relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="group">
                  <div className="text-4xl md:text-5xl font-bold gradient-text">
                    <CountUp to={stat.value} suffix={stat.suffix} duration={2} />
                  </div>
                  <p className="mt-2 text-sm text-text-muted group-hover:text-text-primary transition-colors">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Products Preview — Dark Section */}
      <section className="py-24 section-dark noise-overlay relative overflow-hidden">
        <Container className="relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
              What I've <span className="gradient-text">Built</span>
            </h2>
            <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
              Shipped products with real users — not just side projects.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.15}>
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable glareMaxOpacity={0.15} glareColor="rgba(132, 94, 194, 0.3)" glarePosition="all">
                  <Link to={product.link} className="block group">
                    <div className="bg-bg-dark-lighter rounded-[var(--radius-card)] border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-[0_0_40px_rgba(132,94,194,0.15)]">
                      <div className="aspect-video bg-bg-dark overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white">{product.name}</h3>
                        <p className="mt-1 text-gray-400 text-sm">{product.tagline}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {product.tech.map(t => (
                            <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center gap-1 text-coral text-sm font-medium group-hover:gap-2 transition-all">
                          Learn more <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Tilt>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative overflow-hidden">
        <GridBackground dotColor="rgba(132, 94, 194, 0.1)" activeColor="rgba(132, 94, 194, 0.35)" />
        <Container className="relative z-10">
          <SectionHeading title="What I Do" subtitle="End-to-end AI engineering — from data to deployment." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <SpotlightCard className="h-full" spotlightColor="rgba(132, 94, 194, 0.12)">
                  <service.icon className="text-coral mb-4" size={28} />
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-text-muted text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.bullets.map(b => (
                      <li key={b} className="text-sm text-text-primary flex items-start gap-2">
                        <span className="text-coral mt-1">→</span> {b}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/services" variant="outline">View All Services</Button>
          </div>
        </Container>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-16 overflow-hidden bg-bg-secondary">
        <Container className="mb-8">
          <p className="text-center text-sm text-text-muted uppercase tracking-wider font-medium">Technologies I work with</p>
        </Container>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="mx-3 px-5 py-2 rounded-full bg-surface text-text-muted text-sm font-mono border border-white/10 hover:text-coral hover:border-coral/30 hover:shadow-[0_0_15px_rgba(74,144,217,0.15)] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Dark gradient */}
      <section className="py-24 section-dark noise-overlay relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-coral/10 rounded-full blur-2xl animate-float-slow will-change-transform" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet/10 rounded-full blur-2xl animate-float-medium will-change-transform" />
        </div>
        <Container className="text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Let's build something <span className="gradient-text">intelligent</span>.
            </h2>
            <p className="mt-4 text-gray-400 text-lg">Have a project in mind? I'd love to hear about it.</p>
            <div className="mt-8">
              <Button to="/contact" variant="primary">Get in Touch</Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  )
}
