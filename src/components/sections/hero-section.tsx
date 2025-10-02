"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { SiGoogledrive } from "react-icons/si";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="w-full py-20 md:py-28 lg:py-36 bg-background"
    >
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-8 md:gap-10 lg:gap-12 md:grid-cols-2">
          {/* Columna izquierda: texto */}
          <div className="flex flex-col space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Agustín Pujol: Desarrollador de Software
              </h1>
              <p className="mx-auto md:mx-0 max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Estudiante de Ingeniería en Software y Desarrollador Freelance.
                Convierto ideas complejas en código limpio, eficiente y centrado
                en el usuario (UX).
              </p>
            </div>
<div className="flex flex-col gap-4 min-[400px]:flex-row justify-center md:justify-start">
  {/* Botón al portfolio (Drive) */}
  <Button asChild size="lg">
    <a
      href="https://drive.google.com/drive/folders/1SYJ3sT5cxPR0CBeX3jJWiVBpJdORaJCI" // 👈 tu link real
      target="_blank"
      rel="noopener noreferrer"
    >
      <SiGoogledrive className="mr-2 h-5 w-5" /> Ver Portfolio
    </a>
  </Button>
              <Button variant="secondary" asChild size="lg">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Columna derecha: foto */}
          <div className="flex justify-center md:justify-end md:-ml-8">
            {/* md:-ml-8 → empuja la foto hacia el texto */}
            <div className="relative">
              <Image
                src="/agustin-pujol.png"
                alt="Foto de Agustín Pujol"
                width={800}
                height={800}
                priority
                className="rounded-3xl object-cover max-h-[480px] md:max-h-[520px] lg:max-h-[560px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
