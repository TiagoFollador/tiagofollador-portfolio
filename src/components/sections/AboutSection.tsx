'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useLocale } from '@/context/LocaleContext'
import { useAudience } from '@/context/AudienceContext'
import { content } from '@/data/content'
import { Section, SectionTitle } from '@/components/ui/Section'

export function AboutSection() {
  const { locale } = useLocale()
  const { audience } = useAudience()
  const shouldReduceMotion = useReducedMotion()
  const t = content[locale].about

  return (
    <Section id="about">
      <SectionTitle>{t.title}</SectionTitle>
      <div className="space-y-4 max-w-2xl">
        <p className="text-neutral-300 leading-relaxed">{t.human}</p>
        <AnimatePresence mode="wait">
          <motion.p
            key={audience}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="text-neutral-300 leading-relaxed"
          >
            {audience === 'devs' ? t.technical : t.outcomes}
          </motion.p>
        </AnimatePresence>
      </div>
    </Section>
  )
}
