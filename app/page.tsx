import { Audience } from '@/components/audience'
import { Comparison } from '@/components/comparison'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Identity } from '@/components/identity'
import { Navbar } from '@/components/navbar'
import { Problem } from '@/components/problem'
import { Roadmap } from '@/components/roadmap'
import { Team } from '@/components/team'
import { Turnkey } from '@/components/turnkey'

export default function Page() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-[60] rounded-full bg-primary px-5 py-3 text-base font-bold text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <Hero />
        <Problem />
        <HowItWorks />
        <Audience />
        <Turnkey />
        <Comparison />
        <Roadmap />
        <Identity />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
