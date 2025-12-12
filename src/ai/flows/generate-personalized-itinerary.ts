'use server';

/**
 * @fileOverview Generates a personalized trip itinerary based on user preferences.
 *
 * - generatePersonalizedItinerary - A function that generates a personalized trip itinerary.
 * - GeneratePersonalizedItineraryInput - The input type for the generatePersonalizedItinerary function.
 * - GeneratePersonalizedItineraryOutput - The return type for the generatePersonalizedItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedItineraryInputSchema = z.object({
  interests: z
    .string()
    .describe('The user interests, comma separated (e.g., history, art, food).'),
  budget: z.string().describe('The user budget (e.g., low, medium, high).'),
  dates: z.string().describe('The travel dates (e.g., 2024-01-01 to 2024-01-07).'),
  destination: z.string().describe('The destination for the trip.'),
  travelStyle: z.string().describe('The user travel style (e.g., adventurous, relaxing, cultural).'),
});

export type GeneratePersonalizedItineraryInput = z.infer<
  typeof GeneratePersonalizedItineraryInputSchema
>;

const GeneratePersonalizedItineraryOutputSchema = z.object({
  itinerary: z.string().describe('The generated trip itinerary.'),
  estimatedCost: z.string().describe('The estimated cost for the trip.'),
});

export type GeneratePersonalizedItineraryOutput = z.infer<
  typeof GeneratePersonalizedItineraryOutputSchema
>;

export async function generatePersonalizedItinerary(
  input: GeneratePersonalizedItineraryInput
): Promise<GeneratePersonalizedItineraryOutput> {
  return generatePersonalizedItineraryFlow(input);
}

const generatePersonalizedItineraryPrompt = ai.definePrompt({
  name: 'generatePersonalizedItineraryPrompt',
  input: {schema: GeneratePersonalizedItineraryInputSchema},
  output: {schema: GeneratePersonalizedItineraryOutputSchema},
  prompt: `You are an AI travel assistant. Generate a personalized trip itinerary based on the user preferences, including daily activity suggestions and estimated costs. 

User Interests: {{{interests}}}
Budget: {{{budget}}}
Travel Dates: {{{dates}}}
Destination: {{{destination}}}
Travel Style: {{{travelStyle}}}

Itinerary:`,
});

const generatePersonalizedItineraryFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedItineraryFlow',
    inputSchema: GeneratePersonalizedItineraryInputSchema,
    outputSchema: GeneratePersonalizedItineraryOutputSchema,
  },
  async input => {
    const {output} = await generatePersonalizedItineraryPrompt(input);
    return output!;
  }
);
