import type { CSSProperties } from 'react'

/** Silueta del chaleco dentro de un viewBox de 200 x 260. */
export function VestBody({ view }: { view: 'front' | 'back' }) {
  const neckline = view === 'front' ? 'Q100 48 78 14 Z' : 'Q100 28 78 14 Z'

  const outline = `M78 14 C64 18 48 24 36 34 C28 48 29 70 34 96 C38 120 36 170 34 236 Q34 250 48 250 L152 250 Q166 250 166 236 C164 170 162 120 166 96 C171 70 172 48 164 34 C152 24 136 18 122 14 ${neckline}`

  return (
    <g>
      <path
        d={outline}
        className="fill-muted stroke-brand-soft"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      {view === 'front' ? (
        <path
          d="M100 44 V250"
          className="stroke-brand-soft/50"
          strokeWidth={1.5}
          strokeDasharray="3 6"
          strokeLinecap="round"
          fill="none"
        />
      ) : (
        <path
          d="M100 26 V250"
          className="stroke-brand-soft/50"
          strokeWidth={1.5}
          strokeDasharray="3 6"
          strokeLinecap="round"
          fill="none"
        />
      )}
      <path
        d="M78 14 L64 46 M122 14 L136 46"
        className="stroke-brand-soft/40"
        strokeWidth={1.5}
        strokeLinecap="round"
        fill="none"
      />
    </g>
  )
}

interface MotorDotProps {
  x: number
  y: number
  active?: boolean
  delay?: number
  /** Radio base de los anillos de pulso */
  ringRadius?: number
}

/** Motor háptico: núcleo cálido con anillos que se expanden. */
export function MotorDot({ x, y, active = false, delay = 0, ringRadius = 22 }: MotorDotProps) {
  const ringStyle = (extra: number): CSSProperties =>
    ({ '--pulse-delay': `${delay + extra}s` }) as CSSProperties

  return (
    <g>
      <circle
        className="pulse-ring"
        cx={x}
        cy={y}
        r={ringRadius}
        fill="none"
        stroke="var(--brand-soft)"
        strokeWidth={2}
        style={ringStyle(0)}
      />
      <circle
        className="pulse-ring"
        cx={x}
        cy={y}
        r={ringRadius}
        fill="none"
        stroke="var(--brand-soft)"
        strokeWidth={2}
        style={ringStyle(1.2)}
      />
      {active && (
        <circle
          cx={x}
          cy={y}
          r={ringRadius * 0.62}
          fill="none"
          stroke="var(--foreground)"
          strokeWidth={2.5}
        />
      )}
      <circle cx={x} cy={y} r={9} fill="var(--warm)" />
      <circle cx={x} cy={y} r={9} fill="none" stroke="var(--background)" strokeWidth={2} />
    </g>
  )
}
