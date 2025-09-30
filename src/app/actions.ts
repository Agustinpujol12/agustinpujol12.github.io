'use server';

import { generateCv as generateCvFlow, type GenerateCvInput } from '@/ai/flows/generate-cv-from-projects';
import { z } from 'zod';

const GenerateCvInputSchema = z.object({
  name: z.string(),
  aboutMe: z.string(),
  projects: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      technologies: z.array(z.string()),
    })
  ),
  skills: z.array(z.string()),
});

export async function generateCvAction(input: GenerateCvInput) {
  const parsedInput = GenerateCvInputSchema.safeParse(input);

  if (!parsedInput.success) {
    console.error('Invalid input:', parsedInput.error.flatten().fieldErrors);
    return { error: 'Invalid input provided to generate CV action.' };
  }

  try {
    const result = await generateCvFlow(parsedInput.data);
    return { cv: result.cv };
  } catch (e) {
    console.error('Error in Genkit flow:', e);
    return { error: 'Failed to generate CV due to a server error. Please try again later.' };
  }
}
