import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  className?: string
  'aria-label'?: string
}

export function ExternalLink({ href, children, className, 'aria-label': ariaLabel }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn('transition-colors', className)}
    >
      {children}
    </a>
  )
}
