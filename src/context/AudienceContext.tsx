'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Audience = 'devs' | 'leaders'

interface AudienceContextValue {
  audience: Audience
  setAudience: (audience: Audience) => void
}

const AudienceContext = createContext<AudienceContextValue>({
  audience: 'devs',
  setAudience: () => {},
})

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudience] = useState<Audience>('leaders')

  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  )
}

export function useAudience() {
  return useContext(AudienceContext)
}
