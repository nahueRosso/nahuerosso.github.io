import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { VestDiagram } from '@/components/vest-diagram'
import { howItWorks } from '@/lib/content'

export function HowItWorks() {
  return (
    <Section id="como-funciona" labelledBy="como-funciona-titulo">
      <SectionHeading
        id="como-funciona-titulo"
        eyebrow={howItWorks.eyebrow}
        title={howItWorks.title}
        lead={howItWorks.lead}
      />

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {howItWorks.steps.map(({ icon: Icon, title, text }, index) => (
          <li
            key={title}
            className="relative rounded-3xl border border-border bg-card p-6"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-extrabold text-muted-foreground">
                <span className="sr-only">Paso </span>
                {index + 1}
              </span>
            </div>
            <h3 className="mt-5 text-xl leading-snug font-extrabold">{title}</h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <VestDiagram />
      </div>
    </Section>
  )
}
