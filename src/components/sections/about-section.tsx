import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Globe } from "lucide-react"; // Importo Globe en vez de Users
import { personalInfo } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Columna izquierda */}
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Sobre mí
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed whitespace-pre-line">
              {personalInfo.aboutMe}
            </p>
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col items-start space-y-4">
            <div className="w-full">
              <h3 className="font-headline text-2xl font-bold tracking-tighter mb-4">
                Experiencia complementaria
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1: Gestión */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Gestión y Liderazgo
                    </CardTitle>
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8+ Años</div>
                    <p className="text-xs text-muted-foreground">
                      Coordinación, planificación y resolución de problemas
                    </p>
                  </CardContent>
                </Card>

                {/* Card 2: Idiomas */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Idiomas
                    </CardTitle>
                    <Globe className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Esp / Ing / Por</div>
                    <p className="text-xs text-muted-foreground">
                      Español nativo · Inglés intermedio · Portugués avanzado
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
