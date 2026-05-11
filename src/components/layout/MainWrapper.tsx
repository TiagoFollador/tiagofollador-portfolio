'use client'

import { ReactNode } from 'react'
import { useLocale } from '@/context/LocaleContext'

export function MainWrapper({ children }: { children: ReactNode }) {
  const { isTransitioning } = useLocale()
  return (
    <main className={`transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      {children}
    </main>
  )
}
