'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Globe } from 'lucide-react'
import { useLocale } from '@/context/LocaleContext'
import { useAudience } from '@/context/AudienceContext'
import { content } from '@/data/content'
import { profile } from '@/data/profile'

const NAV_SECTIONS = ['about', 'experience', 'projects', 'skills', 'contact'] as const

export function Header() {
  const { locale, switchLocale } = useLocale()
  const { audience, setAudience } = useAudience()
  const t = content[locale].nav
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const navLinks: [string, string, string][] = [
    ['#about', t.about, 'about'],
    ['#experience', t.experience, 'experience'],
    ['#projects', t.projects, 'projects'],
    ['#skills', t.skills, 'skills'],
    ['#contact', t.contact, 'contact'],
  ]

  // Short labels keep the segmented control inside 375px (e.g. "For Devs" → "Devs").
  const shortDevs = t.forDevs.split(' ').pop()
  const shortLeaders = t.forLeaders.split(' ').pop()

  const audienceControl = (
    <div
      role="group"
      aria-label="Choose view: technical or business"
      className="flex items-center rounded-md border border-neutral-700 p-0.5 text-xs font-medium"
    >
      <button
        onClick={() => setAudience('devs')}
        aria-pressed={audience === 'devs'}
        title={t.forDevs}
        className={`rounded px-2.5 py-1 transition-colors ${
          audience === 'devs'
            ? 'bg-brand-strong text-white'
            : 'text-neutral-400 hover:text-neutral-100'
        }`}
      >
        <span className="sm:hidden">{shortDevs}</span>
        <span className="hidden sm:inline">{t.forDevs}</span>
      </button>
      <button
        onClick={() => setAudience('leaders')}
        aria-pressed={audience === 'leaders'}
        title={t.forLeaders}
        className={`rounded px-2.5 py-1 transition-colors ${
          audience === 'leaders'
            ? 'bg-brand-strong text-white'
            : 'text-neutral-400 hover:text-neutral-100'
        }`}
      >
        <span className="sm:hidden">{shortLeaders}</span>
        <span className="hidden sm:inline">{t.forLeaders}</span>
      </button>
    </div>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-2">
        <Link href="#hero" className="font-mono text-sm text-neutral-300 hover:text-white transition-colors shrink-0">
          {profile.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
          {navLinks.map(([href, label, sectionId]) => (
            <Link
              key={href}
              href={href}
              aria-current={activeSection === sectionId ? 'location' : undefined}
              className={`hover:text-neutral-100 transition-colors ${activeSection === sectionId ? 'text-brand' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          {/* Audience toggle */}
          {audienceControl}

          {/* Language toggle */}
          <button
            onClick={() => switchLocale(locale === 'en' ? 'pt' : 'en')}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 font-mono text-xs border border-neutral-700 rounded px-2.5 py-1 text-neutral-400 hover:text-neutral-100 hover:border-neutral-500 transition-colors"
          >
            <Globe size={12} />
            <span className="hidden sm:inline">{locale === 'en' ? 'PT-BR' : 'EN'}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-1.5 text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 border-t border-neutral-800/60' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-3 bg-neutral-950/95 gap-1">
          {navLinks.map(([href, label, sectionId]) => (
            <Link
              key={href}
              href={href}
              aria-current={activeSection === sectionId ? 'location' : undefined}
              onClick={() => setMobileOpen(false)}
              className={`py-2.5 text-sm border-b border-neutral-800/40 last:border-0 transition-colors ${
                activeSection === sectionId
                  ? 'text-brand'
                  : 'text-neutral-400 hover:text-neutral-100'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
