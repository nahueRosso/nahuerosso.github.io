import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { turnkey } from '@/lib/content'

export function Turnkey() {
  const LocalIcon = turnkey.local.icon

  return (
    <Section id="servicio" labelledBy="servicio-titulo">
      <SectionHeading
        id="servicio-titulo"
        eyebrow={turnkey.eyebrow}
        title={turnkey.title}
        lead={turnkey.lead}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <ul className="grid gap-4 sm:grid-cols-2">
          {turnkey.services.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-3xl border border-border bg-card p-6">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-muted text-warm">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col justify-between rounded-3xl bg-primary p-8 text-primary-foreground md:p-10">
          <LocalIcon className="size-10" aria-hidden="true" />
          <div className="mt-10">
            <h3 className="text-2xl leading-snug font-extrabold md:text-3xl">
              {turnkey.local.title}
            </h3>
            <p className="mt-3 text-lg leading-relaxed">{turnkey.local.text}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
