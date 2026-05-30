'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, ArrowDown, ChevronDown, ArrowRight } from 'lucide-react'
import { useLocale } from '@/context/LocaleContext'
import { useAudience } from '@/context/AudienceContext'
import { content } from '@/data/content'
import { profile } from '@/data/profile'
import { TerminalBlock } from '@/components/ui/TerminalBlock'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/BrandIcons'

export function HeroSection() {
  const { locale } = useLocale()
  const { audience } = useAudience()
  const t = content[locale].hero
  const terminalLines = audience === 'leaders' ? t.terminalLinesBusiness : t.terminalLines
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 max-w-4xl mx-auto pt-20"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-400 font-mono">
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-brand" />
            {t.locationBadge}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/20 px-3 py-1 text-xs text-brand">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            {t.availabilityBadge}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 leading-tight mb-2">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-brand font-medium leading-snug max-w-2xl">
              {t.subline}
            </p>
          </div>

          {/* Profile avatar */}
          <div className="shrink-0 order-first sm:order-last">
            {!imgError ? (
              <Image
                src={profile.photo}
                alt={profile.name}
                width={72}
                height={72}
                className="rounded-full border-2 border-brand/40 object-cover w-14 h-14 sm:w-[72px] sm:h-[72px]"
                onError={() => setImgError(true)}
                priority
              />
            ) : (
              <div className="flex items-center justify-center w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-full border-2 border-brand/40 bg-brand/15 font-mono text-sm font-bold text-brand select-none">
                TF
              </div>
            )}
          </div>
        </div>

        <p className="text-neutral-400 leading-relaxed max-w-2xl">
          {t.body}
        </p>

        <TerminalBlock lines={terminalLines} />

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-strong hover:bg-brand text-white text-sm font-medium px-5 py-2.5 transition-colors"
          >
            {t.ctaProjects}
            <ArrowDown size={14} />
          </a>
          <a
            href={profile.cv}
            download="Tiago-Follador-CV.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-white text-sm font-medium px-5 py-2.5 transition-colors"
          >
            {t.ctaDownloadCV}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-brand transition-colors"
          >
            {t.ctaSeeBuilt}
            <ArrowRight size={14} />
          </a>
          <ExternalLink
            href={profile.github}
            aria-label="GitHub"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 hover:border-neutral-500 text-neutral-400 hover:text-neutral-200 text-sm px-3 py-2.5 transition-colors"
          >
            <GitHubIcon size={16} />
          </ExternalLink>
          <ExternalLink
            href={profile.linkedin}
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 hover:border-neutral-500 text-neutral-400 hover:text-neutral-200 text-sm px-3 py-2.5 transition-colors"
          >
            <LinkedInIcon size={16} />
          </ExternalLink>
        </div>

        <div className="flex justify-start pt-4">
          <a href="#about" aria-label="Scroll down" className="text-neutral-600 hover:text-neutral-400 transition-colors animate-bounce">
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
