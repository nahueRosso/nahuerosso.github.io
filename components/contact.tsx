import { Mail } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { CtaLink } from '@/components/cta-link'
import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { CONTACT_EMAIL, contact } from '@/lib/content'

export function Contact() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(contact.mailSubject)}`

  return (
    <Section id="contacto" labelledBy="contacto-titulo" tone="alt">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading
            id="contacto-titulo"
            eyebrow={contact.eyebrow}
            title={contact.title}
            lead={contact.lead}
          />
          <div className="mt-8">
            <CtaLink href={mailto} variant="outline">
              <Mail className="size-5" aria-hidden="true" />
              {contact.mailLabel}
            </CtaLink>
            <p className="mt-3 text-base text-muted-foreground">{CONTACT_EMAIL}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-background p-6 md:p-10">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
