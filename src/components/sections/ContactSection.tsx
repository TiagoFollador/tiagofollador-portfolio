'use client'

import { Mail, MapPin } from 'lucide-react'
import { useLocale } from '@/context/LocaleContext'
import { content } from '@/data/content'
import { profile } from '@/data/profile'
import { Section, SectionTitle } from '@/components/ui/Section'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/BrandIcons'

export function ContactSection() {
  const { locale } = useLocale()
  const t = content[locale].contact
  const hero = content[locale].hero

  const links = [
    {
      href: profile.github,
      icon: <GitHubIcon size={18} />,
      label: 'GitHub',
      display: 'github.com/TiagoFollador',
    },
    {
      href: profile.linkedin,
      icon: <LinkedInIcon size={18} />,
      label: 'LinkedIn',
      display: 'linkedin.com/in/tiago-de-brito-follador',
    },
    {
      href: `mailto:${profile.email}`,
      icon: <Mail size={18} />,
      label: 'Email',
      display: profile.email,
    },
  ]

  return (
    <Section id="contact">
      <SectionTitle>{t.title}</SectionTitle>
      <div className="max-w-2xl">
        <p className="text-lg text-slate-300 leading-relaxed mb-8">{t.headline}</p>
        <div className="flex flex-col gap-4">
          {links.map(({ href, icon, label, display }) => (
            <ExternalLink
              key={label}
              href={href}
              aria-label={label}
              className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 group"
            >
              <span className="text-slate-500 group-hover:text-cyan-500 transition-colors">{icon}</span>
              <span className="text-sm">{display}</span>
            </ExternalLink>
          ))}
          <div className="flex items-center gap-3 text-slate-500 text-sm">
            <MapPin size={18} />
            {hero.locationBadge}
          </div>
        </div>
      </div>
    </Section>
  )
}
