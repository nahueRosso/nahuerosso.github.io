import { cn } from '@/lib/utils'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** Chaleco de Sensonoro: contorno en modo claro, relleno en modo oscuro. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex h-11 shrink-0', className)} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${basePath}/logo-light.png`} alt="" className="h-full w-auto dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${basePath}/logo-dark.png`} alt="" className="hidden h-full w-auto dark:block" />
    </span>
  )
}

/** Logo: chaleco + "sensonoro" en minúsculas redondeadas. */
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
