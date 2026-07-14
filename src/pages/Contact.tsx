import { useState } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/animations/ScrollReveal'
import GridBackground from '@/components/animations/GridBackground'
import { Mail, ExternalLink, Clock, MapPin, Phone } from 'lucide-react'

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function WhatsappIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_key: 'e76d14e0-363b-45e8-8cfd-8cef3a6a2e93', ...form }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="pt-24">
      <section className="py-16 relative overflow-hidden">
        <GridBackground activeColor="rgba(255, 107, 107, 0.4)" />
        <Container className="text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold">Get in <span className="gradient-text">Touch</span></h1>
            <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
              Have a project in mind? Let's talk about what you're building.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-coral/10 rounded-full blur-2xl animate-float-slow will-change-transform" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-violet/10 rounded-full blur-2xl animate-float-medium will-change-transform" />
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Form */}
            <ScrollReveal>
              {status === 'sent' ? (
                <div className="bg-success/10 border border-success/20 rounded-[var(--radius-card)] p-8 text-center">
                  <h3 className="text-xl font-bold text-success">Message Sent!</h3>
                  <p className="text-text-muted mt-2">Thanks! I'll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="mt-4 text-accent text-sm hover:underline cursor-pointer">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-white/10 bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-white/10 bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-white/10 bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-white/10 bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-colors resize-none"
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try again or email me directly.</p>
                  )}
                  <Button type="submit" variant="primary" className="w-full">
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">Direct Links</h3>
                  <div className="space-y-3">
                    <a href="https://www.upwork.com/freelancers/~0114a62f0bcb3d56fa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-muted hover:text-coral transition-colors">
                      <ExternalLink size={18} /> Upwork Profile
                    </a>
                    <a href="mailto:ejazusamabin@gmail.com" className="flex items-center gap-3 text-text-muted hover:text-coral transition-colors">
                      <Mail size={18} /> ejazusamabin@gmail.com
                    </a>
                    <a href="tel:+923212767768" className="flex items-center gap-3 text-text-muted hover:text-coral transition-colors">
                      <Phone size={18} /> +92 321 2767768
                    </a>
                    <a href="https://wa.me/923212767768" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-muted hover:text-coral transition-colors">
                      <WhatsappIcon /> WhatsApp
                    </a>
                    <a href="https://github.com/ube09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-muted hover:text-coral transition-colors">
                      <GithubIcon /> GitHub
                    </a>
                    <a href="https://linkedin.com/in/usama-bin-ejaz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-muted hover:text-coral transition-colors">
                      <LinkedinIcon /> LinkedIn
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Location & Availability</h3>
                  <div className="space-y-3 text-text-muted">
                    <p className="flex items-center gap-3"><MapPin size={18} /> Karachi, Pakistan</p>
                    <p className="flex items-center gap-3"><Clock size={18} /> PKT (GMT+5) · Available for async collaboration worldwide</p>
                  </div>
                </div>

                <div className="p-6 bg-bg-secondary rounded-[var(--radius-card)] border border-white/10">
                  <p className="text-sm text-text-muted">
                    <strong className="text-text-primary">Prefer Upwork?</strong> For formal proposals and milestone-based contracts,{' '}
                    <a href="https://www.upwork.com/freelancers/~0114a62f0bcb3d56fa" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
                      reach out on Upwork
                    </a>
                    .
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </div>
  )
}
