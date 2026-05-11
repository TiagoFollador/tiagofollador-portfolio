'use client'

import { useLocale } from '@/context/LocaleContext'
import { content } from '@/data/content'
import { Section, SectionTitle } from '@/components/ui/Section'

export function ExperienceSection() {
  const { locale } = useLocale()
  const t = content[locale].experience

  return (
    <Section id="experience">
      <SectionTitle>{t.title}</SectionTitle>
      <div className="relative pl-6 border-l border-slate-700">
        <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-2 border-slate-950" />
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-100">
              {t.role}
            </h3>
            <p className="text-cyan-400 text-sm font-medium mt-0.5">{t.company}</p>
            <p className="text-slate-500 text-xs font-mono mt-0.5">{t.period}</p>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">{t.description}</p>
          <ul className="space-y-2">
            {t.contributions.map((c, i) => (
              <li key={i} className="text-sm text-slate-300 flex gap-2">
                <span className="text-cyan-500 mt-0.5 shrink-0">›</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
