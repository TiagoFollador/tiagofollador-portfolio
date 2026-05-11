'use client'

import { useLocale } from '@/context/LocaleContext'
import { content } from '@/data/content'
import { skillGroups } from '@/data/skills'
import { Section, SectionTitle } from '@/components/ui/Section'
import { Badge } from '@/components/ui/badge'

export function SkillsSection() {
  const { locale } = useLocale()
  const t = content[locale].skills

  const groupLabels: Record<string, string> = {
    backend: t.groups.backend,
    frontend: t.groups.frontend,
    databases: t.groups.databases,
    integrations: t.groups.integrations,
    improving: t.groups.improving,
  }

  return (
    <Section id="skills">
      <SectionTitle>{t.title}</SectionTitle>
      <div className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <div key={group.key}>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
              {groupLabels[group.key] ?? group.key}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className={
                    group.key === 'improving'
                      ? 'border-slate-700 text-slate-500 bg-slate-900/40 text-xs'
                      : 'border-slate-700 text-slate-300 bg-slate-800/40 text-xs'
                  }
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
