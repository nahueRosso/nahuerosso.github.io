import type { ComponentProps } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CtaLinkProps extends ComponentProps<'a'> {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost'
  compact?: boolean
}

/** Enlace con estilo de botón (los anclas internos no necesitan JS). */
export function CtaLink({
  variant = 'default',
  compact = false,
  className,
  children,
  ...props
}: CtaLinkProps) {
  return (
    <a
      className={cn(
        buttonVariants({ variant, size: 'lg' }),
        'rounded-full font-bold [a]:hover:bg-primary/90',
        compact ? 'h-10 px-4 text-sm' : 'h-12 px-6 text-base',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
