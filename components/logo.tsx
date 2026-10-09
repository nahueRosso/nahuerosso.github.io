import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('size-9 shrink-0', className)}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="32" cy="32" r="6" className="fill-foreground" />
      <path
        d="M21 22a14 14 0 0 0 0 20M43 22a14 14 0 0 1 0 20"
        fill="none"
        className="stroke-brand-soft"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M12 15a25 25 0 0 0 0 34M52 15a25 25 0 0 1 0 34"
        fill="none"
        className="stroke-primary"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Logo tipográfico placeholder: marca de ondas + "sensonoro" en minúsculas redondeadas. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark />
      <span className="font-heading text-2xl leading-none font-black tracking-tight lowercase">
        sensonoro
      </span>
    </span>
  )
}
