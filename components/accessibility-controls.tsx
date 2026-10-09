'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

const THEME_KEY = 'sensonoro-theme'
const FONT_KEY = 'sensonoro-fs'
const MAX_LEVEL = 2
const LEVEL_NAMES = ['normal', 'grande', 'muy grande'] as const

export function AccessibilityControls() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [level, setLevel] = useState(0)

  useEffect(() => {
    const root = document.documentElement
    setTheme(root.classList.contains('dark') ? 'dark' : 'light')
    setLevel(Number(root.dataset.fs ?? 0))
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    setTheme(next)
    try {
      localStorage.setItem(THEME_KEY, next)
    } catch {}
  }

  function changeLevel(delta: number) {
    const next = Math.min(MAX_LEVEL, Math.max(0, level + delta))
    document.documentElement.dataset.fs = String(next)
    setLevel(next)
    try {
      localStorage.setItem(FONT_KEY, String(next))
    } catch {}
  }

  const buttonClass = 'size-10 rounded-full'

  return (
    <div role="group" aria-label="Opciones de accesibilidad" className="flex items-center gap-1.5">
      <Button
        variant="outline"
        className={buttonClass}
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      >
        {theme === 'dark' ? <Sun className="size-5" aria-hidden="true" /> : <Moon className="size-5" aria-hidden="true" />}
      </Button>
      <Button
        variant="outline"
        className={buttonClass}
        onClick={() => changeLevel(-1)}
        disabled={level === 0}
        aria-label="Achicar el tamaño del texto"
      >
        <span aria-hidden="true" className="font-heading text-sm font-extrabold">
          A-
        </span>
      </Button>
      <Button
        variant="outline"
        className={buttonClass}
        onClick={() => changeLevel(1)}
        disabled={level === MAX_LEVEL}
        aria-label="Agrandar el tamaño del texto"
      >
        <span aria-hidden="true" className="font-heading text-lg font-extrabold">
          A+
        </span>
      </Button>
      <span role="status" className="sr-only">
        Tamaño del texto: {LEVEL_NAMES[level]}
      </span>
    </div>
  )
}
