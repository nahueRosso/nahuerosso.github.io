import type { Metadata, Viewport } from 'next'
import { Atkinson_Hyperlegible, Nunito } from 'next/font/google'
import './globals.css'

const display = Nunito({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800', '900'],
})

const body = Atkinson_Hyperlegible({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Sensonoro | Chalecos hápticos para sentir la música en vivo',
  description:
    'Alquilamos chalecos hápticos llave en mano para productoras, festivales y teatros. Personas sordas e hipoacúsicas sienten la música del show en vivo.',
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: '#0b0b10',
}

const preferencesScript = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('sensonoro-theme');var dark=t!=='light';d.classList.toggle('dark',dark);var f=localStorage.getItem('sensonoro-fs');if(f==='0'||f==='1'||f==='2'){d.setAttribute('data-fs',f);}}catch(e){}})();`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es-AR"
      data-fs="0"
      className={`dark bg-background ${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferencesScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
