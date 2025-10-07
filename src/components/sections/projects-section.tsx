"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { SiGoogledrive } from "react-icons/si";
import { projectsData } from "@/lib/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Mis proyectos de desarrollo
          </h2>
        </div>

        <div className="relative">
          {/* Flecha izquierda */}
          <button
            aria-label="Anterior"
            className="projects-prev absolute top-1/2 -translate-y-1/2 -left-6 md:-left-10 z-20 group focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-10 w-10 md:h-12 md:w-12 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Flecha derecha */}
          <button
            aria-label="Siguiente"
            className="projects-next absolute top-1/2 -translate-y-1/2 -right-6 md:-right-10 z-20 group focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-10 w-10 md:h-12 md:w-12 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* 🔥 Slider con Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: ".projects-prev", nextEl: ".projects-next" }}
            loop
            spaceBetween={24}
            slidesPerView={1}
            autoHeight={false}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            className="pb-12"
          >
            {projectsData.map((project, index) => {
              const primary = project.primaryAction as "web" | "drive" | undefined;
              const showRepo = Boolean(project.githubUrl);
              const showWeb = primary === "web" && Boolean(project.demoUrl);
              const showDrive = primary === "drive" && Boolean(project.caseStudyUrl);

              return (
                <SwiperSlide key={index} className="flex">
                  <Card className="flex flex-col h-full w-full">
                    {project.image && (
                      <div className="relative h-60 w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="rounded-t-lg object-cover"
                          data-ai-hint={project.imageHint}
                        />
                      </div>
                    )}

                    <CardHeader>
                      <CardTitle className="font-headline">{project.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="flex-grow space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Botonera centrada */}
                      <div className="flex gap-3 w-full justify-center flex-wrap">
                        {showRepo && (
                          <Button asChild className="w-full sm:w-auto">
                            <a href={project.githubUrl!} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Ver Repositorio
                            </a>
                          </Button>
                        )}

                        {showWeb && (
                          <Button asChild variant="secondary" className="w-full sm:w-auto">
                            <a href={project.demoUrl!} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Ver Página
                            </a>
                          </Button>
                        )}

                        {showDrive && (
                          <Button asChild variant="secondary" className="w-full sm:w-auto">
                            <a href={project.caseStudyUrl!} target="_blank" rel="noopener noreferrer">
                              <SiGoogledrive className="mr-2 h-5 w-5" />
                              Ver Drive
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
