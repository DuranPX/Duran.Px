/**
 * Proyectos. La información proviene de los README y dependencias de cada repositorio.
 * Lo que no está confirmado queda en `pending` (solo visible en `npm run dev`).
 *
 * Imágenes: `src: ""` = REEMPLAZAR. Mientras esté vacío se dibuja una lámina
 * neutral del mismo tamaño. Guarda las capturas en public/images/projects/<id>/
 * (1600×1000, 16:10, .webp) y escribe la ruta, p. ej. "/images/projects/sbuses/panel.webp".
 */
export type ProjectStatus = "Finalizado" | "Publicado" | "En desarrollo" | "Prototipo" | "Académico" | "Propuesta";

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  /** Tamaño real de la imagen (evita saltos de layout). */
  width?: number;
  height?: number;
  /** "contain" muestra la captura completa sin recortar (útil si no es 16:10). */
  fit?: "cover" | "contain";
}

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  status: ProjectStatus;
  technologies: string[];
  context: string;
  /** Resumen visible del caso: problema, solución, reto y resultado (una frase cada uno). */
  brief: { problem: string; solution: string; challenge: string; outcome: string };
  contribution: string;
  solution: string[];
  architecture?: string;
  learnings?: string;
  limitations?: string;
  gallery: ProjectImage[];
  repositoryUrl?: string;
  /** true = el repositorio existe pero es privado: no se enlaza, se indica "Código privado". */
  repositoryPrivate?: boolean;
  demoUrl?: string;
  pending: string[];
}

