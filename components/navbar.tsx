'use client'

import { useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AccessibilityControls } from '@/components/accessibility-controls'
import { CtaLink } from '@/components/cta-link'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ctaLabel, navLinks } from '@/lib/content'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape' && open) {
      setOpen(false)
      toggleRef.current?.focus()
    }
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur"
      onKeyDown={handleKeyDown}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 md:px-6">
        <a href="#inicio" aria-label="Sensonoro, ir al inicio" className="rounded-lg">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-5 xl:fs0:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-md py-2 text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <AccessibilityControls />
          <CtaLink href="#contacto" compact className="hidden md:inline-flex">
            {ctaLabel}
          </CtaLink>
          <Button
            ref={toggleRef}
            variant="outline"
            className="size-10 rounded-full xl:fs0:hidden"
            aria-expanded={open}
            aria-controls="menu-principal"
            aria-label={open ? 'Cerrar el menú' : 'Abrir el menú'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </Button>
        </div>
      </div>

      <nav
        id="menu-principal"
        aria-label="Menú de secciones"
        hidden={!open}
        className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border bg-background xl:fs0:hidden"
      >
        <ul className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:grid-cols-2 md:px-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-lg font-bold hover:bg-muted"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 sm:col-span-2">
            <CtaLink href="#contacto" onClick={() => setOpen(false)} className="w-full">
              {ctaLabel}
            </CtaLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
