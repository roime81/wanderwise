import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DollarSign, Route } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ItineraryDisplayProps {
  itinerary: string;
  estimatedCost: string;
}

export function ItineraryDisplay({ itinerary, estimatedCost }: ItineraryDisplayProps) {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
          <Route className="h-6 w-6" />
          Your Personalized Itinerary
        </CardTitle>
        <CardDescription>Here is the travel plan our AI has crafted for you.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary">
          <DollarSign className="h-6 w-6 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Estimated Cost</p>
            <p className="font-bold text-lg">{estimatedCost}</p>
          </div>
        </div>
        <div className="prose prose-sm md:prose-base max-w-none dark:prose-invert prose-headings:font-headline">
          {itinerary.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h3 key={index} className="font-bold mt-4">{paragraph.replaceAll('**', '')}</h3>
            }
            if (paragraph.trim() === '') {
              return null;
            }
            return <p key={index}>{paragraph}</p>
          })}
        </div>
      </CardContent>
    </Card>
  );
}
