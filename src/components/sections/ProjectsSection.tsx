'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useLocale } from '@/context/LocaleContext'
import { useAudience } from '@/context/AudienceContext'
import { content } from '@/data/content'
import { projects } from '@/data/projects'
import { Section, SectionTitle } from '@/components/ui/Section'
import { ProjectCard } from '@/components/ui/ProjectCard'

export function ProjectsSection() {
  const { locale } = useLocale()
  const { audience } = useAudience()
  const shouldReduceMotion = useReducedMotion()
  const t = content[locale].projects

  const labels = {
    whatItDoes: t.whatItDoesLabel,
    contributions: t.contributionsLabel,
    impact: t.impactLabel,
    caseAngle: t.caseAngleLabel,
    metrics: t.metricsLabel,
    code: t.codeLabel,
    visit: t.visitLabel,
    caseStudy: t.caseStudyLabels,
  }

  return (
    <Section id="projects">
      <SectionTitle>{t.title}</SectionTitle>
      <AnimatePresence mode="wait">
        <motion.div
          key={audience}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          className="flex flex-col gap-6"
        >
          {projects[locale].map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              audience={audience}
              labels={labels}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
