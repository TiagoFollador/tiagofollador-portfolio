'use client'

import { useState, FormEvent } from 'react'
import { Mail, MapPin, Download, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { useLocale } from '@/context/LocaleContext'
import { content } from '@/data/content'
import { profile } from '@/data/profile'
import { Section, SectionTitle } from '@/components/ui/Section'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/BrandIcons'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactSection() {
  const { locale } = useLocale()
  const t = content[locale].contact
  const hero = content[locale].hero

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [touched, setTouched] = useState({ name: false, email: false, message: false })

  const mailtoFallback = `mailto:${profile.email}?subject=${encodeURIComponent(`Contact from ${name || 'visitor'}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (!name.trim() || !email.trim() || !message.trim()) return

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
        setTouched({ name: false, email: false, message: false })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  function fieldClass(field: 'name' | 'email' | 'message', value: string) {
    const base =
      'w-full rounded-lg border bg-neutral-900/60 px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 transition-colors'
    const hasError = touched[field] && !value.trim()
    return `${base} ${hasError ? 'border-red-500 focus:border-red-400' : 'border-neutral-700 focus:border-brand'}`
  }

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
        <p className="text-sm font-mono text-brand mb-3">{t.availability}</p>
        <p className="text-lg text-neutral-300 leading-relaxed mb-8">{t.headline}</p>

        {status === 'success' ? (
          <div className="flex items-start gap-3 rounded-xl border border-brand/40 bg-brand/10 px-5 py-4 mb-10">
            <CheckCircle size={20} className="text-brand shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-neutral-100">
                {locale === 'en' ? 'Message sent!' : 'Mensagem enviada!'}
              </p>
              <p className="text-sm text-neutral-400 mt-0.5">
                {locale === 'en'
                  ? "I'll reply within 24 hours."
                  : 'Responderei em até 24 horas.'}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-10" noValidate>
            {/* Honeypot — hidden from real users, visible to bots */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              aria-hidden="true"
              className="hidden"
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  placeholder={t.form.name}
                  aria-label={t.form.name}
                  className={fieldClass('name', name)}
                />
                {touched.name && !name.trim() && (
                  <p className="text-xs text-red-400 mt-1">
                    {locale === 'en' ? 'Required' : 'Obrigatório'}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  placeholder={t.form.email}
                  aria-label={t.form.email}
                  className={fieldClass('email', email)}
                />
                {touched.email && !email.trim() && (
                  <p className="text-xs text-red-400 mt-1">
                    {locale === 'en' ? 'Required' : 'Obrigatório'}
                  </p>
                )}
              </div>
            </div>

            <div>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                placeholder={t.form.message}
                aria-label={t.form.message}
                className={`${fieldClass('message', message)} resize-none`}
              />
              {touched.message && !message.trim() && (
                <p className="text-xs text-red-400 mt-1">
                  {locale === 'en' ? 'Required' : 'Obrigatório'}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-strong hover:bg-brand disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium px-5 py-2.5 transition-colors"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {locale === 'en' ? 'Sending…' : 'Enviando…'}
                  </>
                ) : (
                  <>
                    <Mail size={16} />
                    {t.form.send}
                  </>
                )}
              </button>
              <a
                href={profile.cv}
                download="Tiago-Follador-CV.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-white text-sm font-medium px-5 py-2.5 transition-colors"
              >
                <Download size={16} />
                {t.downloadCV}
              </a>
            </div>

            {status === 'error' && (
              <div className="flex items-start gap-2 text-sm text-red-400">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>
                  {locale === 'en'
                    ? 'Something went wrong. '
                    : 'Algo deu errado. '}
                  <a href={mailtoFallback} className="underline hover:text-red-300">
                    {locale === 'en' ? 'Send directly by email.' : 'Envie diretamente por e-mail.'}
                  </a>
                </span>
              </div>
            )}

            <p className="text-xs text-neutral-500">{t.form.hint}</p>
          </form>
        )}

        <div className="flex flex-col gap-4">
          {links.map(({ href, icon, label, display }) => (
            <ExternalLink
              key={label}
              href={href}
              aria-label={label}
              className="flex items-center gap-3 text-neutral-400 hover:text-brand group"
            >
              <span className="text-neutral-500 group-hover:text-brand transition-colors">{icon}</span>
              <span className="text-sm">{display}</span>
            </ExternalLink>
          ))}
          <div className="flex items-center gap-3 text-neutral-500 text-sm">
            <MapPin size={18} />
            {hero.locationBadge}
          </div>
        </div>
      </div>
    </Section>
  )
}
