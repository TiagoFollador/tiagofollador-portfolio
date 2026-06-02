import { ExternalLink as ExternalLinkIcon } from 'lucide-react'
import { Project } from '@/data/projects'
import { Audience } from '@/context/AudienceContext'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { GitHubIcon } from '@/components/ui/BrandIcons'

interface ProjectCardLabels {
  whatItDoes: string
  contributions: string
  impact: string
  caseAngle: string
  metrics: string
  code: string
  visit: string
  caseStudy: { problem: string; approach: string; result: string }
}

interface ProjectCardProps {
  project: Project
  audience: Audience
  labels: ProjectCardLabels
}

export function ProjectCard({ project, audience, labels }: ProjectCardProps) {
  const isDevs = audience === 'devs'

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 flex flex-col gap-5 transition-colors hover:border-brand/60">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-neutral-100">{project.name}</h3>
          <p className="text-sm text-neutral-400 mt-1 max-w-xl">{project.businessHeadline}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {project.url && (
            <ExternalLink
              href={project.url}
              aria-label={`${project.name} — ${labels.visit}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-strong hover:bg-brand text-white text-xs font-medium px-2.5 py-1.5 transition-colors"
            >
              <ExternalLinkIcon size={12} />
              {labels.visit}
            </ExternalLink>
          )}
          {project.repo && (
            <ExternalLink
              href={project.repo}
              aria-label={`${project.name} ${labels.code}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-700 hover:border-brand/60 text-neutral-400 hover:text-neutral-200 text-xs px-2.5 py-1.5"
            >
              <GitHubIcon size={14} />
              {labels.code}
            </ExternalLink>
          )}
          {project.label && (
            <Badge
              className="text-xs border-brand/40 bg-brand/20 text-brand"
              variant="outline"
            >
              {project.label}
            </Badge>
          )}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">{labels.whatItDoes}</p>
        <p className="text-sm text-neutral-300 leading-relaxed">{project.whatItDoes}</p>
      </div>

      {isDevs && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">{labels.contributions}</p>
          <ul className="space-y-1.5">
            {project.contributions.map((c, i) => (
              <li key={i} className="text-sm text-neutral-300 flex gap-2">
                <span className="text-brand mt-0.5 shrink-0">›</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}

      {(!isDevs || !project.caseStudy) && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">{labels.impact}</p>
          <p className="text-sm text-neutral-300 leading-relaxed">{project.impact}</p>
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {project.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-md border border-brand/40 bg-brand/20 px-2.5 py-1 text-xs font-mono text-brand"
                >
                  {metric}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {isDevs && project.caseStudy && (
        <div className="rounded-lg border border-neutral-800 bg-neutral-950/40 p-4 flex flex-col gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-1">{labels.caseStudy.problem}</p>
            <p className="text-sm text-neutral-300 leading-relaxed">{project.caseStudy.problem}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-1">{labels.caseStudy.approach}</p>
            <p className="text-sm text-neutral-300 leading-relaxed">{project.caseStudy.approach}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-1">{labels.caseStudy.result}</p>
            <p className="text-sm text-neutral-300 leading-relaxed">{project.caseStudy.result}</p>
          </div>
        </div>
      )}

      {isDevs && !project.caseStudy && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">{labels.caseAngle}</p>
          <blockquote className="border-l-2 border-brand/50 pl-4 text-sm italic text-neutral-400">
            {project.caseAngle}
          </blockquote>
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="outline" className="text-xs border-neutral-700 text-neutral-400 bg-neutral-800/40">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}
