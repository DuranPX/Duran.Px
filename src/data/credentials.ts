/**
 * Formación, certificados y cursos.
 * `url`: enlace público de verificación (Credly, Platzi…). Si queda vacío, no se muestra ningún enlace.
 */
export interface Credential {
  title: string;
  issuer: string;
  date: string;
  kind: "Formación" | "Certificado" | "Curso" | "Insignia";
  note?: string;
  url: string;
}

export const credentials: Credential[] = [
  {
    title: "Ingeniería en sistemas y computación (en curso)",
    issuer: "Universidad de Caldas",
    date: "Actualidad",
    kind: "Formación",
    note: "Manizales, Colombia",
    url: "https://ingenierias.ucaldas.edu.co/oferta-academica/ingenieria-de-sistemas-y-computacion/",
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "Mayo 2026",
    kind: "Certificado",
    note: "Incluye 8 insignias de habilidad.",
    url: "https://www.credly.com/badges/13425c0b-639c-495c-ac6b-bff794dd86e5", 
  },
  {
    title: "Ruta de aprendizaje IA sin límites",
    issuer: "Alcaldía de Medellín",
    date: "27/07/26", 
    kind: "Certificado",
    note: "Certificado de participación.",
    url: "",
  },
  // { title: "Nombre del curso", issuer: "Plataforma", date: "2026", kind: "Curso", url: "https://..." },
];

/**
 * Experiencia laboral. Solo se renderizan las entradas con `verified: true`.
 * Completa y marca como verificadas únicamente las que puedas sustentar.
 */
export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
  verified: boolean;
}

export const experience: Experience[] = [
  // Ejemplo (no se publica hasta que verified sea true y el texto sea real):
  // { role: "Desarrollador backend", organization: "Organización", period: "2025 — 2026",
  //   description: "Qué hiciste, con qué y para qué, sin cifras que no puedas demostrar.", verified: false },
];
