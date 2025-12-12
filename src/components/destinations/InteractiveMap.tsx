import Image from 'next/image';
import { Map } from 'lucide-react';

export function InteractiveMap() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted shadow-lg">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 text-white p-4 text-center">
        <Map className="h-10 w-10 mb-2 text-primary" />
        <p className="font-semibold font-headline">Interactive Map</p>
        <p className="text-sm text-muted-foreground">(API Key Required for Full Functionality)</p>
      </div>
      <Image
        src="https://picsum.photos/seed/map/1200/800"
        alt="Map placeholder"
        data-ai-hint="world map"
        fill
        className="object-cover blur-sm"
      />
    </div>
  );
}
