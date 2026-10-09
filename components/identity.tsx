import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { identity } from '@/lib/content'

export function Identity() {
  return (
    <Section id="nosotros" labelledBy="nosotros-titulo" tone="alt">
      <SectionHeading id="nosotros-titulo" eyebrow={identity.eyebrow} title={identity.title} />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {[identity.mission, identity.vision].map((block) => (
          <article
            key={block.title}
            className="rounded-3xl border border-border bg-background p-8"
          >
            <h3 className="font-heading text-2xl font-black text-brand-soft">{block.title}</h3>
            <p className="mt-4 text-lg leading-relaxed">{block.text}</p>
          </article>
        ))}

        <article className="rounded-3xl border border-border bg-background p-8">
          <h3 className="font-heading text-2xl font-black text-brand-soft">
            {identity.values.title}
          </h3>
          <ul className="mt-4 grid gap-3">
            {identity.values.items.map((value) => (
              <li key={value} className="flex items-center gap-3 text-lg font-bold">
                <span className="size-2.5 shrink-0 rounded-full bg-warm" aria-hidden="true" />
                {value}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}
