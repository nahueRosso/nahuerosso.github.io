import { Check } from 'lucide-react'
import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { audience } from '@/lib/content'

export function Audience() {
  return (
    <Section id="para-quien" labelledBy="para-quien-titulo" tone="alt">
      <SectionHeading
        id="para-quien-titulo"
        eyebrow={audience.eyebrow}
        title={audience.title}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {audience.cards.map(({ icon: Icon, tag, title, text, points }) => (
          <article
            key={tag}
            className="flex flex-col rounded-3xl border border-border bg-background p-8 md:p-10"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <p className="text-sm font-bold tracking-wide text-brand-soft uppercase">{tag}</p>
            </div>
            <h3 className="mt-6 text-2xl leading-snug font-extrabold md:text-3xl">{title}</h3>
            <p className="mt-3 text-lg text-muted-foreground">{text}</p>
            <ul className="mt-6 grid gap-3">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-base leading-relaxed">
                  <Check className="mt-1 size-5 shrink-0 text-warm" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
