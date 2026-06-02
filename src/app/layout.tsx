import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { LocaleProvider } from '@/context/LocaleContext'
import { AudienceProvider } from '@/context/AudienceContext'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MainWrapper } from '@/components/layout/MainWrapper'
import { AudienceTheme } from '@/components/layout/AudienceTheme'
import { profile } from '@/data/profile'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.fullName,
  alternateName: profile.name,
  jobTitle: 'Full Stack Engineer',
  url: profile.domain,
  email: `mailto:${profile.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    addressCountry: 'BR',
  },
  knowsAbout: ['TypeScript', 'NestJS', 'React', 'Next.js', 'GraphQL', 'PostgreSQL', 'APIs', 'System integrations'],
  sameAs: [profile.github, profile.linkedin],
}

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://tiagofollador.com'),
  title: 'Tiago Follador — Full Stack Engineer',
  description:
    'Full Stack Engineer building production APIs, integrations, and web systems. TypeScript, NestJS, React, GraphQL.',
  keywords: ['Tiago Follador', 'Full Stack Engineer', 'TypeScript', 'NestJS', 'React', 'Next.js', 'APIs', 'GraphQL', 'PostgreSQL', 'Curitiba'],
  authors: [{ name: 'Tiago Follador' }],
  openGraph: {
    title: 'Tiago Follador — Full Stack Engineer',
    description: 'Building production-grade APIs, integrations, and web systems.',
    url: 'https://tiagofollador.com',
    siteName: 'Tiago Follador',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiago Follador — Full Stack Engineer',
    description: 'Building production-grade APIs, integrations, and web systems.',
  },
  robots: { index: true, follow: true },
  alternates: {
    languages: {
      'en': 'https://tiagofollador.com',
      'pt-BR': 'https://tiagofollador.com',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-neutral-950 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LocaleProvider>
          <AudienceProvider>
            <AudienceTheme />
            <Header />
            <MainWrapper>{children}</MainWrapper>
            <Footer />
          </AudienceProvider>
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  )
}
