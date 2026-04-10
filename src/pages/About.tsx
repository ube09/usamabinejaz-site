import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/animations/ScrollReveal'
import Button from '@/components/ui/Button'
import GridBackground from '@/components/animations/GridBackground'
import { timeline, education } from '@/data/timeline'
import { GraduationCap, MapPin } from 'lucide-react'

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <GridBackground />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="w-56 h-56 md:w-72 md:h-72 mx-auto md:ml-auto md:mr-0 rounded-full overflow-hidden border-4 border-coral/20 animate-glow-pulse">
                <img
                  src="/images/usama-profile.png"
                  alt="Usama Bin Ejaz"
                  className="w-full h-full object-cover scale-[1.9] object-[29%_10%]"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Usama Bin Ejaz</h1>
                <p className="text-text-muted text-lg mb-2 flex items-center gap-2">
                  <MapPin size={16} /> Karachi, Pakistan
                </p>
                <p className="text-text-primary leading-relaxed mt-4">
                  I'm an AI/ML engineer who builds production systems — not just prototypes. Over the past 4+ years, I've worked across e-commerce, fintech, transport logistics, HR/SaaS, and property valuation, shipping ML models, data pipelines, and full-stack applications.
                </p>
                <p className="text-text-primary leading-relaxed mt-3">
                  I studied Computer Science in Pakistan (FAST-NUCES), then moved to Germany for my Master's in AI & Data Science (Deggendorf Institute of Technology). After working at TDK Electronics in Munich, I came back to Karachi to build.
                </p>
                <p className="text-text-primary leading-relaxed mt-3">
                  In 2026, I founded <strong className="gradient-text">UBE Labs</strong> to ship my own products and help others build theirs.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Timeline — Dark Section */}
      <section className="py-24 section-dark noise-overlay relative overflow-hidden">
        <Container className="relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-2">
              Career <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-gray-400 text-center mb-16">From intern to founder.</p>
          </ScrollReveal>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-coral via-violet to-coral/0 md:-translate-x-px" />
            {timeline.map((entry, i) => (
              <ScrollReveal key={entry.company} delay={i * 0.1}>
                <div className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-coral rounded-full -translate-x-1.5 mt-2 z-10 shadow-[0_0_10px_rgba(255,107,107,0.5)]" />
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="text-xs font-mono text-gray-500">{entry.period}</span>
                    <h3 className="font-bold text-lg mt-1 text-white">{entry.title}</h3>
                    <p className="text-coral text-sm">{entry.company} · {entry.location}</p>
                    <p className="text-gray-400 text-sm mt-2">{entry.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Education */}
      <section className="py-24">
        <Container>
          <SectionHeading title="Education" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {education.map((edu, i) => (
              <ScrollReveal key={edu.school} delay={i * 0.15}>
                <Card className="h-full hover:shadow-md hover:border-coral/20 transition-all">
                  <GraduationCap className="text-violet mb-3" size={24} />
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="text-accent text-sm">{edu.school}</p>
                  <p className="text-text-muted text-sm">{edu.location} · {edu.period}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why UBE Labs */}
      <section className="py-24 bg-gradient-to-br from-coral/10 via-violet/10 to-cta/10 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-coral/15 rounded-full blur-2xl animate-float-slow will-change-transform" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet/15 rounded-full blur-2xl animate-float-medium will-change-transform" />
        </div>
        <Container className="max-w-3xl text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why <span className="gradient-text">UBE Labs</span>?</h2>
            <p className="text-text-primary text-lg leading-relaxed">
              After years of building AI systems for companies, I realized the best way to prove you can build is to <em>actually build</em>. UBE Labs is where I ship my own products — NeuroMail, Nexus, and whatever comes next — while helping clients build theirs.
            </p>
            <p className="text-text-muted mt-4">
              The name? My initials. The mission? AI that ships.
            </p>
            <div className="mt-8">
              <Button to="/contact" variant="primary">Let's Work Together</Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  )
}
