'use server';
/**
 * @fileOverview Summarizes destination information using AI.
 *
 * - summarizeDestinationInformation - A function that summarizes destination information.
 * - SummarizeDestinationInformationInput - The input type for the summarizeDestinationInformation function.
 * - SummarizeDestinationInformationOutput - The return type for the summarizeDestinationInformation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeDestinationInformationInputSchema = z.object({
  destinationName: z.string().describe('The name of the destination to summarize.'),
  availableData: z.string().describe('Available data about the destination including attractions, activities, transport, and accommodation.'),
});
export type SummarizeDestinationInformationInput = z.infer<typeof SummarizeDestinationInformationInputSchema>;

const SummarizeDestinationInformationOutputSchema = z.object({
  summary: z.string().describe('A summary of the destination including key attractions, activities, and logistical information.'),
});
export type SummarizeDestinationInformationOutput = z.infer<typeof SummarizeDestinationInformationOutputSchema>;

export async function summarizeDestinationInformation(input: SummarizeDestinationInformationInput): Promise<SummarizeDestinationInformationOutput> {
  return summarizeDestinationInformationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeDestinationInformationPrompt',
  input: {schema: SummarizeDestinationInformationInputSchema},
  output: {schema: SummarizeDestinationInformationOutputSchema},
  prompt: `Summarize the following information about {{destinationName}}:

  {{availableData}}

  Focus on key attractions, activities, and logistical information (transport, accommodation) to help a user quickly decide if the destination suits their interests.`,
});

const summarizeDestinationInformationFlow = ai.defineFlow(
  {
    name: 'summarizeDestinationInformationFlow',
    inputSchema: SummarizeDestinationInformationInputSchema,
    outputSchema: SummarizeDestinationInformationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
