'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLocale } from '@/context/LocaleContext'
import { content } from '@/data/content'
import { profile } from '@/data/profile'

const NAV_SECTIONS = ['about', 'experience', 'projects', 'skills', 'resume', 'contact'] as const

export function Header() {
  const { locale, switchLocale } = useLocale()
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
    ['#resume', t.resume, 'resume'],
    ['#contact', t.contact, 'contact'],
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        <a href="#hero" className="font-mono text-sm text-slate-300 hover:text-white transition-colors">
          {profile.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          {navLinks.map(([href, label, sectionId]) => (
            <a
              key={href}
              href={href}
              className={`hover:text-slate-100 transition-colors ${activeSection === sectionId ? 'text-cyan-400' : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={() => switchLocale(locale === 'en' ? 'pt' : 'en')}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 font-mono text-xs border border-slate-700 rounded px-2.5 py-1 text-slate-400 hover:text-slate-100 hover:border-slate-500 transition-colors"
          >
            <Globe size={12} />
            {locale === 'en' ? 'PT-BR' : 'EN'}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-1.5 text-slate-400 hover:text-slate-100 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 border-t border-slate-800/60' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-3 bg-slate-950/95 gap-1">
          {navLinks.map(([href, label, sectionId]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`py-2.5 text-sm border-b border-slate-800/40 last:border-0 transition-colors ${
                activeSection === sectionId
                  ? 'text-cyan-400'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
