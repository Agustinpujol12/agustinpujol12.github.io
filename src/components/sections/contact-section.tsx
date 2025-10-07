"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";
import { personalInfo } from "@/lib/data";

export function ContactSection() {
  // Texto del mail
  const subject = "Contacto profesional";
  const body = `Hola Agustín,

Te escribo porque me gustaría ponerme en contacto contigo para hablar sobre oportunidades o proyectos relacionados con desarrollo de software.

[Escribe tu mensaje aquí]`;

  // Gmail web (abre el compose directamente)
  const gmailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
    personalInfo.email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
        {/* 🧠 Encabezado */}
        <div className="space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl/tight">
            ¿Querés ponerte en contacto conmigo?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
No dudes en escribirme. Estoy abierto a nuevas oportunidades y colaboraciones.
          </p>
        </div>

        {/* 📬 Formulario de contacto */}
        <div className="mx-auto w-full max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Enviar mensaje</CardTitle>
              <CardDescription>
                Completá el formulario y me pondré en contacto a la brevedad.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Nombre" />
                <Input type="email" placeholder="Correo electrónico" />
              </div>
              <Textarea placeholder="Tu mensaje" rows={5} />
              <Button asChild className="w-full">
                <a href={gmailLink} target="_blank" rel="noopener noreferrer">
                  <Send className="mr-2 h-4 w-4" /> Enviar mensaje
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* 🔗 Botones de contacto directo */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {/* Email */}
          <Button variant="outline" asChild>
            <a href={gmailLink} target="_blank" rel="noopener noreferrer">
              <Mail className="mr-2 h-4 w-4" /> Email
            </a>
          </Button>

          {/* WhatsApp */}
          <Button variant="outline" asChild>
            <a
              href="https://wa.me/5493516646307?text=Hola%20Agust%C3%ADn%2C%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20contigo%20por%20motivos%20profesionales."
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiWhatsapp className="mr-2 h-4 w-4" /> WhatsApp
            </a>
          </Button>

          {/* LinkedIn */}
          <Button variant="outline" asChild>
            <a
              href="https://www.linkedin.com/in/agustinpujol/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
