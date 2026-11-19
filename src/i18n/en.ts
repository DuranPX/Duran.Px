/**
 * Contenido en inglés. Refleja src/data/* (español). Si cambias un texto en
 * español, actualiza aquí su versión. Lo que falte aquí se muestra en español.
 */

export const profileEn = {
  headline: "Software and web application development.",
  tagline: "Software with a clear structure, from the database to the interface.",
  intro:
    "Engineering student at Universidad de Caldas. I build web applications that bring together interfaces, business logic, APIs and databases, with a particular interest in backend, security and access control.",
  portraitAlt: "Portrait of Juan Durán",
};

export const contextFactsEn = [
  { label: "Education", value: "Engineering student" },
  { label: "University", value: "Universidad de Caldas" },
  { label: "Location", value: "Manizales, Colombia" },
  { label: "Focus", value: "Backend, APIs and web applications" },
];

export const aboutEn = {
  paragraphs: [
    "I like building software with a clear structure that solves concrete problems and can grow without becoming needlessly complex. My work has focused on backend development, APIs, service integration and full-stack applications.",
    "I enjoy understanding how the parts of a system connect: the data, the business rules, access control and the experience the user finally gets. Before writing code, I try to understand the problem and the context it will be used in.",
    "I keep strengthening my foundations in architecture, security, databases and networking through academic and personal projects.",
  ],
  personal:
    "Away from code: swimming, writing and worldbuilding, video games and tabletop role-playing. I'm drawn to tools that help organize ideas and stories.",
  learning: [
    "Authentication and authorization: JWT, roles and permissions (RBAC, PoLP)",
    "SOLID principles and DDD concepts",
    "Data modeling and SQL queries",
    "Networking: VLAN, ACL, NAT and IPv6",
    "RAG and evaluation of language-model systems",
  ],
};

export const approachEn = [
  { title: "Understand", text: "I define the problem, who faces it and its constraints before choosing tools." },
  { title: "Structure", text: "I separate responsibilities: data, business rules, access and presentation." },
  { title: "Build", text: "I work in small pieces and connect frontend, APIs and persistence." },
  { title: "Verify", text: "I test the main flows, fix what breaks and document what's needed to pick it up again." },
];

export const statusEn: Record<string, string> = {
  Finalizado: "Completed",
  Publicado: "Published",
  "En desarrollo": "In progress",
  Prototipo: "Prototype",
  Académico: "Academic",
  Propuesta: "Proposal",
};

type ProjectEn = {
  category: string;
  summary: string;
  context: string;
  brief: { problem: string; solution: string; challenge: string; outcome: string };
  contribution?: string;
  solution: string[];
  architecture?: string;
  learnings?: string;
  limitations?: string;
  captions: string[];
};

