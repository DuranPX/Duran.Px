export const siteConfig = {
  name: "Juan Durán",
  monogram: "JD",
  role: "Engineering Student · Backend-oriented Full-Stack Developer",
  location: "Manizales, Caldas, Colombia",
  email: "juandaduran3030@gmail.com",
  github: "https://github.com/DuranPX",
  linkedin: "https://www.linkedin.com/in/duranpx",
  spotifyEnabled: false,
  description:
    "Estudiante de Ingeniería en la Universidad de Caldas. Me interesa construir software con estructura clara, APIs útiles y una experiencia full-stack bien conectada.",
  biography:
    "Soy estudiante de Ingeniería en la Universidad de Caldas y me interesa construir software que tenga una estructura clara, resuelva problemas concretos y pueda evolucionar sin volverse innecesariamente complejo. Mi trabajo se ha centrado especialmente en el desarrollo backend, las APIs, la integración de servicios y las aplicaciones full-stack. Disfruto entender cómo se conectan las distintas partes de un sistema: desde los datos y las reglas de negocio hasta la experiencia que recibe el usuario. Actualmente continúo fortaleciendo mis conocimientos en arquitectura, seguridad, bases de datos y redes mediante proyectos académicos y personales.",
} as const;

export const focusAreas = [
  "Desarrollo backend",
  "Diseño de APIs",
  "Integración entre servicios",
  "Bases de datos",
  "Aplicaciones full-stack",
] as const;

export const practicalSkills = [
  {
    category: "Lenguajes",
    items: ["Java", "JavaScript / TypeScript", "Python"],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "Spring Boot", "Flask"],
  },
  {
    category: "Frontend",
    items: ["React", "Vite", "Next.js", "HTML", "CSS"],
  },
  {
    category: "Datos y herramientas",
    items: ["MongoDB", "MySQL / SQL", "Supabase", "Docker", "Git", "Postman"],
  },
] as const;

export const developingKnowledge = [
  "APIs REST e integración entre servicios",
  "Modelado de datos y consultas SQL",
  "Autenticación y autorización con JWT, roles y permisos",
  "Principios SOLID y conceptos de arquitectura",
  "Redes: VLAN, ACL, NAT e IPv6",
  "Sockets, seguridad aplicada y manejo de secretos",
] as const;
