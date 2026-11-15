export type ProjectStatus =
  | "to-confirm"
  | "implemented"
  | "mvp"
  | "experimental"
  | "proposal";

export interface Project {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  technologies: string[];
  focus: string[];
  pending: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "sbuses",
    name: "SBuses",
    eyebrow: "Flotas · servicios · operaciones",
    summary:
      "Sistema orientado a la gestión de flotas, incidentes y programaciones, con responsabilidades distribuidas entre servicios.",
    description:
      "El sistema reúne un frontend con React y Vite, un servicio de negocio construido con NestJS y un servicio de seguridad desarrollado con Spring Boot. La información compartida describe recursos relacionados con incidentes y programaciones, además de trabajo con MongoDB, JWT, roles y permisos.",
    status: "to-confirm",
    statusLabel: "Estado por confirmar",
    technologies: ["React", "Vite", "NestJS", "Spring Boot", "MongoDB"],
    focus: [
      "Separación de responsabilidades entre servicios",
      "Diseño de recursos de API para incidentes y programaciones",
      "Autenticación y permisos descritos en el proyecto",
    ],
    pending: [
      "Estado actual y funcionalidades demostrables",
      "Contribución personal frente al trabajo del equipo",
      "Enlaces a repositorio, capturas o demo",
      "Verificación de geolocalización, tiempo real y controles de autorización",
    ],
    featured: true,
  },
  {
    slug: "llm-cost-monitor",
    name: "LLM Cost Monitor",
    eyebrow: "Consumo de modelos · datos multi-tenant",
    summary:
      "Aplicación web para consultar, organizar y hacer seguimiento del consumo y los costos asociados a modelos de lenguaje.",
    description:
      "La información disponible describe un frontend con Vite y React, integración con Supabase y un modelo multi-tenant. El aislamiento de información y las políticas de acceso deben contarse únicamente después de verificar su implementación.",
    status: "to-confirm",
    statusLabel: "Estado por confirmar",
    technologies: ["React", "Vite", "Supabase"],
    focus: [
      "Organización de datos por organización o tenant",
      "Consultas y visualización de costos",
      "Integración entre interfaz y servicios de datos",
    ],
    pending: [
      "Estado actual y funcionalidades implementadas",
      "Contribución personal",
      "Políticas de acceso y aislamiento efectivamente probadas",
      "Enlaces a repositorio, capturas o demo",
    ],
    featured: true,
  },
  {
    slug: "dnd-records",
    name: "DND_Records",
    eyebrow: "Interfaz visual · organización de información",
    summary:
      "Aplicación web construida con Next.js, Supabase y Konva para organizar registros y representar información visualmente.",
    description:
      "El proyecto combina una interfaz visual interactiva con persistencia en Supabase. Los módulos y flujos concretos se dejan pendientes de validar con el estado actual de su repositorio.",
    status: "implemented",
    statusLabel: "Implementado · alcance por confirmar",
    technologies: ["Next.js", "Supabase", "Konva"],
    focus: [
      "Interacción visual en el navegador",
      "Estructura y presentación de registros",
      "Relación entre frontend y persistencia",
    ],
    pending: [
      "Funcionalidades y módulos actualmente demostrables",
      "Contribución personal",
      "Enlaces a repositorio, capturas o demo",
    ],
    featured: true,
  },
  {
    slug: "aula-up",
    name: "AULA UP",
    eyebrow: "Propuesta · experiencia educativa",
    summary:
      "Propuesta de aula interactiva y personalizada para participantes de la Fundación ASISCO UP!.",
    description:
      "El alcance vigente contempla un perfil de participante y un taller asignado manualmente según sus necesidades. El taller puede incluir actividades de selección, asociación, ordenamiento, imágenes, audios y videos; también se plantea visualizar su progreso bajo el concepto Son UP.",
    status: "proposal",
    statusLabel: "Propuesta",
    technologies: [],
    focus: [
      "Experiencia centrada en el participante",
      "Talleres y actividades interactivas",
      "Accesibilidad y seguimiento del progreso del participante",
    ],
    pending: [
      "Qué partes corresponden a propuesta, diseño o desarrollo realizado",
      "Responsabilidad y liderazgo personal en el grupo",
      "Tecnologías seleccionadas",
    ],
    featured: true,
  },
  {
    slug: "mcp-gemini-sql",
    name: "MCP + Gemini + SQL",
    eyebrow: "Exploración técnica · prototipo",
    summary:
      "Experimento de integración entre un servidor FastMCP, Gemini y consultas SQL.",
    description:
      "La exploración aborda la comunicación con herramientas y el acceso a datos mediante consultas. Se presenta como experimento, no como producto terminado; no se publican credenciales, consultas sensibles ni datos reales.",
    status: "experimental",
    statusLabel: "Experimental",
    technologies: ["FastMCP", "Gemini", "SQL"],
    focus: [
      "Comunicación entre herramientas",
      "Interpretación de solicitudes",
      "Acceso controlado a datos",
    ],
    pending: [
      "Estado del prototipo y comportamiento que puede demostrarse",
      "Detalles de implementación y contribución personal",
      "Enlace a repositorio",
    ],
    featured: false,
  },
  {
    slug: "e-sports-latam",
    name: "e-sports LATAM",
    eyebrow: "MVP · API REST",
    summary:
      "MVP orientado al entorno de e-sports en Latinoamérica, con un backend Express y una API REST inicial.",
    description:
      "El proyecto se plantea como un MVP con un alcance inicial sencillo. No se atribuyen módulos, usuarios ni funcionalidades adicionales a la API sin verificar el repositorio.",
    status: "mvp",
    statusLabel: "MVP",
    technologies: ["Express", "API REST"],
    focus: [
      "Definición de un alcance inicial acotado",
      "Organización de rutas y recursos de API",
    ],
    pending: [
      "Funcionalidades incluidas en el MVP actual",
      "Contribución personal y estado de desarrollo",
      "Enlace a repositorio o demo",
    ],
    featured: false,
  },
];

export function getProjectStatusLabel(status: ProjectStatus): string {
  return {
    "to-confirm": "Estado por confirmar",
    implemented: "Implementado · alcance por confirmar",
    mvp: "MVP",
    experimental: "Experimental",
    proposal: "Propuesta",
  }[status];
}
