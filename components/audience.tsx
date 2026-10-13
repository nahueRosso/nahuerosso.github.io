import { Check } from 'lucide-react'
import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { audience } from '@/lib/content'

export function Audience() {
  const [client, user] = audience.cards
  const ClientIcon = client.icon
  const UserIcon = user.icon

  return (
    <Section id="para-quien" labelledBy="para-quien-titulo" tone="alt">
      <SectionHeading
        id="para-quien-titulo"
        eyebrow={audience.eyebrow}
        title={audience.title}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="flex flex-col rounded-3xl border border-border bg-background p-8 md:p-10">
          <CardHeader icon={<ClientIcon className="size-6" aria-hidden="true" />} tag={client.tag} />
          <h3 className="mt-6 text-2xl leading-snug font-extrabold md:text-3xl">{client.title}</h3>
          <h4 className="mt-6 text-lg font-extrabold text-brand-soft">{audience.benefitsTitle}</h4>
          <ul className="mt-4 grid gap-5">
            {audience.benefits.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-muted text-warm">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-lg leading-snug font-extrabold">{title}</p>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="flex flex-col rounded-3xl border border-border bg-background p-8 md:p-10">
          <CardHeader icon={<UserIcon className="size-6" aria-hidden="true" />} tag={user.tag} />
          <h3 className="mt-6 text-2xl leading-snug font-extrabold md:text-3xl">{user.title}</h3>
          <p className="mt-3 text-lg text-muted-foreground">{user.text}</p>
          <ul className="mt-6 grid gap-3">
            {user.points.map((point) => (
              <li key={point} className="flex gap-3 text-base leading-relaxed">
                <Check className="mt-1 size-5 shrink-0 text-warm" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}

function CardHeader({ icon, tag }: { icon: React.ReactNode; tag: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
        {icon}
      </span>
      <p className="text-sm font-bold tracking-wide text-brand-soft uppercase">{tag}</p>
    </div>
  )
}
