'use server';

import { generatePersonalizedItinerary } from '@/ai/flows/generate-personalized-itinerary';
import { z } from 'zod';

const formSchema = z.object({
  destination: z.string().min(1, 'Destination is required.'),
  dates: z.string().min(1, 'Dates are required.'),
  budget: z.string().min(1, 'Budget is required.'),
  travelStyle: z.string().min(1, 'Travel style is required.'),
  interests: z.string().min(3, 'Interests are required.'),
});

export async function generateItineraryAction(data: unknown) {
  const validatedFields = formSchema.safeParse(data);

  if (!validatedFields.success) {
    console.error('Validation errors:', validatedFields.error.flatten().fieldErrors);
    return { error: 'Invalid input. Please check all fields.' };
  }

  try {
    const result = await generatePersonalizedItinerary(validatedFields.data);
    return { data: result };
  } catch (error) {
    console.error('AI Flow Error:', error);
    return { error: 'Failed to generate itinerary. The AI service may be temporarily unavailable. Please try again later.' };
  }
}
