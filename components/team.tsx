import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { team } from '@/lib/content'

export function Team() {
  return (
    <Section id="equipo" labelledBy="equipo-titulo">
      <SectionHeading
        id="equipo-titulo"
        eyebrow={team.eyebrow}
        title={team.title}
        lead={team.lead}
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {team.members.map((member, index) => (
          <li
            key={member.name}
            className={
              index < 3
                ? 'lg:col-span-2'
                : 'lg:col-span-3'
            }
          >
            <article className="flex h-full items-center gap-5 rounded-3xl border border-border bg-card p-6">
              <span
                aria-hidden="true"
                className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-xl font-black text-primary-foreground"
              >
                {member.initials}
              </span>
              <div>
                <h3 className="text-xl font-extrabold">{member.name}</h3>
                <p className="mt-0.5 text-base font-bold text-brand-soft">{member.role}</p>
                <p className="text-base text-muted-foreground">{member.area}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}
