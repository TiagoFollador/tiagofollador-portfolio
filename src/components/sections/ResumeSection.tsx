'use client'

import { Download } from 'lucide-react'
import { useLocale } from '@/context/LocaleContext'
import { content } from '@/data/content'
import { profile } from '@/data/profile'
import { Section, SectionTitle } from '@/components/ui/Section'

export function ResumeSection() {
  const { locale } = useLocale()
  const t = content[locale].resume

  return (
    <Section id="resume">
      <SectionTitle>{t.title}</SectionTitle>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-lg">
          <p className="text-slate-300 leading-relaxed">{t.description}</p>
          {t.note && <p className="text-slate-500 text-sm mt-2">{t.note}</p>}
        </div>
        <a
          href={profile.cv}
          download="Tiago-Follador-CV.pdf"
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium px-6 py-3 transition-colors shrink-0"
        >
          <Download size={16} />
          {t.button}
        </a>
      </div>
    </Section>
  )
}
