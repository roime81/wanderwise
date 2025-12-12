'use client';

import { useState } from 'react';
import type { z } from 'zod';
import { Sparkles, Loader, AlertTriangle } from 'lucide-react';

import { ItineraryForm, type ItineraryFormValues } from '@/components/plan-trip/ItineraryForm';
import { ItineraryDisplay } from '@/components/plan-trip/ItineraryDisplay';
import { generateItineraryAction } from './actions';
import type { GeneratePersonalizedItineraryOutput } from '@/ai/flows/generate-personalized-itinerary';
import { Card, CardContent } from '@/components/ui/card';

export default function PlanTripPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratePersonalizedItineraryOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePlanTrip = async (data: ItineraryFormValues) => {
    setLoading(true);
    setError(null);
    setResult(null);

    const result = await generateItineraryAction(data);
    
    if (result.error) {
      setError(result.error);
    } else if (result.data) {
      setResult(result.data);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="text-center mb-12">
        <Sparkles className="mx-auto h-12 w-12 text-primary" />
        <h1 className="text-4xl font-bold font-headline mt-4">AI-Powered Trip Planner</h1>
        <p className="mt-2 text-lg text-muted-foreground">Fill in your preferences and let our AI create a unique itinerary for you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <ItineraryForm onSubmit={handlePlanTrip} loading={loading} />
        
        <div className="md:mt-0">
          {loading && (
            <Card className="flex flex-col items-center justify-center p-8 h-full min-h-[300px]">
              <Loader className="h-10 w-10 animate-spin text-primary" />
              <p className="mt-4 text-muted-foreground">Generating your personalized trip...</p>
            </Card>
          )}
          {error && (
            <Card className="flex flex-col items-center justify-center p-8 h-full min-h-[300px] border-destructive bg-destructive/10">
              <AlertTriangle className="h-10 w-10 text-destructive" />
              <p className="mt-4 font-semibold text-destructive">An error occurred</p>
              <p className="mt-2 text-center text-destructive/80">{error}</p>
            </Card>
          )}
          {result && (
            <ItineraryDisplay itinerary={result.itinerary} estimatedCost={result.estimatedCost} />
          )}
          {!loading && !error && !result && (
             <Card className="flex flex-col items-center justify-center p-8 h-full min-h-[300px]">
              <Sparkles className="h-10 w-10 text-muted-foreground/50" />
              <p className="mt-4 text-muted-foreground text-center">Your generated itinerary will appear here.</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
