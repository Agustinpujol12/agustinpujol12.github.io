"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateCvAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Copy, Check } from 'lucide-react';
import { personalInfo, projectsData, skillsData } from '@/lib/data';

const allSkills = Object.values(skillsData).flat().map(skill => skill.name);

const formSchema = z.object({
  aboutMe: z.string().min(1, 'La sección "Sobre Mí" no puede estar vacía.'),
  projects: z.string().min(1, 'La descripción de proyectos no puede estar vacía.'),
  skills: z.string().min(1, 'La lista de habilidades no puede estar vacía.'),
});

type FormValues = z.infer<typeof formSchema>;

const initialProjectsText = projectsData.map(p => 
  `- Título: ${p.title}\n  Descripción: ${p.description}\n  Tecnologías: ${p.tags.join(', ')}`
).join('\n\n');

export function CvGeneratorSection() {
  const [generatedCv, setGeneratedCv] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      aboutMe: personalInfo.aboutMe,
      projects: initialProjectsText,
      skills: allSkills.join(', '),
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setGeneratedCv('');
    try {
      const projects = values.projects.split('\n\n').map(projStr => {
        const titleMatch = projStr.match(/- Título: (.*)/);
        const descMatch = projStr.match(/Descripción: (.*)/s);
        const techMatch = projStr.match(/Tecnologías: (.*)/);
        return {
          title: titleMatch ? titleMatch[1] : 'Proyecto sin título',
          description: descMatch ? descMatch[1] : 'Sin descripción',
          technologies: techMatch ? techMatch[1].split(', ') : [],
        };
      });

      const skills = values.skills.split(',').map(s => s.trim());

      const result = await generateCvAction({
        name: personalInfo.name,
        aboutMe: values.aboutMe,
        projects,
        skills,
      });

      if (result.error) {
        throw new Error(result.error);
      }

      setGeneratedCv(result.cv || '');
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error al generar CV',
        description: error instanceof Error ? error.message : 'Ocurrió un error inesperado.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCv);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="cv-generator" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Generador de CV con IA
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Utiliza la información de mi portfolio para generar un CV en formato Markdown. Puedes editar los campos para ajustar el resultado.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Datos para el CV</CardTitle>
              <CardDescription>Edita la información para personalizar tu CV.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="aboutMe"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sobre Mí</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={5} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="projects"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Proyectos</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={8} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Habilidades (separadas por comas)</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={3} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    {isLoading ? 'Generando...' : 'Generar CV'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>CV Generado</CardTitle>
              <CardDescription>El resultado aparecerá aquí en formato Markdown.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : generatedCv ? (
                <div className="relative h-full">
                  <pre className="h-full w-full overflow-auto rounded-md bg-muted p-4 text-sm whitespace-pre-wrap">
                    <code>{generatedCv}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={handleCopy}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full rounded-md border border-dashed text-muted-foreground">
                  Esperando generación...
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
