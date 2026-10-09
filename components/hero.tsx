import type { CSSProperties } from 'react'
import { CtaLink } from '@/components/cta-link'
import { HeroIllustration } from '@/components/hero-illustration'
import { hero } from '@/lib/content'

const delay = (seconds: number) => ({ '--rise-delay': `${seconds}s` }) as CSSProperties

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-32 pb-20 md:px-6 md:pt-40 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-28"
    >
      <div>
        <p className="rise text-sm font-bold tracking-wide text-brand-soft uppercase" style={delay(0)}>
          {hero.eyebrow}
        </p>
        <h1
          id="hero-titulo"
          className="rise mt-4 text-5xl leading-[1.05] font-black sm:text-6xl xl:text-7xl"
          style={delay(0.08)}
        >
          {hero.titleLine1}
          <span className="block text-brand-soft">{hero.titleLine2}</span>
        </h1>
        <p
          className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          style={delay(0.16)}
        >
          {hero.subtitle}
        </p>
        <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={delay(0.24)}>
          <CtaLink href="#contacto">{hero.primaryCta}</CtaLink>
          <CtaLink href="#como-funciona" variant="outline">
            {hero.secondaryCta}
          </CtaLink>
        </div>
        <ul className="rise mt-10 flex flex-wrap gap-x-6 gap-y-3" style={delay(0.32)}>
          {hero.highlights.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2 text-base font-bold">
              <Icon className="size-5 text-warm" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className="rise mx-auto w-full max-w-xl lg:max-w-none" style={delay(0.2)}>
        <HeroIllustration />
      </div>
    </section>
  )
}
