import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  labelledBy: string
  tone?: 'base' | 'alt'
  children: ReactNode
}

export function Section({ id, labelledBy, tone = 'base', children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(tone === 'alt' && 'border-y border-border bg-card')}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">{children}</div>
    </section>
  )
}
