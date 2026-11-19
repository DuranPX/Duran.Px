/**
 * Datos del perfil. Todo lo que aparece aquí se publica.
 */
export const profile = {
  name: "Juan Durán",
  handle: "DuranPx",
  monogram: "Px",
  headline: "Desarrollo de software y aplicaciones web.",
  tagline: "Software con estructura clara, de la base de datos a la interfaz.",
  intro:
    "Estudiante de Ingeniería en la Universidad de Caldas. Desarrollo aplicaciones web integrando interfaces, lógica de negocio, APIs y bases de datos, con especial interés en el backend, la seguridad y el control de acceso.",
  location: "Manizales, Colombia",
  university: "Universidad de Caldas",

  email: "juandaduran3030@gmail.com",
  github: "https://github.com/DuranPX",
  linkedin: "https://www.linkedin.com/in/duranpx",
  /** Perfil público de Credly. */
  credly: "https://www.credly.com/users/juan-david-duran-vasquez",
  /**
   * CV. Con available: false no se publica el PDF y se muestra "CV bajo solicitud"
   * (abre un correo). Para publicarlo: copia el PDF a public/cv-juan-duran.pdf y pon available: true.
   */
  cv: { available: false, file: "/cv-juan-duran.pdf" },

  /**
   * Retrato cuadrado (1:1), rostro centrado. Si lo cambias, mantén al menos 1000×1000.
   * Con isPlaceholder: true se muestra una silueta neutral.
   */
  portrait: {
    src: "/images/portrait.jpeg",
    alt: "Retrato de Juan Durán",
    width: 1000,
    height: 1000,
    isPlaceholder: false,
  },
} as const;

export const contextFacts = [
  { label: "Formación", value: "Estudiante de Ingeniería" },
  { label: "Universidad", value: "Universidad de Caldas" },
  { label: "Ubicación", value: "Manizales, Colombia" },
  { label: "Enfoque", value: "Backend, APIs y aplicaciones web" },
] as const;

export const about = {
  paragraphs: [
    "Me interesa construir software que tenga una estructura clara, resuelva problemas concretos y pueda evolucionar sin volverse innecesariamente complejo. Mi trabajo se ha centrado en el desarrollo backend, las APIs, la integración de servicios y las aplicaciones full-stack.",
    "Disfruto entender cómo se conectan las partes de un sistema: los datos, las reglas de negocio, el control de acceso y la experiencia que finalmente recibe el usuario. Antes de escribir código intento comprender el problema y el contexto en el que se usará.",
    "Sigo fortaleciendo mis bases en arquitectura, seguridad, bases de datos y redes mediante proyectos académicos y personales.",
  ],
  personal:
    "Fuera del código: natación, escritura y construcción de mundos, videojuegos y juegos de rol. Me interesan las herramientas que ayudan a organizar ideas y narrativas.",
  learning: [
    "Autenticación y autorización: JWT, roles y permisos (RBAC, PoLP)",
    "Principios SOLID y conceptos de DDD",
    "Modelado de datos y consultas SQL",
    "Redes: VLAN, ACL, NAT e IPv6",
    "RAG y evaluación de sistemas con modelos de lenguaje",
  ],
} as const;

export const approach = [
  {
    title: "Comprender",
    text: "Defino el problema, quién lo vive y qué restricciones tiene antes de elegir herramientas.",
  },
  {
    title: "Estructurar",
    text: "Separo responsabilidades: datos, reglas de negocio, acceso y presentación.",
  },
  {
    title: "Implementar",
    text: "Construyo por partes pequeñas y conecto frontend, APIs y persistencia.",
  },
  {
    title: "Verificar",
    text: "Pruebo los flujos principales, corrijo y documento lo necesario para retomarlo.",
  },
] as const;
