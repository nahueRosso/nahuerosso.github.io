import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { problem } from '@/lib/content'

export function Problem() {
  return (
    <Section id="problema" labelledBy="problema-titulo" tone="alt">
      <SectionHeading
        id="problema-titulo"
        eyebrow={problem.eyebrow}
        title={problem.title}
        lead={problem.lead}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <figure className="flex flex-col justify-between rounded-3xl bg-primary p-8 text-primary-foreground md:p-10">
          <p className="font-heading text-7xl leading-none font-black md:text-8xl">
            {problem.stat.value}
          </p>
          <figcaption className="mt-8">
            <p className="text-xl leading-snug font-bold md:text-2xl">{problem.stat.text}</p>
            <p className="mt-2 text-base">{problem.stat.source}</p>
          </figcaption>
        </figure>

        <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
          <h3 className="text-2xl font-extrabold">{problem.itemsTitle}</h3>
          <ul className="mt-6 grid gap-6">
            {problem.items.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-muted text-warm">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="text-lg font-extrabold">{title}</h4>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
