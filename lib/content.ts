import {
  AudioLines,
  BadgeCheck,
  Building2,
  DoorOpen,
  Ear,
  Factory,
  Headset,
  Handshake,
  HeartHandshake,
  KeyRound,
  Mic,
  PiggyBank,
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
  { id: 'comparativa', label: 'Diferencial' },
  { id: 'hoja-de-ruta', label: 'Objetivos' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'equipo', label: 'Equipo' },
] as const

export const ctaLabel = 'Contactanos'

/* ---------- Hero ---------- */

export const hero = {
  eyebrow: 'Chalecos hápticos para espectáculos en vivo',
  title: 'Sentí la música en vivo.',
  subtitle:
    'Nuestros chalecos hápticos traducen el sonido del espectáculo en vibraciones sobre el cuerpo. Así, las personas sordas e hipoacúsicas también viven la música en la sala.',
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
  title: 'La música en vivo deja afuera a muchas personas',
  lead: 'Las personas sordas e hipoacúsicas quedan excluidas de los espectáculos de música en vivo.',
  stat: {
    value: '20,8%',
    text: 'de las discapacidades en Argentina son auditivas.',
    source: 'Fuente: INDEC, 2018',
  },
  itemsTitle: 'Lo que existe hoy, y lo que sumamos',
  items: [
    {
      icon: Ear,
      title: 'Aro magnético',
      text: 'Acerca el sonido a quienes usan audífonos o implantes. El chaleco suma el tacto, para que también vivan la música quienes no los usan.',
    },
    {
      icon: HeartHandshake,
      title: 'Intérpretes de lengua de señas',
      text: 'Hacen accesibles la palabra y la letra. El chaleco implementa la riqueza dinámica de la obra.',
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
      text: '6 motores hápticos ERM vibran sobre el torso: 4 adelante y 2 atrás. Latencia objetivo ≤ 15 ms.',
    },
  ],
} as const

