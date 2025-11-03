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
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#certificates", label: "Certificados" },
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
    title: "Notagus: gestor de tareas, notas y calendario (Android nativo)",
    description:
      "Aplicación Android nativa desarrollada en Java para organizar tareas, notas, listas y eventos. Presenta un diseño moderno basado en Material Design 3, persistencia local con Room (SQLite), notificaciones programadas, widget de tareas y temas personalizables. Proyecto desarrollado y versionado íntegramente en Android Studio con Git/GitHub.",
    tags: ["Java", "Android Studio", "Room Database", "SQLite", "RecyclerView", "Material Design 3"],
    githubUrl: "https://github.com/Agustinpujol12/Notagus",
    demoUrl: "https://github.com/Agustinpujol12/Notagus",
    caseStudyUrl: "https://drive.google.com/drive/folders/1gNZuVLHOOckx7B4QWZ50uQbiYMzDGa-i",
    image: notagusImage?.imageUrl,
    imageHint: notagusImage?.imageHint,
    primaryAction: "drive", // 👈 principal: Ver Drive
  },
{
  title: "Portafolio Web Personal",
  description:
    "Sitio web profesional desarrollado con Next.js 15, TypeScript y TailwindCSS para presentar mis proyectos, habilidades y trayectoria como desarrollador. Incluye secciones dinámicas, animaciones, slider de proyectos y despliegue automatizado en GitHub Pages.",
  tags: [
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "shadcn/ui",
    "React Icons",
  ],
  githubUrl: "https://github.com/Agustinpujol12/agustinpujol12.github.io",
  demoUrl: "https://agustinpujol12.github.io/", // 👈 Ver Página
  image: "/ap_portfolio.png",
  imageHint: webdevImage?.imageHint,
  primaryAction: "web",
},
  {
    title: "Mapa Interactivo de Argentina",
    description:
      "Proyecto web educativo e interactivo que permite explorar las provincias de Argentina haciendo clic en el mapa. Cada provincia muestra una imagen representativa y una breve descripción informativa. Desarrollado con HTML, CSS y JavaScript nativo como práctica de desarrollo web inicial, con diseño inspirado en la bandera argentina y enfoque didáctico.",
    tags: ["HTML5", "CSS3", "JavaScript", "Interactividad", "Educativo"],
    githubUrl: "https://github.com/Agustinpujol12/mapaargentina",
    demoUrl: "https://mapa-beige.vercel.app/",
    image: "/mapa_argentina5.png",
    imageHint: "Vista del sitio web interactivo de Argentina mostrando provincias y contenido educativo",
    primaryAction: "web",
  },
  {
    title: "Corplast S.R.L.: sitio web institucional",
    description:
      "Desarrollo completo del sitio web institucional para la empresa Corplast S.R.L., dedicada a la fabricación y venta de suelas y bases para calzado en Argentina. El sitio presenta un diseño corporativo moderno, secciones informativas y catálogo de productos, con estructura responsive y uso de Bootstrap 5.",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "Responsive", "UI/UX"],
    githubUrl: "https://github.com/Agustinpujol12/Corplast",
    demoUrl: "https://corplast.vercel.app/",
    image: "/corplast2.png",
    imageHint: "Captura del sitio institucional Corplast S.R.L. con catálogo y diseño corporativo",
    primaryAction: "web",
  },
  {
    title: "Testing QA: MiAutoRacing",
    description:
      "Diseño y ejecución de casos de prueba sobre la aplicación móvil Racing Engine Calculator (Android). Se realizaron pruebas funcionales, detección y documentación de bugs en Jira, con registro de resultados y sugerencias de mejora en Confluence. El proyecto incluyó la elaboración de un portfolio de testing con análisis detallado de incidencias, priorización y recomendaciones.",
    tags: ["Testing QA", "Jira", "Confluence", "Android", "Documentación"],
    githubUrl: "https://agustinpujol12.atlassian.net/jira/software/projects/REC/boards/4",
    caseStudyUrl: "https://drive.google.com/drive/folders/1sBfO9_7kCJTFYNrKvAeR8vFe_HJwTeaE", // 👈 Ver Drive
    image: "/miautoracing.png",
    imageHint: "Vista del proyecto de testing en Jira con backlog de tareas y reportes de bugs",
    primaryAction: "drive",
  },
  {
    title: "Playbook Táctico CS2",
    description:
      "Plataforma web privada para la gestión y visualización de estrategias para equipos de CS2. Incluye un sistema de autenticación (login) para miembros sus miembros. Utiliza PostgreSql como base de datos para persistir las jugadas, videos y tácticas, facilitando el análisis y aprendizaje.",
    tags: [
        "Next.js", 
        "TypeScript", 
        "TailwindCSS", 
        "NextAuth",
        "PostgreSql"
    ],
    githubUrl: "https://github.com/Agustinpujol12/playbook",
    demoUrl: "https://playbook-omega-one.vercel.app/", // Opcional: si tienes un deploy
    image: "/playbook.png", // Ej: "/playbook_cover.png"
    imageHint: "Vista previa de la aplicación de playbook táctico de CS2",
    primaryAction: "web", // O "github" si no hay demo
  },
];

export type Skill = {
  name: string;
  icon: ComponentType<{ className?: string }>;
};

export const skillsData: { [key: string]: Skill[] } = {
  "Lenguajes y Bases": [
    { name: "Java", icon: Code },
    { name: "TypeScript", icon: FileJson2 },
    { name: "JavaScript", icon: FileJson2 },
    { name: "HTML5", icon: Code },
    { name: "CSS3", icon: Paintbrush },
    { name: "SQL / SQLite", icon: Database },
  ],
  "Desarrollo Web": [
    { name: "React.js", icon: ReactIcon },
    { name: "Next.js", icon: Network },
    { name: "TailwindCSS", icon: Palette },
    { name: "Framer Motion", icon: Palette },
  ],
  "Móvil / Android": [
    { name: "Android Studio", icon: Smartphone },
    { name: "Room Database", icon: Database },
    { name: "Material Design 3", icon: Palette },
    { name: "RecyclerView", icon: Smartphone },
  ],
  Backend: [
    { name: "REST API", icon: Network },
    { name: "MySQL", icon: Database },
  ],
  "Control y Metodología": [
    { name: "Git / GitHub", icon: Github },
    { name: "Jira / Confluence", icon: Book },
    { name: "Scrum", icon: Users },
    { name: "JUnit", icon: TestTube },
    { name: "Postman", icon: Send },
  ],
  "Testing y QA": [
    { name: "Testing Manual", icon: TestTube },
    { name: "Casos de Prueba", icon: Book },
    { name: "Documentación QA", icon: Book },
  ],
};

// 👇 Rutas de certificados (asegurate de que existan en /public/certificates)
export const certificateImages: string[] = [
  "/certificates/certificado01.png",
  "/certificates/certificado02.png",
  "/certificates/certificado03.png",
  "/certificates/certificado04.jpg",
  "/certificates/certificado05.jpg",
  "/certificates/certificado06.jpg",
  "/certificates/certificado07.jpg",
  "/certificates/certificado08.png"
];
