'use server';
/**
 * @fileOverview A Genkit flow for generating simplified cryptocurrency content.
 *
 * - generateSimplifiedCryptoContent - A function that generates beginner-friendly explanations, analogies, and flashcards for a given crypto topic.
 * - GenerateSimplifiedCryptoContentInput - The input type for the generateSimplifiedCryptoContent function.
 * - GenerateSimplifiedCryptoContentOutput - The return type for the generateSimplifiedCryptoContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSimplifiedCryptoContentInputSchema = z
  .object({
    topic: z.string().describe('The cryptocurrency topic to explain.'),
  })
  .describe('Input for generating simplified cryptocurrency content.');

export type GenerateSimplifiedCryptoContentInput = z.infer<
  typeof GenerateSimplifiedCryptoContentInputSchema
>;

const FlashcardSchema = z
  .object({
    question: z.string().describe('The question for the flashcard.'),
    answer: z.string().describe('The answer to the flashcard question.'),
  })
  .describe('A single flashcard with a question and answer.');

const GenerateSimplifiedCryptoContentOutputSchema = z
  .object({
    explanation:
      z.string().describe(
        'A beginner-friendly explanation of the cryptocurrency topic, simplified with easy-to-understand language.'
      ),
    analogies: z
      .array(z.string())
      .describe('An array of relevant analogies to help understand the topic.'),
    flashcards: z
      .array(FlashcardSchema)
      .describe(
        'An array of interactive flashcards for knowledge validation, each with a question and an answer.'
      ),
  })
  .describe('Output containing simplified explanation, analogies, and flashcards.');

export type GenerateSimplifiedCryptoContentOutput = z.infer<
  typeof GenerateSimplifiedCryptoContentOutputSchema
>;

const prompt = ai.definePrompt({
  name: 'simplifiedCryptoContentPrompt',
  input: {schema: GenerateSimplifiedCryptoContentInputSchema},
  output: {schema: GenerateSimplifiedCryptoContentOutputSchema},
  prompt: `You are an expert educator and content creator specializing in explaining complex cryptocurrency concepts to absolute beginners. Your goal is to simplify the given topic, provide clear analogies, and create interactive flashcards for knowledge validation.

When generating content, use reasoning to decide whether to incorporate general educational content or relevant current events to make the explanation more engaging and up-to-date, without making it overly complex. Focus on clarity and simplicity.

Target Audience: New cryptocurrency learners.

Topic: {{{topic}}}

Please provide:
1.  A beginner-friendly explanation of the topic.
2.  At least two simple, relevant analogies to help understand the concept.
3.  At least three interactive flashcards (question and answer pairs) to test knowledge on the topic.

Ensure the output is formatted as a JSON object matching the following schema.`,
});

const generateSimplifiedCryptoContentFlow = ai.defineFlow(
  {
    name: 'generateSimplifiedCryptoContentFlow',
    inputSchema: GenerateSimplifiedCryptoContentInputSchema,
    outputSchema: GenerateSimplifiedCryptoContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate simplified crypto content.');
    }
    return output;
  }
);

export async function generateSimplifiedCryptoContent(
  input: GenerateSimplifiedCryptoContentInput
): Promise<GenerateSimplifiedCryptoContentOutput> {
  return generateSimplifiedCryptoContentFlow(input);
}
