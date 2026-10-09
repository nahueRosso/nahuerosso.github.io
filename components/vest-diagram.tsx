'use client'

import { useState } from 'react'
import { MotorDot, VestBody } from '@/components/vest-graphic'
import { vestDiagram, type MotorId } from '@/lib/content'
import { cn } from '@/lib/utils'

const { motors } = vestDiagram

function VestView({
  view,
  label,
  activeId,
  onSelect,
}: {
  view: 'front' | 'back'
  label: string
  activeId: MotorId | null
  onSelect: (id: MotorId | null) => void
}) {
  const viewMotors = motors.filter((motor) => motor.view === view)

  return (
    <figure className="flex-1">
      <svg viewBox="0 0 200 260" className="mx-auto h-auto w-full max-w-60" aria-hidden="true">
        <VestBody view={view} />
        {viewMotors.map((motor, index) => (
          <g
            key={motor.id}
            className="cursor-pointer"
            onMouseEnter={() => onSelect(motor.id)}
            onMouseLeave={() => onSelect(null)}
            onClick={() => onSelect(motor.id)}
          >
            <circle cx={motor.x} cy={motor.y} r={26} fill="transparent" />
            <MotorDot
              x={motor.x}
              y={motor.y}
              active={activeId === motor.id}
              delay={index * 0.4}
              ringRadius={20}
            />
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 text-center text-base font-bold">{label}</figcaption>
    </figure>
  )
}

export function VestDiagram() {
  const [activeId, setActiveId] = useState<MotorId | null>(null)
  const active = motors.find((motor) => motor.id === activeId)

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
      <div className="max-w-2xl">
        <h3 className="text-2xl font-extrabold md:text-3xl">{vestDiagram.title}</h3>
        <p className="mt-2 text-lg text-muted-foreground">{vestDiagram.lead}</p>
      </div>

      <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex gap-4 sm:gap-8" onMouseLeave={() => setActiveId(null)}>
          <VestView
            view="front"
            label={vestDiagram.frontLabel}
            activeId={activeId}
            onSelect={setActiveId}
          />
          <VestView
            view="back"
            label={vestDiagram.backLabel}
            activeId={activeId}
            onSelect={setActiveId}
          />
        </div>

        <div>
          <h4 className="text-lg font-extrabold">{vestDiagram.listLabel}</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {motors.map((motor) => (
              <li key={motor.id}>
                <button
                  type="button"
                  aria-pressed={activeId === motor.id}
                  onMouseEnter={() => setActiveId(motor.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(motor.id)}
                  onBlur={() => setActiveId(null)}
                  onClick={() => setActiveId(motor.id)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-base font-bold transition-colors',
                    activeId === motor.id
                      ? 'border-brand-soft bg-muted'
                      : 'border-border hover:bg-muted',
                  )}
                >
                  <span
                    className="size-3 shrink-0 rounded-full bg-warm"
                    aria-hidden="true"
                  />
                  <span>
                    {motor.label}
                    <span className="sr-only">{`, ${motor.view === 'front' ? 'vista frontal' : 'vista trasera'}`}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div
            aria-live="polite"
            className="mt-4 min-h-32 rounded-2xl bg-muted p-5"
          >
            <p className="text-lg font-extrabold">{active ? active.zone : vestDiagram.idleTitle}</p>
            <p className="mt-1 text-base leading-relaxed text-muted-foreground">
              {active ? active.description : vestDiagram.idleText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
