import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import ScrollReveal from '@/components/animations/ScrollReveal'
import GridBackground from '@/components/animations/GridBackground'
import { Download, FileText } from 'lucide-react'
import { usePageMeta } from '@/hooks/usePageMeta'

const PDF_PATH = '/resume/Usama_Bin_Ejaz_Resume.pdf'
const DOCX_PATH = '/resume/Usama_Bin_Ejaz_Resume.docx'

const downloadBase =
  'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[var(--radius-button)] font-semibold text-sm transition-all duration-200 cursor-pointer'

export default function Resume() {
  usePageMeta('Resume', 'Resume of Usama Bin Ejaz — AI/ML Engineer and Data Scientist. View it online or download as PDF or DOCX.')

  return (
    <div className="pt-16 lg:pt-24 pb-24">
      {/* Hero band */}
      <section className="relative overflow-hidden pb-12">
        <GridBackground />
        <Container className="relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-coral mb-3">Resume</p>
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Curriculum Vitae</span>
            </h1>
            <p className="mt-4 text-lg text-text-muted max-w-2xl">
              Experience, projects, and education on one page — read it below or take a copy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={PDF_PATH}
                download
                className={`${downloadBase} bg-cta text-white hover:bg-cta-hover shadow-lg shadow-cta/25 hover:shadow-cta/40 hover:-translate-y-0.5`}
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
              <a
                href={DOCX_PATH}
                download
                className={`${downloadBase} border-2 border-accent text-accent hover:bg-accent hover:text-white`}
              >
                <FileText className="w-4 h-4" />
                Download DOCX
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Embedded viewer */}
      <section>
        <Container>
          <ScrollReveal delay={0.15}>
            <Card className="p-2 sm:p-3">
              <iframe
                src={PDF_PATH}
                title="Resume"
                className="w-full rounded-xl border border-white/10 bg-white"
                style={{ height: '85vh', minHeight: '700px' }}
              />
            </Card>
            <p className="mt-4 text-center text-sm text-text-muted">
              Viewer not loading? Use the download buttons.
            </p>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  )
}
