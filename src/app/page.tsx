import { Hero } from "@/components/home/Hero";
import { DestinationGrid } from "@/components/home/DestinationGrid";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <div className="w-full max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <h2 className="text-3xl font-headline font-bold text-center mb-10">Explore Destinations</h2>
        <DestinationGrid />
      </div>
    </div>
  );
}
