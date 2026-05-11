import { Project } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  privateBadgeLabel: string
  sideBadgeLabel: string
  contributionsLabel: string
  caseAngleLabel: string
}

export function ProjectCard({ project, privateBadgeLabel, sideBadgeLabel, contributionsLabel, caseAngleLabel }: ProjectCardProps) {
  const isPrivate = project.type === 'professional-private'

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col gap-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">{project.name}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{project.context}</p>
        </div>
        <Badge
          className={cn(
            'text-xs shrink-0',
            isPrivate
              ? 'border-amber-700/50 bg-amber-900/20 text-amber-400'
              : 'border-slate-600 bg-slate-800 text-slate-400'
          )}
          variant="outline"
        >
          {isPrivate ? privateBadgeLabel : sideBadgeLabel}
        </Badge>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">{contributionsLabel}</p>
        <ul className="space-y-1.5">
          {project.contributions.map((c, i) => (
            <li key={i} className="text-sm text-slate-300 flex gap-2">
              <span className="text-cyan-500 mt-0.5 shrink-0">›</span>
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">{caseAngleLabel}</p>
        <blockquote className="border-l-2 border-cyan-700 pl-4 text-sm italic text-slate-400">
          {project.caseAngle}
        </blockquote>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="outline" className="text-xs border-slate-700 text-slate-400 bg-slate-800/40">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}
