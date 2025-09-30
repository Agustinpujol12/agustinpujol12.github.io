'use server';

/**
 * @fileOverview Generates a CV from project descriptions and technologies used.
 *
 * - generateCv - A function that generates a CV from project descriptions.
 * - GenerateCvInput - The input type for the generateCv function.
 * - GenerateCvOutput - The return type for the generateCv function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCvInputSchema = z.object({
  name: z.string().describe('The name of the person.'),
  aboutMe: z.string().describe('A brief description about the person.'),
  projects: z
    .array(
      z.object({
        title: z.string().describe('The title of the project.'),
        description: z.string().describe('A detailed description of the project.'),
        technologies: z.array(z.string()).describe('A list of technologies used in the project.'),
      })
    )
    .describe('A list of projects with titles, descriptions, and technologies.'),
  skills: z.array(z.string()).describe('A list of skills.'),
});
export type GenerateCvInput = z.infer<typeof GenerateCvInputSchema>;

const GenerateCvOutputSchema = z.object({
  cv: z.string().describe('The generated CV in markdown format.'),
});
export type GenerateCvOutput = z.infer<typeof GenerateCvOutputSchema>;

export async function generateCv(input: GenerateCvInput): Promise<GenerateCvOutput> {
  return generateCvFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCvPrompt',
  input: {schema: GenerateCvInputSchema},
  output: {schema: GenerateCvOutputSchema},
  prompt: `You are an expert resume writer. Generate a CV in markdown format based on the following information:

Name: {{{name}}}
About Me: {{{aboutMe}}}

Projects:
{{#each projects}}
  - Title: {{{title}}}
    Description: {{{description}}}
    Technologies: {{#each technologies}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
{{/each}}

Skills:
{{#each skills}}
  - {{{this}}}
{{/each}}

Ensure the CV is well-formatted, highlights the key skills and experience, and is tailored for a software engineering role.
`,
});

const generateCvFlow = ai.defineFlow(
  {
    name: 'generateCvFlow',
    inputSchema: GenerateCvInputSchema,
    outputSchema: GenerateCvOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
