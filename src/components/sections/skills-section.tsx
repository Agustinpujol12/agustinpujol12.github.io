import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillsData, type Skill } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Mi Stack Tecnológico
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Herramientas y tecnologías que uso para construir el futuro.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="font-headline">{category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill: Skill) => (
                  <div key={skill.name} className="flex items-center gap-4">
                    <skill.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
