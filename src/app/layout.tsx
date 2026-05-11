import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { LocaleProvider } from '@/context/LocaleContext'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Tiago Follador | Full Stack Software Engineer',
  description:
    'Full Stack Software Engineer focused on TypeScript, APIs, integrations, performance, and scalable web systems.',
  keywords: ['Tiago Follador', 'Full Stack Software Engineer', 'TypeScript', 'NestJS', 'React', 'Next.js', 'APIs', 'GraphQL', 'PostgreSQL', 'Curitiba'],
  authors: [{ name: 'Tiago Follador' }],
  openGraph: {
    title: 'Tiago Follador | Full Stack Software Engineer',
    description: 'Full Stack Software Engineer focused on TypeScript, APIs, integrations, and scalable web systems.',
    url: 'https://tiagofollador.com',
    siteName: 'Tiago Follador',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiago Follador | Full Stack Software Engineer',
    description: 'Full Stack Software Engineer focused on TypeScript, APIs, integrations, and scalable web systems.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-slate-950 antialiased">
        <LocaleProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  )
}
