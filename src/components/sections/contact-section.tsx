import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function ContactSection() {
  const mailtoLink = `mailto:${personalInfo.email}?subject=Contacto desde tu portfolio&body=Hola Agustín,%0D%0A%0D%0AEstoy interesado en tu trabajo y me gustaría hablar sobre un proyecto.%0D%0A%0D%0A[Escribe tu mensaje aquí]`;
  
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
            ¿Listo para Empezar tu Proyecto? Hablemos.
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Como Desarrollador Freelance, estoy disponible para nuevos desafíos. Contáctame y diseñemos una solución de valor.
          </p>
        </div>
        <div className="mx-auto w-full max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Enviar Mensaje</CardTitle>
              <CardDescription>Completa el formulario y me pondré en contacto contigo.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Nombre" />
                <Input type="email" placeholder="Email" />
              </div>
              <Textarea placeholder="Tu mensaje" rows={5} />
               <Button asChild className="w-full">
                  <a href={mailtoLink}>
                    <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
                  </a>
               </Button>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" asChild>
                <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="mr-2 h-4 w-4" /> Email
                </a>
            </Button>
            <Button variant="outline" asChild>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" /> WhatsApp
                </a>
            </Button>
            <Button variant="outline" asChild>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
