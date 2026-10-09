'use client'

import { useRef, useState } from 'react'
import { CircleAlert, CircleCheck, Loader2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { FORMSPREE_ID, contact } from '@/lib/content'
import { cn } from '@/lib/utils'

type FieldName =
  | 'nombre'
  | 'organizacion'
  | 'email'
  | 'tipo'
  | 'fecha'
  | 'asistentes'
  | 'mensaje'

type Errors = Partial<Record<FieldName, string>>
type Status = 'idle' | 'sending' | 'success' | 'error' | 'unconfigured'

const FIELD_LABELS: Record<FieldName, string> = {
  nombre: 'Nombre y apellido',
  organizacion: 'Organización',
  email: 'Correo electrónico',
  tipo: 'Tipo de evento',
  fecha: 'Fecha estimada',
  asistentes: 'Cantidad de asistentes',
  mensaje: 'Mensaje',
}

const fieldClass = 'h-12 px-4 text-base md:text-base'

function validate(data: FormData): Errors {
  const value = (name: FieldName) => String(data.get(name) ?? '').trim()
  const errors: Errors = {}

  if (!value('nombre')) errors.nombre = 'Escribí tu nombre y apellido.'
  if (!value('organizacion')) errors.organizacion = 'Escribí el nombre de tu organización.'

  const email = value('email')
  if (!email) {
    errors.email = 'Escribí tu correo electrónico.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Revisá el correo. Tiene que verse así: nombre@dominio.com.'
  }

  if (!value('tipo')) errors.tipo = 'Elegí un tipo de evento.'

  const date = value('fecha')
  if (date) {
    const today = new Date()
    const todayText = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
    if (date < todayText) errors.fecha = 'Elegí una fecha de hoy en adelante.'
  }

  const attendees = value('asistentes')
  if (attendees && (!/^\d+$/.test(attendees) || Number(attendees) < 1)) {
    errors.asistentes = 'Escribí un número entero mayor que 0.'
  }

  if (!value('mensaje')) errors.mensaje = 'Contanos brevemente qué necesitás.'

  return errors
}

function FieldError({ name, message }: { name: FieldName; message?: string }) {
  if (!message) return null
  return (
    <p id={`${name}-error`} className="flex items-start gap-2 text-base font-bold text-destructive">
      <CircleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  )
}

function Field({
  name,
  required,
  error,
  children,
}: {
  name: FieldName
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name} className="flex-wrap gap-x-2 gap-y-0 text-base leading-snug font-bold">
        {FIELD_LABELS[name]}
        {required ? (
          <span className="font-normal text-muted-foreground">(obligatorio)</span>
        ) : (
          <span className="font-normal text-muted-foreground">(opcional)</span>
        )}
      </Label>
      {children}
      <FieldError name={name} message={error} />
    </div>
  )
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const summaryRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const errorEntries = Object.entries(errors) as [FieldName, string][]

  function describe(name: FieldName) {
    return errors[name] ? `${name}-error` : undefined
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setStatus('idle')
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }

    if (FORMSPREE_ID === 'TU_ID_DE_FORMSPREE') {
      form.reset()
      setErrors({})
      setStatus('success')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Respuesta no válida')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-6">
      {errorEntries.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-2xl border-2 border-destructive p-5"
        >
          <p className="text-lg font-extrabold text-destructive">
            Hay {errorEntries.length === 1 ? '1 dato' : `${errorEntries.length} datos`} para revisar
          </p>
          <ul className="mt-2 grid gap-1">
            {errorEntries.map(([name, message]) => (
              <li key={name}>
                <a href={`#${name}`} className="text-base font-bold underline underline-offset-4">
                  {FIELD_LABELS[name]}: {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field name="nombre" required error={errors.nombre}>
          <Input
            id="nombre"
            name="nombre"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.nombre)}
            aria-describedby={describe('nombre')}
            className={fieldClass}
          />
        </Field>
        <Field name="organizacion" required error={errors.organizacion}>
          <Input
            id="organizacion"
            name="organizacion"
            autoComplete="organization"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.organizacion)}
            aria-describedby={describe('organizacion')}
            className={fieldClass}
          />
        </Field>
      </div>

      <Field name="email" required error={errors.email}>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-required="true"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={describe('email')}
          className={fieldClass}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field name="tipo" required error={errors.tipo}>
          <select
            id="tipo"
            name="tipo"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.tipo)}
            aria-describedby={describe('tipo')}
            defaultValue=""
            className={cn(
              'h-12 w-full rounded-lg border border-input bg-background px-3 text-base transition-colors',
              'focus-visible:border-ring aria-invalid:border-destructive aria-invalid:border-2',
            )}
          >
            <option value="" disabled>
              Elegí una opción
            </option>
            {contact.eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field name="fecha" error={errors.fecha}>
          <Input
            id="fecha"
            name="fecha"
            type="date"
            aria-invalid={Boolean(errors.fecha)}
            aria-describedby={describe('fecha')}
            className={fieldClass}
          />
        </Field>
      </div>

      <Field name="asistentes" error={errors.asistentes}>
        <Input
          id="asistentes"
          name="asistentes"
          type="number"
          inputMode="numeric"
          min={1}
          step={1}
          aria-invalid={Boolean(errors.asistentes)}
          aria-describedby={describe('asistentes')}
          className={fieldClass}
        />
      </Field>

      <Field name="mensaje" required error={errors.mensaje}>
        <Textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.mensaje)}
          aria-describedby={describe('mensaje')}
          className="min-h-32 px-4 py-3 text-base md:text-base"
        />
      </Field>

      {/* Trampa para bots: las personas no deberían verlo ni completarlo */}
      <div className="sr-only" aria-hidden="true">
        <label>
          No completar
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4">
        <Button
          type="submit"
          disabled={status === 'sending'}
          className="h-12 w-full rounded-full bg-primary px-6 text-base font-bold text-primary-foreground hover:bg-primary/90 sm:w-fit"
        >
          {status === 'sending' ? (
            <>
              <Loader2 className="size-5 animate-spin" aria-hidden="true" />
              Enviando…
            </>
          ) : (
            <>
              <Send className="size-5" aria-hidden="true" />
              Enviar consulta
            </>
          )}
        </Button>

        <div aria-live="polite" role="status">
          {status === 'success' && (
            <p className="flex items-start gap-2 text-base font-bold">
              <CircleCheck className="mt-0.5 size-5 shrink-0 text-warm" aria-hidden="true" />
              {contact.successMessage}
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-start gap-2 text-base font-bold text-destructive">
              <CircleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              {contact.errorMessage}
            </p>
          )}
          {status === 'unconfigured' && (
            <p className="flex items-start gap-2 text-base font-bold text-warm">
              <CircleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              {contact.placeholderIdMessage}
            </p>
          )}
        </div>
      </div>
    </form>
  )
}