export const projectsEn: Record<string, ProjectEn> = {
  "aula-up": {
    category: "Professional project · Fundación ASISCO UP!",
    summary:
      "Interactive, personalized classroom for participants of Fundación ASISCO UP!, with workshops assigned to each person's needs.",
    context:
      "Built and delivered to Fundación ASISCO UP!. Its participants need workshops adapted to their own process; the scope centers on the participant's experience, not on institutional administration.",
    brief: {
      problem: "The foundation's participants need activities adapted to their own process, not the same content for everyone.",
      solution: "An interactive classroom with activities assigned to each participant: selection, matching and ordering.",
      challenge: "Making activities with images, audio and video accessible, with accessibility tests in Playwright.",
      outcome: "Completed and delivered to Fundación ASISCO UP!.",
    },
    contribution: "Project lead: I handled the creative and technical planning of every process, from start to finish. I also worked on the backend and data modeling.",
    solution: [
      "Selection, matching and ordering activities with images, audio and video.",
      "Express API in TypeScript, with Zod validation and Swagger documentation.",
      "PostgreSQL persistence through Prisma.",
    ],
    architecture:
      "React 19 and Vite frontend; Express 5 backend with Prisma on PostgreSQL. The frontend includes accessibility tests with Playwright.",
    limitations:
      "The admin panel is limited to analyzing results and publishing new resources; managing teachers, groups and attendance was out of scope.",
    captions: ["Readings", "Puzzle activity", "Accessibility options", "Results and resources panel"],
  },
  sbuses: {
    category: "Academic project · Transport management",
    summary:
      "Web system to manage buses, routes, drivers, incidents and schedules, with role-based access control on both frontend and backend.",
    context:
      "Academic team project for managing a bus system in Manizales. Operations —routes, buses, drivers and incidents— require each user to see and change only what they are allowed to.",
    brief: {
      problem: "Routes, buses, drivers and incidents handled by users with different permissions.",
      solution: "Microservices: security in Spring Boot and business logic in NestJS, with a React frontend.",
      challenge: "Applying role-based access control consistently on the backend and in the interface.",
      outcome: "Completed academic project, no longer supported.",
    },
    contribution: "Project lead: I handled the creative and technical planning of every process, from start to finish. My technical work focused on the backend, security and access control.",
    solution: [
      "Security service with Spring Boot 3 and Java 17: authentication, roles and JWT issuing.",
      "Business and notification services in Node.js with NestJS.",
      "React, TypeScript and Vite frontend with per-module permissions read from the JWT.",
      "Route guards and Axios interceptors for sessions, two-factor authentication and password reset.",
    ],
    architecture:
      "Microservices monorepo: ms_security (Spring Boot + MongoDB), ms-business and ms-notifications (NestJS). The frontend consumes both and also enforces RBAC in the interface.",
    learnings:
      "Moving security into its own service forces you to define precisely what travels in the token and what each service validates.",
    limitations:
      "Completed academic project with no support: it receives no maintenance or updates. OAuth 2.0 with external providers (Google, GitHub, Azure) was left out of the final version.",
    captions: ["Home page", "Sign-in page"],
  },
  "mythic-warships": {
    category: "Web game · Frontend and API",
    summary:
      "Browser-based battleship game with fleets of different ship types and a player ranking by country served from its own API.",
    context:
      "Front-End Development course project. The challenge was to build a complete game without frameworks, keeping the client code well organized and connected to a backend.",
    brief: {
      problem: "Build a complete game without frameworks and connect it to its own backend.",
      solution: "A JavaScript client organized into models, controllers and views, plus a Flask API.",
      challenge: "Modeling each ship type and the board as classes, and recording scores by nickname and country.",
      outcome: "Completed academic project, with public code on GitHub.",
    },
    contribution: "Project lead: I handled the creative and technical planning of every process, from start to finish.",
    solution: [
      "Plain JavaScript frontend organized into models, controllers and views.",
      "Models for each ship type (carrier, battleship, destroyer, submarine), board and player.",
      "Flask API to record scores by nickname, query the ranking and list countries.",
      "Simple persistence in JSON files for scores and countries.",
    ],
    architecture:
      "MVC JavaScript client consuming the Flask API (POST /score-recorder, GET /ranking, GET /countries).",
    captions: ["Start screen and country selection", "Player ranking"],
  },
  "avl-car-game": {
    category: "Game · Data structures",
    summary:
      "Python racing game where the road's obstacles are stored and managed in an AVL tree that the player can configure and traverse.",
    context:
      "Data structures project: using an AVL tree as a real part of a game, not just a console exercise, and making its balancing and traversals visible.",
    brief: {
      problem: "Put an AVL tree in a concrete situation where its ordering and balancing have a visible effect.",
      solution: "Road obstacles are nodes of an AVL tree; the game queries them based on the car's position.",
      challenge: "Keeping the tree balanced through insertions and deletions while the game runs in real time.",
      outcome: "Completed academic project, with public code on GitHub.",
    },
    contribution: "Project lead: I handled the creative and technical planning of every process, from start to finish.",
    solution: [
      "Custom AVL tree with rotations, insertion, search and deletion of obstacles.",
      "Pre-order, in-order and post-order traversals shown from the game menu.",
      "Tree drawn with Matplotlib to inspect its structure and balance.",
      "Pygame gameplay with speed, energy, progress, dodged obstacles and car selection.",
      "Game parameters (screen, road length, speed, skins) loaded from JSON.",
    ],
    architecture:
      "Separation between the data structure (AVL and nodes), game entities, rendering and menu windows; configuration lives in a JSON file.",
    captions: ["Main menu", "Game in progress", "Game over"],
  },
};

/** Descripciones de "Otros proyectos", por título. */
export const archiveEn: Record<string, string> = {
  "DND Records": "App to organize tabletop role-playing campaigns and characters: Next.js with an Express API on Supabase.",
  "LLM Cost Monitor": "Querying and organizing usage costs of language models, with data separated by organization.",
  "EPUB File Reader": "Local EPUB reader in the browser, with drag-and-drop loading and system light/dark mode.",
  "RAG · RAGAS · NoSQL": "Frontend for a RAG system with RAGAS evaluation on a NoSQL database.",
  "BDR · RAG educativo": "Information-retrieval monolith with text and image embeddings (CLIP, MiniLM).",
  "Restaurant Delivery System": "Layered REST API for orders, couriers, shifts and incidents.",
  "Gmail API": "Academic integration with the Gmail API using OAuth 2.0 on Google Cloud.",
  "Grafo DataGame": "Python game that travels across constellations modeled as a graph, with Dijkstra and DFS routes (Tkinter and Pygame).",
};

/** Formación, por título. */
export const credentialsEn: Record<string, { title?: string; date?: string; note?: string }> = {
  "Ingeniería en sistemas y computación (en curso)": { title: "Systems and Computer Engineering (in progress)", date: "Present" },
  "Google Cloud Computing Foundations": { date: "May 2026", note: "Includes 8 skill badges." },
  "Ruta de aprendizaje IA sin límites": { title: "“IA sin límites” AI learning path", date: "Jul 27, 2026", note: "Certificate of participation." },
};

export const kindEn: Record<string, string> = {
  Formación: "Education",
  Certificado: "Certificate",
  Curso: "Course",
  Insignia: "Badge",
};

/** Grupos de tecnologías, por título en español. */
export const techEn: Record<string, { title: string; description: string }> = {
  Backend: { title: "Backend", description: "APIs, business rules and services." },
  Frontend: { title: "Frontend", description: "Interfaces and reusable components." },
  "Datos y nube": { title: "Data and cloud", description: "Persistence, managed services and containers." },
  Herramientas: { title: "Tools", description: "Version control, API testing and design." },
};
