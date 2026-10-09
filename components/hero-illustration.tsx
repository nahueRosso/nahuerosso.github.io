import type { CSSProperties } from 'react'
import { MotorDot, VestBody } from '@/components/vest-graphic'

const WAVE_START = 12
const WAVE_END = 300

/** Onda senoidal que pierde amplitud al acercarse al chaleco. */
function wavePath(centerY: number, amplitude: number, frequency: number, phase: number) {
  const points: string[] = []
  for (let x = WAVE_START; x <= WAVE_END; x += 4) {
    const progress = (x - WAVE_START) / (WAVE_END - WAVE_START)
    const envelope = 1 - progress * 0.8
    const y = centerY + amplitude * envelope * Math.sin(x * frequency + phase)
    points.push(`${x === WAVE_START ? 'M' : 'L'}${x} ${y.toFixed(1)}`)
  }
  return points.join(' ')
}

const waves = [
  { y: 96, amplitude: 22, frequency: 0.06, phase: 0.4, delay: 0 },
  { y: 150, amplitude: 34, frequency: 0.045, phase: 1.6, delay: -0.8 },
  { y: 204, amplitude: 26, frequency: 0.075, phase: 2.8, delay: -1.6 },
  { y: 258, amplitude: 18, frequency: 0.055, phase: 0.9, delay: -2.4 },
]

export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 420"
      role="img"
      aria-label="Ilustración: ondas de sonido llegan a un chaleco y se convierten en pulsos de vibración sobre el pecho y el abdomen."
      className="h-auto w-full"
    >
      <defs>
        <linearGradient
          id="wave-fade"
          gradientUnits="userSpaceOnUse"
          x1={WAVE_START}
          y1="0"
          x2={WAVE_END}
          y2="0"
        >
          <stop offset="0" stopColor="var(--brand-soft)" stopOpacity="0" />
          <stop offset="0.3" stopColor="var(--brand-soft)" stopOpacity="1" />
          <stop offset="0.85" stopColor="var(--brand-soft)" stopOpacity="0.8" />
          <stop offset="1" stopColor="var(--brand-soft)" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {waves.map((wave) => (
        <path
          key={wave.y}
          d={wavePath(wave.y, wave.amplitude, wave.frequency, wave.phase)}
          className="wave-line"
          fill="none"
          stroke="url(#wave-fade)"
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ '--wave-delay': `${wave.delay}s` } as CSSProperties}
        />
      ))}

      <g transform="translate(250 14) scale(1.5)">
        <VestBody view="front" />
        <MotorDot x={66} y={88} delay={0} ringRadius={26} />
        <MotorDot x={134} y={88} delay={0.4} ringRadius={26} />
        <MotorDot x={100} y={178} delay={0.8} ringRadius={26} />
      </g>
    </svg>
  )
}
