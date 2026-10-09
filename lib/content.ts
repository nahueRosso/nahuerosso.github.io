import {
  AudioLines,
  Building2,
  Ear,
  Factory,
  Headset,
  HeartHandshake,
  Mic,
  Radio,
  SlidersHorizontal,
  SprayCan,
  UserCheck,
  Vibrate,
  Wifi,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

/* ---------- Configuración editable ---------- */

/** Reemplazá por el ID de tu formulario en https://formspree.io (ej: "xyzabcde"). */
export const FORMSPREE_ID = 'TU_ID_DE_FORMSPREE'
/** Casilla que recibe los mensajes cuando se usa el botón de correo. */
export const CONTACT_EMAIL = 'hola@sensonoro.com.ar'
export const SITE_YEAR = 2026

/* ---------- Navegación ---------- */

export const navLinks = [
  { id: 'problema', label: 'Problema' },
  { id: 'como-funciona', label: 'Cómo funciona' },
  { id: 'para-quien', label: 'Para quién' },
  { id: 'servicio', label: 'Servicio' },
  { id: 'comparativa', label: 'Comparativa' },
  { id: 'hoja-de-ruta', label: 'Hoja de ruta' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'equipo', label: 'Equipo' },
] as const

export const ctaLabel = 'Contratar para mi evento'

/* ---------- Hero ---------- */

export const hero = {
  eyebrow: 'Chalecos hápticos para espectáculos en vivo',
  titleLine1: 'Sentí la música.',
  titleLine2: 'Todo el público, en vivo.',
  subtitle:
    'Nuestros chalecos hápticos traducen el sonido del show en vibraciones sobre el cuerpo. Así, las personas sordas e hipoacúsicas también viven el recital.',
  primaryCta: ctaLabel,
  secondaryCta: 'Mirá cómo funciona',
  highlights: [
    { icon: Vibrate, text: '6 zonas de vibración' },
    { icon: AudioLines, text: 'Latencia objetivo ≤ 15 ms' },
    { icon: Factory, text: 'Hecho en Argentina' },
  ],
} as const

/* ---------- Problemática ---------- */

export const problem = {
  eyebrow: 'La problemática',
  title: 'Los recitales dejan afuera a muchas personas',
  lead: 'Las personas sordas e hipoacúsicas quedan excluidas de los espectáculos de música en vivo.',
  stat: {
    value: '20,8%',
    text: 'de las discapacidades en Argentina son auditivas.',
    source: 'Fuente: INDEC, 2018',
  },
  itemsTitle: 'Las soluciones de hoy no alcanzan',
  items: [
    {
      icon: Ear,
      title: 'Aro magnético',
      text: 'Solo sirve a quien usa audífonos o implantes. Quien no los usa queda afuera.',
    },
    {
      icon: HeartHandshake,
      title: 'Intérpretes de lengua de señas',
      text: 'Son un apoyo valioso, pero no transmiten la experiencia musical.',
    },
  ],
} as const

/* ---------- Cómo funciona ---------- */

export const howItWorks = {
  eyebrow: 'Cómo funciona',
  title: 'Del escenario al cuerpo, en tiempo real',
  lead: 'Cuatro pasos. Una latencia objetivo de 15 milisegundos o menos.',
  steps: [
    {
      icon: Radio,
      title: 'Capturamos la mezcla del show',
      text: 'Tomamos el audio en tiempo real por red de audio digital (Dante/MADI).',
    },
    {
      icon: SlidersHorizontal,
      title: 'Separamos el sonido en 3 bandas',
      text: 'Un DSP propio divide la señal en 3 bandas de frecuencia.',
    },
    {
      icon: Wifi,
      title: 'Enviamos las órdenes a cada chaleco',
      text: 'Un ESP32 manda las órdenes de vibración por Wi-Fi o BLE.',
    },
    {
      icon: Vibrate,
      title: 'El cuerpo siente la música',
      text: '6 motores hápticos (ERM y LRA) vibran sobre el torso. Latencia objetivo ≤ 15 ms.',
    },
  ],
} as const

export type MotorId =
  | 'pecho-izq'
  | 'pecho-der'
  | 'abdomen'
  | 'espalda-izq'
  | 'espalda-der'
  | 'lumbar'

export interface Motor {
  id: MotorId
  view: 'front' | 'back'
  label: string
  zone: string
  description: string
  /** Posición dentro del viewBox 200 x 260 de cada vista */
  x: number
  y: number
}

export const vestDiagram = {
  title: 'Explorá el chaleco',
  lead: 'Pasá el mouse, tocá o enfocá con el teclado cada zona para ver qué parte del cuerpo vibra.',
  frontLabel: 'Vista frontal',
  backLabel: 'Vista trasera',
  listLabel: 'Zonas de vibración',
  idleTitle: 'Elegí una zona',
  idleText: 'Cada chaleco tiene 6 motores hápticos: 2 pectorales, 2 dorsales, 1 lumbar y 1 abdominal.',
  /* En la vista frontal, la izquierda de quien lo usa queda a la derecha del dibujo. */
  motors: [
    {
      id: 'pecho-izq',
      view: 'front',
      label: 'Pectoral izquierdo',
      zone: 'Pecho, lado izquierdo',
      description: 'Vibra sobre el pecho, del lado izquierdo de quien usa el chaleco.',
      x: 134,
      y: 88,
    },
    {
      id: 'pecho-der',
      view: 'front',
      label: 'Pectoral derecho',
      zone: 'Pecho, lado derecho',
      description: 'Vibra sobre el pecho, del lado derecho de quien usa el chaleco.',
      x: 66,
      y: 88,
    },
    {
      id: 'abdomen',
      view: 'front',
      label: 'Abdominal',
      zone: 'Abdomen',
      description: 'Vibra en el centro del abdomen, por debajo del pecho.',
      x: 100,
      y: 178,
    },
    {
      id: 'espalda-izq',
      view: 'back',
      label: 'Dorsal izquierdo',
      zone: 'Espalda alta, lado izquierdo',
      description: 'Vibra sobre la espalda alta, del lado izquierdo.',
      x: 66,
      y: 92,
    },
    {
      id: 'espalda-der',
      view: 'back',
      label: 'Dorsal derecho',
      zone: 'Espalda alta, lado derecho',
      description: 'Vibra sobre la espalda alta, del lado derecho.',
      x: 134,
      y: 92,
    },
    {
      id: 'lumbar',
      view: 'back',
      label: 'Lumbar',
      zone: 'Zona baja de la espalda',
      description: 'Vibra sobre la zona lumbar, en el centro de la espalda baja.',
      x: 100,
      y: 184,
    },
  ] satisfies Motor[],
}

/* ---------- Para quién ---------- */

export const audience = {
  eyebrow: 'Para quién',
  title: 'Una solución para quien organiza y para quien disfruta',
  cards: [
    {
      icon: Building2,
      tag: 'Clientes',
      title: 'Productoras, festivales, teatros y recintos',
      text: 'Alquilás el servicio y ofrecés una experiencia que pocos eventos tienen.',
      points: [
        'Te diferenciás de otros eventos.',
        'Mejorás tu imagen inclusiva.',
        'Sumás a tu presupuesto ESG / RSE.',
        'Sponsors pueden financiar la “Zona Inclusiva”.',
        'Vas en línea con el espíritu de la Ley 3.546 de CABA.',
      ],
    },
    {
      icon: UserCheck,
      tag: 'Usuarios',
      title: 'Personas con hipoacusia leve hasta sordera profunda',
      text: 'El chaleco se adapta a cada forma de escuchar.',
      points: [
        'Para quienes usan audífonos o implantes, es un complemento.',
        'Para la sordera profunda, es la interfaz sensorial principal.',
        'Se vive el show junto al resto del público.',
      ],
    },
  ],
} as const

/* ---------- Servicio llave en mano ---------- */

export const turnkey = {
  eyebrow: 'Servicio llave en mano',
  title: 'Vos organizás el show. Nosotros nos ocupamos del resto.',
  lead: 'Llevamos todo al evento y lo operamos con nuestro propio equipo.',
  services: [
    {
      icon: Mic,
      title: 'Mezcla para los chalecos',
      text: 'Operarios propios hacen la mezcla pensada para los chalecos.',
    },
    {
      icon: UserCheck,
      title: 'Colocación',
      text: 'Ayudamos a cada persona a ponerse el chaleco y ajustarlo.',
    },
    {
      icon: Headset,
      title: 'Soporte técnico',
      text: 'Un equipo técnico atento durante todo el evento.',
    },
    {
      icon: SprayCan,
      title: 'Sanitización',
      text: 'Limpiamos y sanitizamos cada chaleco entre usos.',
    },
  ],
  local: {
    icon: Wrench,
    title: 'Hecho acá, con repuestos de acá',
    text: 'Los equipos se ensamblan en Argentina y usan repuestos locales. Si algo falla, la reparación es rápida.',
  },
} as const

/* ---------- Comparativa ---------- */

export const comparison = {
  eyebrow: 'Comparativa',
  title: 'Cómo nos comparamos',
  lead: 'Tres formas de acercar la música a personas sordas e hipoacúsicas.',
  caption: 'Comparación entre Sensonoro, equipos importados e intérprete de señas o aro magnético',
  rowHeader: 'Criterio',
  columns: [
    { id: 'sensonoro', name: 'Sensonoro', highlight: true },
    { id: 'importados', name: 'Equipos importados', note: 'tipo SubPac', highlight: false },
    { id: 'senas', name: 'Intérprete de señas o aro magnético', highlight: false },
  ],
  rows: [
    {
      criterion: 'Modelo de negocio',
      values: [
        'B2B llave en mano',
        'Venta de equipos B2C / B2B',
        'Por evento o instalación fija',
      ],
    },
    {
      criterion: 'Calidad de inmersión',
      values: ['Alta (3 bandas)', 'Alta', 'Nula inmersión musical'],
    },
    {
      criterion: 'Barrera económica para el cliente',
      values: ['Baja (financiable por sponsors)', 'Muy alta (en dólares)', 'Baja'],
    },
    {
      criterion: 'Implementación logística',
      values: [
        'Operado por técnicos propios in situ',
        'Requiere capacitar personal',
        'Requiere espacio exclusivo con visión al escenario',
      ],
    },
  ],
} as const

/* ---------- Hoja de ruta ---------- */

export const roadmap = {
  eyebrow: 'Hoja de ruta',
  title: 'Hacia dónde vamos',
  lead: 'Cuatro hitos para llegar a más escenarios.',
  milestones: [
    {
      date: 'Ene 2027',
      title: 'Prototipo funcional',
      text: 'Un prototipo con latencia ≤ 15 ms.',
    },
    {
      date: 'Jul 2027',
      title: '20 unidades en prueba',
      text: 'Las probamos con clientes. Meta de satisfacción: más del 85%.',
    },
    {
      date: 'Dic 2028',
      title: 'Primeros contratos',
      text: 'Establecer contrato con el 20% del mercado objetivo',
    },
    {
      date: '2032',
      title: 'Presencia en el circuito',
      text: 'En el 40% de los teatros del programa “Sin Barreras” y en el 20% de los eventos de AMBA.',
    },
  ],
} as const

/* ---------- Misión, visión y valores ---------- */

export const identity = {
  eyebrow: 'Nosotros',
  title: 'En qué creemos',
  mission: {
    title: 'Misión',
    text: 'Que las personas con capacidades auditivas reducidas disfruten experiencias audiovisuales de calidad en AMBA, fomentando vínculos entre comunidades unidas por la música.',
  },
  vision: {
    title: 'Visión',
    text: 'Ser pioneros en tecnología mecano-táctil y psicoacústica, y en la concientización sobre la exclusión de personas sordas e hipoacúsicas en Argentina y Latinoamérica.',
  },
  values: {
    title: 'Valores',
    items: [
      'Fidelidad al audio',
      'Respeto por la intención artística',
      'Empatía',
      'Concientización',
      'Innovación',
    ],
  },
} as const

/* ---------- Equipo ---------- */

export const team = {
  eyebrow: 'Equipo',
  title: 'Quiénes lo hacemos',
  lead: 'Sensonoro es un proyecto de Ingeniería de Sonido de la UNTREF (Universidad Nacional de Tres de Febrero).',
  members: [
    {
      name: 'Dulcinea Bonet',
      initials: 'DB',
      role: 'CEO',
      area: 'Dirección General y Estrategia Comercial',
    },
    {
      name: 'Salvador Pellegrino',
      initials: 'SP',
      role: 'CTO',
      area: 'Software y DSP',
    },
    {
      name: 'Federico Gionco',
      initials: 'FG',
      role: 'CTO',
      area: 'Hardware y Electrónica',
    },
    {
      name: 'Tomás Travaglini',
      initials: 'TT',
      role: 'COO',
      area: 'Operaciones y Logística',
    },
    {
      name: 'Eugenia Onnainty',
      initials: 'EO',
      role: 'Dirección',
      area: 'Experiencia de Usuario',
    },
  ],
} as const

/* ---------- Contacto ---------- */

export const contact = {
  eyebrow: 'Contacto',
  title: 'Llevemos Sensonoro a tu evento',
  lead: 'Contanos qué estás organizando. Te respondemos con una propuesta a medida.',
  mailLabel: 'Escribinos por correo',
  mailSubject: 'Quiero contratar Sensonoro para mi evento',
  eventTypes: [
    'Recital o festival',
    'Teatro',
    'Recinto o sala',
    'Productora',
    'Otro',
  ],
  placeholderIdMessage:
    'El formulario todavía no está conectado. Mientras tanto, escribinos por correo con el botón de al lado.',
  successMessage: '¡Gracias! Recibimos tu consulta. Te respondemos a la brevedad.',
  errorMessage: 'No pudimos enviar el formulario. Probá de nuevo o escribinos por correo.',
}

/* ---------- Footer ---------- */

export const footer = {
  tagline: 'Chalecos hápticos para sentir la música en vivo.',
  university:
    'Proyecto de Ingeniería de Sonido, Universidad Nacional de Tres de Febrero (UNTREF).',
}
