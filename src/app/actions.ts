// ⚠️ Versión estática para GitHub Pages
// Este archivo NO usa 'use server' porque rompería el build con output: "export".
// La función es un stub: no genera CV, solo devuelve un error controlado.

export type GenerateCvInput = {
  name: string;
  aboutMe: string;
  projects: {
    title: string;
    description: string;
    technologies: string[];
  }[];
  skills: string[];
};

export async function generateCvAction(input: GenerateCvInput) {
  console.warn("generateCvAction fue llamado en versión estática.");
  return {
    error:
      "La generación de CV con IA está deshabilitada en esta versión estática (GitHub Pages).",
  };
}
