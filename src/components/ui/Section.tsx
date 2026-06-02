'use client'

import { useRef, useEffect, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className }: SectionProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('is-visible') },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id={id}
      className={cn('py-20 px-4 md:px-8 max-w-4xl mx-auto section-animate', className)}
    >
      {children}
    </section>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-neutral-100 mb-10 flex items-center gap-3">
      <span className="text-brand font-mono text-lg select-none">{'#'}</span>
      {children}
    </h2>
  )
}
