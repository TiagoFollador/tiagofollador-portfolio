'use client'

import { MapPin, ArrowDown, ChevronDown } from 'lucide-react'
import { useLocale } from '@/context/LocaleContext'
import { content } from '@/data/content'
import { profile } from '@/data/profile'
import { TerminalBlock } from '@/components/ui/TerminalBlock'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/BrandIcons'

export function HeroSection() {
  const { locale } = useLocale()
  const t = content[locale].hero

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 max-w-4xl mx-auto pt-20"
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 text-sm text-slate-400 font-mono">
          <MapPin size={14} className="text-cyan-500" />
          {t.locationBadge}
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight mb-2">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 font-medium leading-snug max-w-2xl">
            {t.headline}
          </p>
        </div>

        <p className="text-slate-400 leading-relaxed max-w-2xl">
          {t.subheadline}
        </p>

        <TerminalBlock title={content[locale].experience.role} />

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium px-5 py-2.5 transition-colors"
          >
            {t.ctaProjects}
            <ArrowDown size={14} />
          </a>
          <a
            href={profile.cv}
            download="Tiago-Follador-CV.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white text-sm font-medium px-5 py-2.5 transition-colors"
          >
            {t.ctaDownloadCV}
          </a>
          <ExternalLink
            href={profile.github}
            aria-label="GitHub"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-slate-200 text-sm px-3 py-2.5 transition-colors"
          >
            <GitHubIcon size={16} />
          </ExternalLink>
          <ExternalLink
            href={profile.linkedin}
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-slate-200 text-sm px-3 py-2.5 transition-colors"
          >
            <LinkedInIcon size={16} />
          </ExternalLink>
        </div>

        <div className="flex justify-start pt-4">
          <a href="#about" aria-label="Scroll down" className="text-slate-600 hover:text-slate-400 transition-colors animate-bounce">
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
