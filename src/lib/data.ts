import type { ComponentType } from "react";
import {
  Code,
  Database,
  Smartphone,
  Palette,
  Network,
  Github,
  Users,
  TestTube,
  Send,
  Paintbrush,
  Book,
  FileJson2,
} from "lucide-react";
import { ReactIcon } from "@/components/icons";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const navLinks = [
  { href: "#about", label: "Sobre Mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#certificates", label: "Certificados" }, // 👈 agregado
  { href: "#contact", label: "Contacto" },
];

export const personalInfo = {
  name: "Agustín Pujol",
  email: "agustinpujol12@gmail.com",
  github: "https://github.com/Agustinpujol12",
  cv: "/path-to-cv.pdf", // Placeholder
  aboutMe:
    "Me formé en la Universidad Siglo 21, donde adquirí una visión integral del desarrollo de software orientada a la calidad. He trabajado en proyectos que incluyen aplicaciones móviles y sitios web, aplicando buenas prácticas y priorizando siempre la experiencia de usuario.\n\nMi experiencia previa en gestión y liderazgo fortaleció competencias en organización, comunicación y resolución de problemas, que hoy aplico al ámbito tecnológico para coordinar tareas, colaborar en equipo y orientar proyectos hacia resultados concretos.",
};

const notagusImage = PlaceHolderImages.find((p) => p.id === "notagus_app_image");
const webdevImage = PlaceHolderImages.find((p) => p.id === "web_dev_image");

export const projectsData = [
  {
    title: "Notagus: Aplicación de Notas y Productividad (Android Nativo)",
    description:
      "Desarrollo completo de una aplicación Android nativa para gestión de notas. Implementación de Material Design 3 para una UX/UI moderna, Room Database (SQLite) para persistencia local eficiente, y gestión avanzada de tareas mediante Workers y Notificaciones. Control de versiones con Git/GitHub.",
    tags: ["Java", "Android Studio", "Room Database", "Material Design", "Gradle", "UX"],
    githubUrl: "https://github.com/Agustinpujol12/Notagus",
    demoUrl: "https://github.com/Agustinpujol12/Notagus",
    image: notagusImage?.imageUrl,
    imageHint: notagusImage?.imageHint,
  },
  {
    title: "Desarrollo Web con React JS y APIs REST",
    description:
      "Implementación de soluciones front-end utilizando React JS para crear interfaces dinámicas. Consumo y gestión de datos con APIs REST y bases de datos MySQL, demostrando mi manejo del stack Frontend y Backend.",
    tags: ["React JS", "JavaScript", "HTML5", "CSS3", "REST API", "MySQL", "Postman"],
    githubUrl: "https://github.com/Agustinpujol12",
    demoUrl: "https://github.com/Agustinpujol12",
    image: webdevImage?.imageUrl,
    imageHint: webdevImage?.imageHint,
  },
  {
    title: "Mapa Interactivo de Argentina",
    description:
      "Sitio web informativo con mapa de Argentina y secciones de lugares turísticos (Mar del Plata, Tigre Delta, etc.). Diseño limpio, tipografía clara y énfasis en accesibilidad y responsive.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive", "UI/UX"],
    githubUrl: "https://github.com/Agustinpujol12/mapaargentina",
    demoUrl: "https://mapa-beige.vercel.app",
    image: "/mapa_argentina3.png", // en /public
    imageHint: "Captura del sitio Mapa de Argentina con secciones turísticas",
  },
];

export type Skill = {
  name: string;
  icon: ComponentType<{ className?: string }>;
};

export const skillsData: { [key: string]: Skill[] } = {
  Desarrollo: [
    { name: "Java", icon: Code },
    { name: "SQL", icon: Database },
    { name: "JavaScript", icon: FileJson2 },
    { name: "HTML5", icon: Code },
    { name: "CSS3", icon: Paintbrush },
  ],
  "Móvil/Android": [
    { name: "Android Studio", icon: Smartphone },
    { name: "Room Database", icon: Database },
    { name: "Material Design", icon: Palette },
  ],
  Web: [{ name: "React JS", icon: ReactIcon }],
  Backend: [
    { name: "REST API", icon: Network },
    { name: "MySQL", icon: Database },
  ],
  "Control/Metodología": [
    { name: "Git/GitHub", icon: Github },
    { name: "Jira/Confluence", icon: Book },
    { name: "Scrum", icon: Users },
    { name: "JUnit", icon: TestTube },
    { name: "Postman", icon: Send },
  ],
}; // 👈 cerrado correctamente

// 👇 Rutas de certificados (asegurate de que existan en /public/certificates)
export const certificateImages: string[] = [
  "/certificates/certificado01.png",
  "/certificates/certificado02.png",
  "/certificates/certificado03.png",
  "/certificates/certificado04.jpg",
  "/certificates/certificado05.jpg",
  "/certificates/certificado06.jpg",
];
