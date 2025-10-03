"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { projectsData } from "@/lib/data";

// 🚀 Swiper imports
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
            Portfolio: Desarrollos que Resuelven Problemas Reales
          </h2>
        </div>

        {/* 🔥 Slider con Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}          // 👈 hace el carrusel circular
          spaceBetween={24}
          slidesPerView={1}
          autoHeight={false}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-12"
        >
          {projectsData.map((project, index) => (
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
                  {/* 🔹 Tags ahora arriba del botón */}
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full md:w-auto">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      {project.title.includes("Notagus")
                        ? "Ver Repositorio"
                        : project.title.includes("Dashboard")
                          ? "Ver Demo"
                          : "Ver Más Proyectos"}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
