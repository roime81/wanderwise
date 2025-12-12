import type { Destination } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl duration-300 ease-in-out">
      <Link href={`/destinations/${destination.slug}`} aria-label={`View details for ${destination.name}`}>
        <div className="aspect-video relative">
          <Image
            src={destination.image.imageUrl}
            alt={destination.image.description}
            data-ai-hint={destination.image.imageHint}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{destination.name}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {destination.country}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{destination.description}</p>
        <Button asChild className="w-full" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
          <Link href={`/destinations/${destination.slug}`}>
            Explore
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
