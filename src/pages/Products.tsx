import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/animations/ScrollReveal'
import SpotlightCard from '@/components/animations/SpotlightCard'
import GridBackground from '@/components/animations/GridBackground'
import { Mail, Users, FileText, Bell, Zap, Brain, MessageSquare, Calendar, BarChart3, Shield } from 'lucide-react'

const neuromailFeatures = [
  { icon: Brain, title: 'AI Label Suggestions', description: 'Smart categorization of incoming emails using trained models.' },
  { icon: Mail, title: 'Draft Generation', description: 'AI-generated reply drafts with one-click sending.' },
  { icon: Bell, title: 'Follow-up Monitor', description: 'Track emails that need follow-up — never miss a thread.' },
  { icon: Users, title: 'Contact Extraction', description: 'Automatically extract and organize contact info from emails.' },
  { icon: Zap, title: 'Bulk Mailer', description: 'Send personalized emails at scale with templates.' },
  { icon: FileText, title: 'Training Hub', description: 'Train the AI on your writing style and preferences.' },
]

const nexusFeatures = [
  { icon: FileText, title: 'Task Management', description: 'Priorities, recurring tasks, tags, and statuses.' },
  { icon: MessageSquare, title: 'Real-time Chat', description: 'Channels, threads, @mentions, and reactions.' },
  { icon: Mail, title: 'Email Integration', description: 'Auto-create tasks from emails (Gmail + Outlook).' },
  { icon: Calendar, title: 'Calendar Sync', description: 'Team calendar with color-coded events.' },
  { icon: BarChart3, title: 'Reports & Analytics', description: 'Charts, trends, and team performance metrics.' },
  { icon: Shield, title: 'RBAC & Permissions', description: 'Role-based access with admin, manager, and member roles.' },
]

export default function Products() {
  return (
    <div className="pt-24">
      <section className="py-16 relative overflow-hidden">
        <GridBackground />
        <Container className="text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Products</span>
            </h1>
            <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
              Shipped products with real users. Built end-to-end.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* NeuroMail — Dark Section */}
      <section id="neuromail" className="py-24 section-dark noise-overlay relative overflow-hidden scroll-mt-24">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <Badge className="mb-4 bg-coral/20 text-coral border-coral/30">Desktop App</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white">NeuroMail</h2>
                <p className="text-gray-400 text-lg mt-2">AI-powered email assistant with agent orchestration</p>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Email overload kills productivity. NeuroMail uses 4 AI agents (built with LangGraph) to automatically triage your inbox, generate reply drafts, track follow-ups, and extract contacts. It integrates directly with Gmail and works as a desktop app.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Electron', 'React', 'FastAPI', 'LangGraph', 'OpenAI', 'spaCy'].map(t => (
                    <span key={t} className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700">{t}</span>
                  ))}
                </div>
                <div className="mt-6">
                  <Button to="/contact" variant="primary">Request Access</Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-[var(--radius-card)] overflow-hidden shadow-2xl border border-gray-800">
                <img src="/images/neuromail/neuromail-draft-dark.webp" alt="NeuroMail Draft Generator" className="w-full" loading="lazy" />
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {neuromailFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.05}>
                <SpotlightCard className="h-full bg-bg-dark-lighter border-gray-800" spotlightColor="rgba(255, 107, 107, 0.08)">
                  <feature.icon className="text-coral mb-3" size={24} />
                  <h3 className="font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Nexus */}
      <section id="nexus" className="py-24 scroll-mt-24 relative overflow-hidden">
        <GridBackground dotColor="rgba(132, 94, 194, 0.1)" activeColor="rgba(132, 94, 194, 0.4)" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.2} className="order-2 lg:order-1">
              <div className="rounded-[var(--radius-card)] overflow-hidden shadow-lg border border-white/10">
                <img src="/images/nexus/nexus-dashboard-dark.webp" alt="Nexus Dashboard" className="w-full" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal className="order-1 lg:order-2">
              <div>
                <Badge className="mb-4 bg-violet/10 text-violet">Web + Mobile</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Nexus</h2>
                <p className="text-text-muted text-lg mt-2">Cross-platform team collaboration suite</p>
                <p className="text-text-primary mt-4 leading-relaxed">
                  A unified platform for task management, team chat, email integration, and project analytics. Built as a monorepo with Next.js (web) and React Native/Expo (mobile). Features JWT auth, RBAC, real-time messaging, push notifications, and role-based dashboards.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Next.js', 'React Native', 'Expo', 'PostgreSQL', 'Prisma', 'Socket.io'].map(t => <Badge key={t}>{t}</Badge>)}
                </div>
                <div className="mt-6">
                  <Button to="/contact" variant="primary">Request Demo</Button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nexusFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.05}>
                <SpotlightCard className="h-full" spotlightColor="rgba(132, 94, 194, 0.08)">
                  <feature.icon className="text-violet mb-3" size={24} />
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-text-muted text-sm mt-1">{feature.description}</p>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
