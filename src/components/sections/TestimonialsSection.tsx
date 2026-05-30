'use client'

import { Quote } from 'lucide-react'
import { useLocale } from '@/context/LocaleContext'
import { content } from '@/data/content'
import { Section, SectionTitle } from '@/components/ui/Section'

export function TestimonialsSection() {
  const { locale } = useLocale()
  const t = content[locale].testimonials

  // Nothing to show until at least one testimonial is added.
  if (t.items.length === 0) return null

  return (
    <Section id="testimonials">
      <SectionTitle>{t.title}</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.items.map((item) => (
          <figure
            key={item.author}
            className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 flex flex-col gap-4 transition-colors hover:border-brand/60"
          >
            <Quote size={20} className="text-brand" />
            <blockquote className="text-sm text-neutral-300 leading-relaxed italic">
              “{item.quote}”
            </blockquote>
            <figcaption className="text-sm text-neutral-400">
              <span className="font-medium text-neutral-200">{item.author}</span>
              <span className="text-neutral-500"> · {item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
