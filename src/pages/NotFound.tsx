import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import GridBackground from '@/components/animations/GridBackground'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  usePageMeta('404', 'Page not found — this page shipped elsewhere.')

  return (
    <section className="relative min-h-[70vh] flex items-center py-24 overflow-hidden">
      <GridBackground />
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-coral">
              Error 404
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold">
              404 — this page <span className="gradient-text">shipped elsewhere</span>.
            </h1>
            <p className="mt-6 text-text-muted text-lg">
              The URL you followed doesn't exist here. Head back to the landing
              page, or browse the project archive instead.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/">
                Back to Home <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button to="/projects" variant="outline">
                View Projects
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
