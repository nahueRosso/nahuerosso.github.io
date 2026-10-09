import { Logo } from '@/components/logo'
import { SITE_YEAR, footer, navLinks } from '@/lib/content'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <a href="#inicio" aria-label="Sensonoro, volver al inicio" className="inline-block rounded-lg">
            <Logo />
          </a>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            {footer.tagline}
          </p>
          <p className="mt-2 max-w-md text-base leading-relaxed text-muted-foreground">
            {footer.university}
          </p>
        </div>

        <nav aria-label="Secciones del sitio">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="inline-block py-2 text-base font-bold hover:text-brand-soft"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" className="inline-block py-2 text-base font-bold hover:text-brand-soft">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-muted-foreground md:px-6">
          © {SITE_YEAR} Sensonoro. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