export const projects: Project[] = [
  {
    id: "aula-up",
    title: "AULA UP",
    category: "Proyecto profesional · Fundación ASISCO UP!",
    summary:
      "Aula interactiva y personalizada para participantes de la Fundación ASISCO UP!, con talleres asignados según las necesidades de cada persona.",
    status: "Finalizado",
    technologies: ["React", "Vite", "Express", "Prisma", "PostgreSQL"],
    context:
      "Proyecto desarrollado y entregado a la Fundación ASISCO UP!. Sus participantes necesitan talleres adaptados a su proceso; el alcance se centra en la experiencia del participante, no en la administración institucional.",
    brief: {
      problem: "Los participantes de la fundación necesitan actividades adaptadas a su proceso, no un contenido igual para todos.",
      solution: "Aula interactiva con actividades asignadas a cada participante: selección, asociación y ordenamiento.",
      challenge: "Hacer accesibles actividades con imágenes, audio y video, con pruebas de accesibilidad en Playwright.",
      outcome: "Proyecto finalizado y entregado a la Fundación ASISCO UP!.",
    },
    contribution:
      "Líder del proyecto: llevé la planificación creativa y técnica de todos los procesos, de inicio a fin. También trabajé en el backend y el modelado de datos.",
    solution: [
      "Actividades de selección, asociación y ordenamiento, con imágenes, audio y video.",
      "API en Express con TypeScript, validación con Zod y documentación con Swagger.",
      "Persistencia en PostgreSQL mediante Prisma.",
    ],
    architecture:
      "Frontend en React 19 y Vite; backend Express 5 con Prisma sobre PostgreSQL. El frontend incluye pruebas de accesibilidad con Playwright.",
    limitations:
      "El panel administrativo se limita al análisis de resultados y a la publicación de nuevos recursos; la gestión de docentes, grupos y asistencia quedó fuera del alcance.",
    gallery: [
      { src: "/images/projects/aula-up/lecturas.webp", width: 597, height: 373, alt: "Sección de lecturas del participante en AULA UP", caption: "Lecturas" },
      { src: "/images/projects/aula-up/rompecabezas.webp", width: 544, height: 339, alt: "Actividad de rompecabezas en AULA UP", caption: "Actividad de rompecabezas" },
      { src: "/images/projects/aula-up/accesibilidad.webp", width: 597, height: 373, alt: "Panel de opciones de accesibilidad en AULA UP", caption: "Opciones de accesibilidad" },
      { src: "/images/projects/aula-up/panel-administrativo.webp", width: 597, height: 373, alt: "Panel administrativo de AULA UP para analizar resultados y publicar recursos", caption: "Panel de resultados y recursos" },
    ],
    demoUrl: "https://aulaup-bxss.onrender.com/",
    repositoryUrl: "https://github.com/DuranPX/AulaUP",
    repositoryPrivate: true,
    pending: [],
  },
  {
    id: "sbuses",
    title: "SBuses",
    category: "Proyecto académico · Gestión de transporte",
    summary:
      "Sistema web para gestionar buses, rutas, conductores, incidentes y programaciones, con control de acceso por roles en frontend y backend.",
    status: "Finalizado",
    technologies: ["React", "TypeScript", "NestJS", "Spring Boot", "MongoDB"],
    context:
      "Proyecto académico desarrollado en equipo para la gestión de un sistema de buses en Manizales. Los procesos de operación —rutas, buses, conductores e incidentes— requieren que cada usuario vea y modifique solo lo que le corresponde.",
    brief: {
      problem: "Rutas, buses, conductores e incidentes gestionados por usuarios con permisos distintos.",
      solution: "Microservicios: seguridad en Spring Boot y negocio en NestJS, con un frontend en React.",
      challenge: "Aplicar control de acceso por roles de forma coherente en el backend y en la interfaz.",
      outcome: "Proyecto académico finalizado, sin soporte activo.",
    },
    contribution:
      "Líder del proyecto: llevé la planificación creativa y técnica de todos los procesos, de inicio a fin. Mi trabajo técnico se centró en el backend, la seguridad y el control de acceso.",
    solution: [
      "Servicio de seguridad con Spring Boot 3 y Java 17: autenticación, roles y emisión de JWT.",
      "Servicios de negocio y notificaciones en Node.js con NestJS.",
      "Frontend en React, TypeScript y Vite con permisos por módulo leídos del JWT.",
      "Guardas de rutas e interceptores de Axios para sesión, doble factor y restablecimiento de contraseña.",
    ],
    architecture:
      "Monorepo de microservicios: ms_security (Spring Boot + MongoDB), ms-business y ms-notifications (NestJS). El frontend consume ambos y aplica RBAC también en la interfaz.",
    learnings:
      "Separar la seguridad en su propio servicio obliga a definir con precisión qué viaja en el token y qué valida cada servicio.",
    limitations:
      "Proyecto académico finalizado y sin soporte: no recibe mantenimiento ni actualizaciones. La integración OAuth 2.0 con proveedores externos (Google, GitHub, Azure) quedó fuera de la versión final.",
    gallery: [
      { src: "/images/projects/sbuses/inicio.webp", width: 1365, height: 636, fit: "contain", alt: "Página de inicio de SBuses", caption: "Página de inicio" },
      { src: "/images/projects/sbuses/login.webp", width: 1365, height: 636, fit: "contain", alt: "Pantalla de inicio de sesión de SBuses", caption: "Inicio de sesión" },
    ],
    // Frontend; el backend está en otro repositorio. Cambia repositoryPrivate a false si lo publicas.
    repositoryUrl: "https://github.com/DuranPX/S.Buses_FrontEnd",
    repositoryPrivate: true,
    pending: [],
  },
  {
    id: "mythic-warships",
    title: "Mythic Warships",
    category: "Juego web · Frontend y API",
    summary:
      "Juego de batalla naval en el navegador, con flotas de distintos tipos de barco y un ranking de jugadores por país servido desde una API propia.",
    status: "Académico",
    technologies: ["JavaScript", "HTML", "CSS", "Python", "Flask"],
    context:
      "Proyecto del curso de Desarrollo Front-End. El reto era construir un juego completo sin frameworks, organizando bien el código del cliente y conectándolo con un backend.",
    brief: {
      problem: "Construir un juego completo sin frameworks y conectarlo con un backend propio.",
      solution: "Cliente en JavaScript organizado en modelos, controladores y vistas, más una API en Flask.",
      challenge: "Modelar cada tipo de barco y el tablero como clases, y registrar puntajes por apodo y país.",
      outcome: "Proyecto académico finalizado, con código público en GitHub.",
    },
    contribution: "Líder del proyecto: llevé la planificación creativa y técnica de todos los procesos, de inicio a fin.",
    solution: [
      "Frontend en JavaScript puro organizado en modelos, controladores y vistas.",
      "Modelos por tipo de barco (portaaviones, acorazado, destructor, submarino), tablero y jugador.",
      "API en Flask para registrar puntajes por apodo, consultar el ranking y listar países.",
      "Persistencia sencilla en archivos JSON para puntajes y países.",
    ],
    architecture:
      "Cliente MVC en JavaScript que consume la API Flask (POST /score-recorder, GET /ranking, GET /countries).",
    gallery: [
      { src: "/images/projects/Mythic-warships/inicio.webp", width: 1365, height: 638, fit: "contain", alt: "Pantalla de inicio de Mythic Warships con selección de usuario y país", caption: "Inicio y selección de país" },
      { src: "/images/projects/Mythic-warships/ranking.webp", width: 1364, height: 636, fit: "contain", alt: "Ranking de jugadores por puntaje y país en Mythic Warships", caption: "Ranking de jugadores" },
    ],
    repositoryUrl: "https://github.com/DuranPX/Proyecto-DesarrolloFront-End1",
    pending: [],
  },
  {
    id: "avl-car-game",
    title: "AVL Car Game",
    category: "Juego · Estructuras de datos",
    summary:
      "Juego de carreras en Python donde los obstáculos de la carretera se almacenan y gestionan en un árbol AVL que el jugador puede configurar y recorrer.",
    status: "Académico",
    technologies: ["Python", "Pygame", "Matplotlib", "JSON"],
    context:
      "Proyecto de estructuras de datos: usar un árbol AVL como pieza real de un juego, no solo como ejercicio de consola, y hacer visible su balanceo y sus recorridos.",
    brief: {
      problem: "Llevar un árbol AVL a una situación concreta donde su orden y balanceo tengan efecto visible.",
      solution: "Los obstáculos de la carretera son nodos de un AVL; el juego los consulta según la posición del carro.",
      challenge: "Mantener el árbol balanceado con inserciones y eliminaciones mientras la partida avanza en tiempo real.",
      outcome: "Proyecto académico finalizado, con código público en GitHub.",
    },
    contribution: "Líder del proyecto: llevé la planificación creativa y técnica de todos los procesos, de inicio a fin.",
    solution: [
      "Árbol AVL propio con rotaciones, inserción, búsqueda y eliminación de obstáculos.",
      "Recorridos pre-orden, in-orden y post-orden visibles desde el menú del juego.",
      "Dibujo del árbol con Matplotlib para revisar su estructura y balanceo.",
      "Partida en Pygame con velocidad, energía, progreso, obstáculos esquivados y selección de carro.",
      "Parámetros del juego (pantalla, longitud de la vía, velocidad, skins) cargados desde JSON.",
    ],
    architecture:
      "Separación entre la estructura de datos (AVL y nodos), las entidades del juego, el renderizado y las ventanas de menú; la configuración vive en un archivo JSON.",
    gallery: [
      { src: "/images/projects/avl-game/menu.webp", width: 1024, height: 731, fit: "contain", alt: "Menú principal de AVL Car Game con opciones de juego y configuración del árbol AVL", caption: "Menú principal" },
      { src: "/images/projects/avl-game/partida.webp", width: 1024, height: 731, fit: "contain", alt: "Partida en curso de AVL Car Game con velocidad, energía y progreso", caption: "Partida en curso" },
      { src: "/images/projects/avl-game/game-over.webp", width: 1025, height: 732, fit: "contain", alt: "Pantalla de fin de partida en AVL Car Game", caption: "Fin de partida" },
    ],
    repositoryUrl: "https://github.com/DuranPX/AVL-DataGame",
    pending: [],
  },
];

