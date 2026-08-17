export const EMAIL = 'raul.tristan.07@gmail.com'
export const PHONE = '+51 945 987 598'
export const LINKEDIN = 'https://www.linkedin.com/in/raul-tristan'
export const GITHUB = 'https://github.com/raul-tristan'

export interface Job {
  period: string
  company: string
  role: string
  current?: boolean
  points: string[]
}

export const experience: Job[] = [
  {
    period: 'AGO 2025 — ACTUALIDAD',
    company: 'Ministerio de Economía y Finanzas',
    role: 'Desarrollador Full Stack',
    current: true,
    points: [
      'Aplicativo web informativo y administrable para publicaciones dirigidas al público interno y externo.',
      'Integración de APIs y autenticación segura con control de acceso por roles y módulos.',
      'Componentes reutilizables, diseño responsivo y optimización de rendimiento y seguridad.',
      'Documentación técnica, diagramas y manuales conforme a estándares institucionales.',
    ],
  },
  {
    period: 'NOV 2023 — JUL 2025',
    company: 'RVC Services S.R.LTDA',
    role: 'Desarrollador Frontend',
    points: [
      'Páginas web con Next.js 13, React.js, TailwindCSS y ApexCharts.',
      'Estandarización del proyecto en base a roles, regiones y navegación dinámica.',
      'Formularios dinámicos con validaciones, estados y consumo de API REST.',
      'Autenticación con NextAuth, rutas protegidas y políticas de seguridad.',
    ],
  },
  {
    period: 'AGO 2022 — ABR 2023',
    company: 'Canvia',
    role: 'Desarrollador Frontend',
    points: [
      'Interfaces con HTML5, CSS3, Bootstrap y AngularJS.',
      'Formularios reactivos, autenticación y gestión de eventos.',
      'Testeo de APIs y sincronización con servicios externos.',
      'Optimización del rendimiento y despliegues al servidor de desarrollo.',
    ],
  },
  {
    period: 'MAR 2022 — JUL 2022',
    company: 'Carrier & Enterprise Network Solutions',
    role: 'Full Stack Developer Junior',
    points: [
      'Servicios backend con .NET Core y controladores RESTful.',
      'Modelado de base de datos en SQL Server: tablas, índices y procedimientos almacenados.',
      'Pruebas unitarias y validación funcional en backend y frontend.',
      'Despliegues a producción en Windows Server con soporte post-lanzamiento.',
    ],
  },
  {
    period: 'ABR 2021 — FEB 2022',
    company: 'Alpe Travel & Cruises',
    role: 'Soporte de Sistemas GDS — Plataformas y ERP',
    points: [
      'Creación y estandarización de los proyectos back y front desde cero.',
      'Modelos, servicios, controladores, guards y formularios reactivos.',
      'Seguridad por token y pruebas funcionales.',
      'Instalación, configuración del servidor, compilación y despliegues.',
    ],
  },
  {
    period: 'OCT 2020 — MAR 2021',
    company: 'Partner Tech',
    role: 'Analista y Desarrollador de Sistemas',
    points: [
      'Lógica de aplicación según requerimientos con HTML5, CSS3, Bootstrap y AngularJS.',
      'APIs RESTful para comunicación fluida entre front-end y back-end.',
      'Integración de JWT para la seguridad de la aplicación.',
      'Optimización de consultas y mejora del rendimiento de bases de datos.',
    ],
  },
  {
    period: 'NOV 2018 — SET 2020',
    company: 'Servicios Generales "Al Perú Travel"',
    role: 'Soporte de Sistemas y Redes',
    points: [
      'Soporte de sistemas y redes para operaciones de la agencia.',
      'Construcción de páginas web y mantenimiento de plataformas internas.',
      'Primeros pasos profesionales en desarrollo y administración de sistemas.',
    ],
  },
]

export const stack = {
  front: [
    'React',
    'Next.js',
    'Angular',
    'Ionic',
    'TailwindCSS',
    'Bootstrap',
    'ApexCharts',
    'HTML5 / CSS3',
  ],
  back: ['Spring Boot', '.NET Core', 'Node.js', 'Laravel', 'API REST', 'JWT / NextAuth'],
  data: ['SQL Server', 'MongoDB', 'Docker', 'GitHub', 'Postman', 'Jira', 'IntelliJ IDEA', 'VS Code'],
}

export interface Project {
  index: string
  title: string
  type: string
  year: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  {
    index: '01',
    title: 'Portal Web Institucional',
    type: 'FULL STACK',
    year: '2025',
    description:
      'Aplicativo web informativo y administrable para el Ministerio de Economía y Finanzas. Publicación de contenido para público interno y externo, con autenticación segura y control de acceso por roles y módulos.',
    tags: ['APIs', 'Roles & permisos', 'Responsive', 'Seguridad'],
  },
  {
    index: '02',
    title: 'Plataforma de Gestión por Regiones',
    type: 'FRONTEND',
    year: '2023',
    description:
      'Sistema con navegación dinámica basada en roles y regiones. Dashboards con gráficos ApexCharts, formularios dinámicos con validaciones y autenticación con NextAuth sobre APIs del Estado.',
    tags: ['Next.js 13', 'React', 'TailwindCSS', 'NextAuth', 'ApexCharts'],
  },
  {
    index: '03',
    title: 'Sistema GDS & ERP de Viajes',
    type: 'FULL STACK',
    year: '2021',
    description:
      'Plataforma back y front construida desde cero para una agencia de viajes y cruceros: módulos, servicios, guards, formularios reactivos y seguridad por token, con instalación y configuración del servidor.',
    tags: ['AngularJS', 'Token auth', 'ERP', 'Deploy'],
  },
  {
    index: '04',
    title: 'Microservicios .NET & SQL Server',
    type: 'BACKEND',
    year: '2022',
    description:
      'Servicios RESTful con .NET Core, modelado de base de datos con procedimientos almacenados, pruebas unitarias y despliegues a producción en Windows Server.',
    tags: ['.NET Core', 'SQL Server', 'REST', 'Windows Server'],
  },
]

export const softSkills = [
  'Trabajo en equipo',
  'Comunicación asertiva',
  'Planificación y gestión del tiempo',
  'Adaptabilidad y flexibilidad',
  'Liderazgo de proyectos',
]

export const languages = [
  { name: 'Español', level: 'Nativo', pct: 100 },
  { name: 'Inglés', level: 'En curso', pct: 40 },
]
