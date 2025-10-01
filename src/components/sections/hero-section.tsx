import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Agustín Pujol: Desarrollador de Software
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Estudiante de Ingeniería en Software y Desarrollador Freelance. Convierto ideas complejas en código limpio, eficiente y centrado en el usuario (UX).
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button asChild size="lg">
              <a href="#projects">Ver Proyectos Destacados</a>
            </Button>
            <Button variant="secondary" asChild size="lg">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </a>
            </Button>
            {/*
            ⚠️ Cuando migres a Vercel o API externa, podés reactivar:
            <Button variant="secondary" asChild size="lg">
              <a href="#cv-generator">
                <FileDown className="mr-2 h-5 w-5" /> Generar CV
              </a>
            </Button>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
