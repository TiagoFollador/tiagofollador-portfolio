'use client'

import { useEffect } from 'react'
import { useAudience } from '@/context/AudienceContext'

/**
 * Reflects the current audience as a `data-audience` attribute on <html> so the
 * brand accent (green for the technical view, blue for business) can switch via CSS.
 * Renders nothing.
 */
export function AudienceTheme() {
  const { audience } = useAudience()

  useEffect(() => {
    document.documentElement.dataset.audience = audience
  }, [audience])

  return null
}
