"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Texto del mail
  const subject = "Contacto desde tu portfolio";
  const body = `Hola Agustín,

Estoy interesado en tu trabajo y me gustaría hablar sobre un proyecto.

[Escribe tu mensaje aquí]`;

  // Gmail web (compose)
  const gmailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
    personalInfo.email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <footer className="w-full bg-card border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} {personalInfo.name}. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Email (mismo ícono de sobre que en Contact) */}
          <Button variant="ghost" size="icon" asChild>
            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              title="Enviar email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Button>

          {/* LinkedIn */}
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/agustinpujol/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <SiLinkedin className="h-5 w-5" />
            </a>
          </Button>

          {/* WhatsApp */}
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://wa.me/5493516646307?text=Hola%20Agust%C3%ADn%2C%20vi%20tu%20portfolio%20y%20quiero%20hablar%20sobre%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <SiWhatsapp className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
