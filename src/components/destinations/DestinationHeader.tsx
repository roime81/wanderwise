import type { ImagePlaceholder } from "@/lib/placeholder-images";
import Image from "next/image";
import { MapPin } from "lucide-react";

interface DestinationHeaderProps {
  name: string;
  country: string;
  image: ImagePlaceholder;
}

export function DestinationHeader({ name, country, image }: DestinationHeaderProps) {
  return (
    <div className="relative h-80 w-full text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
      <Image
        src={image.imageUrl}
        alt={image.description}
        data-ai-hint={image.imageHint}
        fill
        className="object-cover"
        priority
      />
      <div className="relative container mx-auto px-4 md:px-6 h-full flex flex-col justify-end pb-12 z-20">
        <h1 className="text-5xl md:text-6xl font-bold font-headline">
          {name}
        </h1>
        <p className="mt-2 text-xl flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          {country}
        </p>
      </div>
    </div>
  );
}
