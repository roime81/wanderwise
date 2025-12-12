import { getDestinationBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import { DestinationHeader } from '@/components/destinations/DestinationHeader';
import { InteractiveMap } from '@/components/destinations/InteractiveMap';
import { ReviewsSection } from '@/components/destinations/ReviewsSection';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Bed, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function DestinationPage({ params }: PageProps) {
  const destination = getDestinationBySlug(params.slug);

  if (!destination) {
    notFound();
  }

  return (
    <div className="bg-background">
      <DestinationHeader
        name={destination.name}
        country={destination.country}
        image={destination.image}
      />
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-headline text-2xl font-bold mb-4">About {destination.name}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {destination.longDescription}
                </p>
              </CardContent>
            </Card>
            
            <ReviewsSection reviews={destination.reviews} />
          </div>

          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-headline text-xl font-semibold mb-4">Plan Your Trip</h3>
                <div className="space-y-4">
                  <Button className="w-full justify-start gap-3" variant="outline">
                    <Plane className="h-5 w-5 text-primary" />
                    <span>Book Flights</span>
                  </Button>
                  <Button className="w-full justify-start gap-3" variant="outline">
                    <Bed className="h-5 w-5 text-primary" />
                    <span>Find Accommodation</span>
                  </Button>
                  <Button className="w-full justify-start gap-3" variant="outline">
                    <Utensils className="h-5 w-5 text-primary" />
                    <span>Discover Activities</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <InteractiveMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
    const { destinations } = await import('@/lib/data');
    return destinations.map((dest) => ({
        slug: dest.slug,
    }));
}
