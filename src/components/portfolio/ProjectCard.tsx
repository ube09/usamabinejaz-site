import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Badge from '@/components/ui/Badge'
import { CATEGORY_META } from '@/data/portfolio'
import type { PortfolioProject } from '@/data/portfolio'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: PortfolioProject
  variant?: 'default' | 'featured'
}

export default function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  const featured = variant === 'featured'
  const accent = CATEGORY_META[project.category].accent
  const videoRef = useRef<HTMLVideoElement>(null)

  const playVideo = () => {
    videoRef.current?.play().catch(() => {})
  }
  const stopVideo = () => {
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  // A request-type project with a written case study still gets a detail page
  const hasCaseStudy = project.link.type === 'case-study' || (project.link.type === 'request' && Boolean(project.caseStudy))

  const body = (
    <>
      {project.video ? (
        <div
          className={cn('shrink-0 overflow-hidden', featured ? 'aspect-video' : 'h-36')}
          onMouseEnter={playVideo}
          onMouseLeave={stopVideo}
        >
          <video
            ref={videoRef}
            src={project.video}
            poster={project.image}
            muted
            loop
            playsInline
            preload="none"
            className="h-full w-full object-cover"
          />
        </div>
      ) : project.image ? (
        <div className={cn('shrink-0 overflow-hidden', featured ? 'aspect-video' : 'h-36')}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-text-muted">
          <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} />
          {project.kicker}
        </p>
        <h3 className={cn('mt-2.5 font-bold leading-snug text-text-primary transition-colors group-hover:text-white', featured ? 'text-xl' : 'text-lg')}>
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted line-clamp-2">
          {project.description}
        </p>
        {project.metric ? (
          <p className="mt-3 font-mono text-xs" style={{ color: accent }}>
            {project.metric}
          </p>
        ) : null}

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {project.tech.slice(0, 5).map(t => (
            <Badge key={t} className="border border-white/10">{t}</Badge>
          ))}
        </div>

        {project.link.type === 'github' || project.link.type === 'external' ? (
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: accent }}>
            {project.link.type === 'github' ? 'GitHub' : project.link.label ?? 'Visit'}
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
          </p>
        ) : null}
        {hasCaseStudy ? (
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: accent }}>
            Case study
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </p>
        ) : null}
        {project.link.type === 'request' ? (
          <p className={cn('inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-muted', hasCaseStudy ? 'mt-2.5' : 'mt-4')}>
            Private build — code on request
          </p>
        ) : null}
      </div>

      <span aria-hidden className="absolute inset-x-0 bottom-0 h-1" style={{ background: accent }} />
    </>
  )

  const cardClasses = cn(
    'group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-sm border border-white/10',
    'transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg hover:shadow-black/40'
  )
  const interactiveClasses = 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/70'

  if ((project.link.type === 'github' || project.link.type === 'external') && project.link.href) {
    return (
      <a
        href={project.link.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.title} — ${project.link.type === 'github' ? 'GitHub repository' : project.link.label ?? 'external link'}`}
        className={cn(cardClasses, interactiveClasses)}
      >
        {body}
      </a>
    )
  }
  if (hasCaseStudy) {
    return (
      <Link
        to={`/projects/${project.id}`}
        aria-label={`${project.title} — case study`}
        className={cn(cardClasses, interactiveClasses)}
      >
        {body}
      </Link>
    )
  }
  return <div className={cardClasses}>{body}</div>
}