/** Otros proyectos. `url` solo para repositorios públicos. */
export interface ArchiveEntry {
  title: string;
  description: string;
  stack: string;
  year: string;
  url?: string;
}

export const archive: ArchiveEntry[] = [
  {
    title: "Grafo DataGame",
    description: "Juego en Python que recorre constelaciones modeladas como grafo, con rutas por Dijkstra y DFS (Tkinter y Pygame).",
    stack: "Python · Pygame · Tkinter",
    year: "2025",
    url: "https://github.com/DuranPX/Grafo_DataGame",
  },
  {
    title: "DND Records",
    description: "Aplicación para organizar partidas y personajes de rol: Next.js con una API Express sobre Supabase.",
    stack: "Next.js · Express · Supabase",
    year: "2026",
  },
  {
    title: "LLM Cost Monitor",
    description: "Consulta y organización de costos de uso de modelos de lenguaje, con datos por organización.",
    stack: "React · Supabase",
    year: "2026",
  },
  {
    title: "EPUB File Reader",
    description: "Lector de EPUB local en el navegador, con carga por arrastre y modo claro/oscuro del sistema.",
    stack: "JavaScript · JSZip",
    year: "2026",
    url: "https://github.com/DuranPX/EPUB_File_Reader",
  },
  {
    title: "RAG · RAGAS · NoSQL",
    description: "Frontend para un sistema RAG con evaluación RAGAS sobre una base de datos NoSQL.",
    stack: "Next.js · Recharts",
    year: "2026",
    url: "https://github.com/DuranPX/RAG-RAGAS-LLM-NoSql",
  },
  {
    title: "BDR · RAG educativo",
    description: "Monolito de recuperación de información con embeddings de texto e imagen (CLIP, MiniLM).",
    stack: "Python · Gradio · Supabase",
    year: "2026",
    url: "https://github.com/DuranPX/monolit-BDR-RAG-LLM-edu",
  },
  {
    title: "Restaurant Delivery System",
    description: "API REST con arquitectura por capas para pedidos, repartidores, turnos e incidencias.",
    stack: "Python · Flask",
    year: "2026",
    url: "https://github.com/DuranPX/Proyecto-DesarrolloFront-End2",
  },
  {
    title: "Gmail API",
    description: "Integración académica con la API de Gmail mediante OAuth 2.0 en Google Cloud.",
    stack: "Python · Google Cloud",
    year: "2026",
    url: "https://github.com/DuranPX/cloud-gmail-api-educational-purposes",
  },
];
