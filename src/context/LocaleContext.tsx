'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Locale } from '@/data/content'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  isTransitioning: boolean
  switchLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
  isTransitioning: false,
  switchLocale: () => {},
})

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  return navigator.language.startsWith('pt') ? 'pt' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(detectLocale)
  const [isTransitioning, setIsTransitioning] = useState(false)

  function switchLocale(newLocale: Locale) {
    setIsTransitioning(true)
    setTimeout(() => {
      setLocale(newLocale)
      setIsTransitioning(false)
    }, 150)
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, isTransitioning, switchLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
