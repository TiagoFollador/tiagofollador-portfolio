'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useLocale } from '@/context/LocaleContext'
import { useAudience } from '@/context/AudienceContext'
import { content } from '@/data/content'
import { skillGroups } from '@/data/skills'
import { Section, SectionTitle } from '@/components/ui/Section'
import { Badge } from '@/components/ui/badge'

export function SkillsSection() {
  const { locale } = useLocale()
  const { audience } = useAudience()
  const shouldReduceMotion = useReducedMotion()
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
      <SectionTitle>{audience === 'leaders' ? t.capabilitiesTitle : t.title}</SectionTitle>
      <AnimatePresence mode="wait">
        <motion.div
          key={audience}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
        >
          {audience === 'devs' ? (
            <div className="flex flex-col gap-8">
              {skillGroups.map((group) => (
                <div key={group.key}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
                    {groupLabels[group.key] ?? group.key}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className={
                          group.key === 'improving'
                            ? 'border-neutral-700 text-neutral-500 bg-neutral-900/40 text-xs'
                            : 'border-neutral-700 text-neutral-300 bg-neutral-800/40 text-xs'
                        }
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.capabilities.map((capability) => (
                <div
                  key={capability.label}
                  className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 transition-colors hover:border-brand/60"
                >
                  <p className="text-sm font-semibold text-brand mb-1.5">{capability.label}</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
