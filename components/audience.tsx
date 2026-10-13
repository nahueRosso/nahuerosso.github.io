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
        {audience.cards.map((card) => {
          const { icon: Icon, tag, title, paragraphs } = card
          return (
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
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              {'points' in card ? (
                <ul className="mt-6 grid gap-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-3 text-base leading-relaxed">
                      <Check className="mt-1 size-5 shrink-0 text-warm" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          )
        })}
      </div>

      <h3 className="mt-16 text-2xl font-extrabold md:text-3xl">{audience.benefitsTitle}</h3>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audience.benefits.map(({ icon: Icon, title, text }) => (
          <li key={title} className="rounded-3xl border border-border bg-background p-6">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-muted text-warm">
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <h4 className="mt-4 text-lg leading-snug font-extrabold">{title}</h4>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
