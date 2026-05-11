'use client'

import { useLocale } from '@/context/LocaleContext'
import { content } from '@/data/content'
import { Section, SectionTitle } from '@/components/ui/Section'

export function AboutSection() {
  const { locale } = useLocale()
  const t = content[locale].about

  return (
    <Section id="about">
      <SectionTitle>{t.title}</SectionTitle>
      <div className="space-y-4 max-w-2xl">
        {t.paragraphs.map((p, i) => (
          <p key={i} className="text-slate-300 leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </Section>
  )
}
