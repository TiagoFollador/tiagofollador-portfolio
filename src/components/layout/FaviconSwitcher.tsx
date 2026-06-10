'use client'
import { useEffect } from 'react'
import { useAudience } from '@/context/AudienceContext'

// Cores espelham globals.css:
//   :root { --brand: #3b82f6 }                   → leaders / visão de negócio
//   [data-audience='devs'] { --brand: #22c55e }  → devs / visão técnica
const svgIcon = (fill: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">` +
    `<rect width="32" height="32" rx="6" fill="#0a0a0a"/>` +
    `<text x="16" y="22" text-anchor="middle" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="15" font-weight="700" fill="${fill}">TF</text>` +
    `</svg>`
  )}`

const ICON_BLUE  = svgIcon('#3b82f6')  // leaders (azul)
const ICON_GREEN = svgIcon('#22c55e')  // devs (verde)

export function FaviconSwitcher() {
  const { audience } = useAudience()

  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"][type="image/svg+xml"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      link.type = 'image/svg+xml'
      document.head.appendChild(link)
    }
    link.href = audience === 'devs' ? ICON_GREEN : ICON_BLUE
  }, [audience])

  return null
}
