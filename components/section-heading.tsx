import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  id: string
  eyebrow: string
  title: string
  lead?: string
  className?: string
}

export function SectionHeading({ id, eyebrow, title, lead, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <p className="text-sm font-bold tracking-wide text-brand-soft uppercase">{eyebrow}</p>
      <h2
        id={id}
        className="mt-3 text-3xl leading-tight font-extrabold sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">{lead}</p>
      ) : null}
    </div>
  )
}
