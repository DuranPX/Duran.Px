/**
 * Tecnologías agrupadas por responsabilidad. `icon` es el id de skillicons.dev
 * (https://github.com/tandpfun/skill-icons#icons-list). Sin niveles ni porcentajes.
 */
export interface Technology {
  name: string;
  icon?: string;
}

export interface TechnologyGroup {
  title: string;
  description: string;
  items: Technology[];
}

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Backend",
    description: "APIs, reglas de negocio y servicios.",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "spring" },
      { name: "Python", icon: "python" },
      { name: "Flask", icon: "flask" },
    ],
  },
  {
    title: "Frontend",
    description: "Interfaces y componentes reutilizables.",
    items: [
      { name: "React", icon: "react" },
      { name: "Angular", icon: "angular" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "ts" },
      { name: "JavaScript", icon: "js" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Datos y nube",
    description: "Persistencia, servicios gestionados y contenedores.",
    items: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "Supabase", icon: "supabase" },
      { name: "Google Cloud", icon: "gcp" },
      { name: "Docker", icon: "docker" },
    ],
  },
  {
    title: "Herramientas",
    description: "Control de versiones, pruebas de API y diseño.",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "VS Code", icon: "vscode" },
      { name: "Figma", icon: "figma" },
    ],
  },
];

export const iconUrl = (id: string, theme: "dark" | "light") =>
  `https://skillicons.dev/icons?i=${id}&theme=${theme}`;
