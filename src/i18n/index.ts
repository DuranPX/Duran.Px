/**
 * Utilidades de idioma. El español es el idioma base (src/data/*);
 * el inglés vive en src/i18n/en.ts.
 */
export type Pair = { es: string; en: string };

/**
 * Atributo bilingüe (aria-label, alt, title). El HTML lleva el español y
 * `data-en-<attr>` con el inglés; el script de la página los intercambia.
 */
export function attr(name: "aria-label" | "alt" | "title", es: string, en: string) {
  return { [name]: es, [`data-en-${name}`]: en } as Record<string, string>;
}

/** Textos de interfaz. */
export const ui = {
  nav: {
    inicio: { es: "Inicio", en: "Home" },
    proyectos: { es: "Proyectos", en: "Projects" },
    perfil: { es: "Perfil", en: "Profile" },
    formacion: { es: "Formación", en: "Education" },
    tecnologias: { es: "Tecnologías", en: "Skills" },
    contacto: { es: "Contacto", en: "Contact" },
  },
  menu: { es: "Menú", en: "Menu" },
  sections: { es: "Secciones", en: "Sections" },
  skip: { es: "Saltar al contenido", en: "Skip to content" },
  themeToLight: { es: "Cambiar a modo claro", en: "Switch to light mode" },
  themeToDark: { es: "Cambiar a modo oscuro", en: "Switch to dark mode" },
  langSwitch: { es: "View this page in English", en: "Ver esta página en español" },
  home: { es: "volver al inicio", en: "back to top" },

  portfolio: { es: "Portafolio", en: "Portfolio" },
  directContact: { es: "Contacto directo", en: "Direct contact" },
  viewProjects: { es: "Ver proyectos", en: "View projects" },
  contact: { es: "Contactar", en: "Get in touch" },
  downloadCv: { es: "Descargar CV", en: "Download CV" },
  profiles: { es: "Perfiles externos", en: "External profiles" },
  newTab: { es: "se abre en otra pestaña", en: "opens in a new tab" },
  email: { es: "Correo", en: "Email" },
  credlyBadges: { es: "Insignias en Credly", en: "Badges on Credly" },
  summary: { es: "Resumen", en: "Summary" },

  projectsTitle: { es: "Proyectos seleccionados", en: "Selected projects" },
  projectsLead: {
    es: "Casos de estudio con su contexto, mi participación y las decisiones técnicas. Cada detalle se despliega en esta misma página.",
    en: "Case studies with their context, my role and the technical decisions behind them. Every detail opens on this same page.",
  },
  projectIndex: { es: "Índice de proyectos", en: "Project index" },
  technologies: { es: "Tecnologías", en: "Technologies" },
  problem: { es: "Problema", en: "Problem" },
  solution: { es: "Solución", en: "Solution" },
  challenge: { es: "Reto", en: "Challenge" },
  outcome: { es: "Resultado", en: "Outcome" },
  myRole: { es: "Mi participación", en: "My role" },
  learnMore: { es: "Conocer el proyecto", en: "Read the case study" },
  context: { es: "Contexto", en: "Context" },
  builtSolution: { es: "Solución desarrollada", en: "What was built" },
  architecture: { es: "Arquitectura", en: "Architecture" },
  learnings: { es: "Aprendizajes", en: "Learnings" },
  limitations: { es: "Estado y limitaciones", en: "Status and limitations" },
  repoOf: { es: "Repositorio de", en: "Repository:" },
  demoOf: { es: "Demo de", en: "Demo:" },
  otherProjects: { es: "Otros proyectos y experimentos", en: "Other projects and experiments" },
  private: { es: "Privado", en: "Private" },
  privateRepo: { es: "Código privado", en: "Private repository" },
  requestCv: { es: "CV bajo solicitud", en: "CV on request" },
  requestCvSubject: { es: "Solicitud de CV", en: "CV request" },
  githubRepo: { es: "repositorio en GitHub, se abre en otra pestaña", en: "GitHub repository, opens in a new tab" },
  allRepos: { es: "Todos los repositorios en GitHub", en: "All repositories on GitHub" },

  profileTitle: { es: "Perfil", en: "Profile" },
  quote: { es: "Entender el problema antes de escribir la solución.", en: "Understand the problem before writing the solution." },
  learning: { es: "En aprendizaje", en: "Currently learning" },
  offCode: { es: "Fuera del código", en: "Away from code" },
  approachLabel: { es: "Cómo abordo un proyecto", en: "How I approach a project" },

  educationTitle: { es: "Formación y certificados", en: "Education and certificates" },
  verify: { es: "Verificar", en: "Verify" },
  viewProgram: { es: "Ver programa", en: "View program" },
  experience: { es: "Experiencia", en: "Experience" },
  badgesLabel: { es: "Insignias verificables", en: "Verifiable badges" },
  badgesTitle: { es: "Insignias y cursos", en: "Badges and courses" },
  badgesText: {
    es: "Las insignias digitales de mis certificados y cursos pueden verificarse en Credly.",
    en: "The digital badges for my certificates and courses can be verified on Credly.",
  },
  credlyProfile: { es: "Ver perfil en Credly", en: "View Credly profile" },

  techTitle: { es: "Tecnologías", en: "Skills" },
  techLead: {
    es: "Herramientas con las que he construido los proyectos de esta página, agrupadas por responsabilidad.",
    en: "Tools I have used to build the projects on this page, grouped by responsibility.",
  },

  contactKicker: { es: "VI · Contacto", en: "VI · Contact" },
  contactTitle: { es: "¿Conversamos", en: "Shall we talk" },
  contactLead: {
    es: "Busco oportunidades de práctica y desarrollo donde pueda aportar en backend, APIs y aplicaciones web, y seguir aprendiendo con un equipo.",
    en: "I'm looking for internship and development opportunities where I can contribute to backend, APIs and web applications while learning alongside a team.",
  },
  copyEmail: { es: "Copiar correo", en: "Copy email" },
  copied: { es: "Correo copiado", en: "Email copied" },
  footerLinks: { es: "Enlaces del pie de página", en: "Footer links" },
  backToTop: { es: "Volver al inicio", en: "Back to top" },

  shots: { es: "Capturas de", en: "Screenshots of" },
  swipe: { es: "Desliza o usa las flechas para ver más capturas", en: "Swipe or use the arrows to see more screenshots" },
  prevShot: { es: "Captura anterior", en: "Previous screenshot" },
  nextShot: { es: "Captura siguiente", en: "Next screenshot" },
  of: { es: "de", en: "of" },
  pendingShot: { es: "Captura pendiente de", en: "Pending screenshot of" },
} satisfies Record<string, Pair | Record<string, Pair>>;
