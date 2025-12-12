import { destinations } from "@/lib/data";
import { DestinationCard } from "./DestinationCard";

export function DestinationGrid() {
  return (
    <div id="destinations" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
}
