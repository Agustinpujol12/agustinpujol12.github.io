import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CertificatesSection } from "@/components/sections/certificates-section"; // 👈 NUEVO
// import { CvGeneratorSection } from "@/components/sections/cv-generator-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection /> {/* 👈 NUEVO: debajo de Habilidades */}
        {/* <CvGeneratorSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