export type MotorId =
  | 'pecho-izq'
  | 'pecho-der'
  | 'abdomen-izq'
  | 'abdomen-der'
  | 'espalda-izq'
  | 'espalda-der'

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
  title: 'Dónde actúa el chaleco',
  lead: 'Pasá el mouse, tocá o enfocá con el teclado cada zona para ver qué parte del cuerpo vibra.',
  frontLabel: 'Vista frontal',
  backLabel: 'Vista trasera',
  listLabel: 'Zonas de vibración',
  idleTitle: 'Elegí una zona',
  idleText: 'Cada chaleco tiene 6 módulos hápticos: 4 adelante (2 pectorales y 2 abdominales) y 2 atrás (dorsales).',
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
      id: 'abdomen-izq',
      view: 'front',
      label: 'Abdominal izquierdo',
      zone: 'Abdomen, lado izquierdo',
      description: 'Vibra sobre el abdomen, del lado izquierdo, por debajo del pecho.',
      x: 132,
      y: 176,
    },
    {
      id: 'abdomen-der',
      view: 'front',
      label: 'Abdominal derecho',
      zone: 'Abdomen, lado derecho',
      description: 'Vibra sobre el abdomen, del lado derecho, por debajo del pecho.',
      x: 68,
      y: 176,
    },
    {
      id: 'espalda-izq',
      view: 'back',
      label: 'Dorsal izquierdo',
      zone: 'Espalda, lado izquierdo',
      description: 'Vibra sobre la espalda, del lado izquierdo.',
      x: 66,
      y: 120,
    },
    {
      id: 'espalda-der',
      view: 'back',
      label: 'Dorsal derecho',
      zone: 'Espalda, lado derecho',
      description: 'Vibra sobre la espalda, del lado derecho.',
      x: 134,
      y: 120,
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
      tag: 'Cliente',
      title: 'Recintos y espacios culturales de mediana escala',
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
  benefitsTitle: 'Beneficios para el cliente',
  benefits: [
    {
      icon: PiggyBank,
      title: 'Inclusión sin inversión inicial',
      text: 'Contratás el servicio como un gasto operativo, sin comprar ni mantener la tecnología.',
    },
    {
      icon: KeyRound,
      title: 'Servicio 100% “llave en mano”',
      text: 'Llevamos, colocamos, operamos y sanitizamos los chalecos en cada función.',
    },
    {
      icon: DoorOpen,
      title: 'Abrí tus puertas a un nuevo público',
      text: 'Personas sordas e hipoacúsicas pueden vivir la música en tu sala, junto al resto del público.',
    },
    {
      icon: BadgeCheck,
      title: 'Prestigio y cumplimiento normativo',
      text: 'Reforzás tu compromiso con la accesibilidad y la innovación, en línea con la Ley 3.546 de CABA.',
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
  eyebrow: 'Diferencial',
  title: 'Qué nos diferencia',
  lead: 'Contratar Sensonoro frente a comprar equipos hápticos importados.',
  caption: 'Comparación entre el servicio de Sensonoro y la compra de equipos hápticos importados',
  rowHeader: 'Criterio',
  columns: [
    { id: 'sensonoro', name: 'Sensonoro', highlight: true },
    { id: 'importados', name: 'Equipos importados', note: 'tipo SubPac', highlight: false },
  ],
  rows: [
    {
      criterion: 'Modelo',
      values: ['Servicio llave en mano', 'Compra de equipos'],
    },
    {
      criterion: 'Inversión inicial',
      values: ['Ninguna: es un gasto operativo', 'Muy alta (en dólares)'],
    },
    {
      criterion: 'Calidad de inmersión',
      values: ['Alta (3 bandas, 6 módulos)', 'Alta'],
    },
    {
      criterion: 'Operación en sala',
      values: ['Técnicos propios en cada función', 'Requiere capacitar personal'],
    },
    {
      criterion: 'Mantenimiento',
      values: ['Repuestos locales, reparación rápida', 'Repuestos importados'],
    },
  ],
  alliance: {
    icon: Handshake,
    tag: 'Futura alianza',
    title: 'Aro magnético + Sensonoro',
    text: 'El aro magnético ya acerca el sonido a quienes usan audífonos o implantes. Buscamos trabajar junto a quienes lo instalan, para que en una misma sala cada persona elija cómo vivir el espectáculo: escuchando por el aro, sintiendo con el chaleco, o las dos cosas a la vez.',
  },
} as const

/* ---------- Hoja de ruta ---------- */

export const roadmap = {
  eyebrow: 'Objetivos',
  title: 'Hacia dónde vamos',
  lead: 'Nuestros objetivos a corto, mediano y largo plazo.',
  milestones: [
    {
      term: 'Corto plazo',
      date: '2027',
      title: 'MVP y lote piloto de 50 chalecos',
      paragraphs: [
        'Desarrollar un Producto Mínimo Viable (MVP) funcional con una latencia de transmisión igual o menor a 15 ms para enero de 2027. Para julio de ese mismo año, se pretende fabricar un lote piloto de 50 chalecos para ejecutar pruebas Beta en dos recintos culturales del AMBA, donde se realizará una encuesta a los usuarios buscando una satisfacción de la experiencia mayor al 85%.',
      ],
    },
    {
      term: 'Mediano plazo',
      date: '2029',
      title: '250 chalecos y 10 recintos con contrato',
      paragraphs: [
        'Alcanzar nuestra capacidad productiva inicial de 250 chalecos operativos y afianzar vínculos para concretar contratos recurrentes con al menos 10 teatros y centros culturales de mediana escala (aforos de 500 a 2.500 espectadores) en el AMBA, con el fin de solventar el 100% de los costos operativos mensuales para diciembre de 2029.',
      ],
    },
    {
      term: 'Largo plazo',
      date: '2035',
      title: 'El estándar en accesibilidad acústica del AMBA',
      paragraphs: [
        'Posicionarnos como el servicio estándar en accesibilidad acústica en el AMBA, logrando presencia en un 35% del circuito de teatros de mediana escala (aproximadamente 30 recintos) y expandiendo nuestra flota a 1.000 unidades operativas para el 2035, lo que nos habilitará finalmente para abastecer al mercado de estadios y festivales masivos.',
      ],
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
  title: 'Quiénes somos',
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
  title: 'Llevemos Sensonoro a tu sala',
  lead: 'Contanos qué estás organizando. Te respondemos con una propuesta a medida.',
  mailLabel: 'Escribinos por correo',
  mailSubject: 'Quiero contratar Sensonoro para mi evento',
  eventTypes: [
    'Teatro',
    'Centro cultural',
    'Recinto o sala',
    'Recital o festival',
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
}
