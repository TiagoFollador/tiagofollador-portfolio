'use client'

import { useLocale } from '@/context/LocaleContext'
import { content } from '@/data/content'
import { projects } from '@/data/projects'
import { Section, SectionTitle } from '@/components/ui/Section'
import { ProjectCard } from '@/components/ui/ProjectCard'

export function ProjectsSection() {
  const { locale } = useLocale()
  const t = content[locale].projects

  return (
    <Section id="projects">
      <SectionTitle>{t.title}</SectionTitle>
      <div className="flex flex-col gap-6">
        {projects[locale].map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            privateBadgeLabel={t.privateBadge}
            sideBadgeLabel={t.sideBadge}
            contributionsLabel={t.contributionsLabel}
            caseAngleLabel={t.caseAngleLabel}
          />
        ))}
      </div>
    </Section>
  )
}
