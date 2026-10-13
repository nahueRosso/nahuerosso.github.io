import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { roadmap } from '@/lib/content'

export function Roadmap() {
  return (
    <Section id="hoja-de-ruta" labelledBy="hoja-de-ruta-titulo">
      <SectionHeading
        id="hoja-de-ruta-titulo"
        eyebrow={roadmap.eyebrow}
        title={roadmap.title}
        lead={roadmap.lead}
      />

      <ol className="relative mt-12 ml-3 grid gap-10 border-l-2 border-border md:ml-4">
        {roadmap.milestones.map((milestone) => (
          <li key={milestone.term} className="relative pl-8 md:pl-12">
            <span
              className="absolute top-1.5 -left-2.25 size-4 rounded-full border-4 border-background bg-warm ring-2 ring-warm"
              aria-hidden="true"
            />
            <div className="grid gap-1 md:grid-cols-[10rem_1fr] md:gap-8">
              <p className="font-heading text-2xl font-black text-brand-soft md:text-3xl">
                {milestone.date}
                <span className="block text-sm font-bold tracking-wide uppercase">
                  {milestone.term}
                </span>
              </p>
              <div className="max-w-3xl">
                <h3 className="text-xl font-extrabold md:text-2xl">{milestone.title}</h3>
                {milestone.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === 0
                        ? 'mt-2 text-lg leading-relaxed'
                        : 'mt-3 text-base leading-relaxed text-muted-foreground md:text-lg'
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
