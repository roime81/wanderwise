import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <Image
        src="https://picsum.photos/seed/hero-bg/1920/1080"
        alt="Breathtaking travel destination"
        data-ai-hint="travel landscape"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 container mx-auto px-4 md:px-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
          Your Next Adventure, Reimagined
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          Let our AI craft the perfect itinerary for you. Discover, plan, and book your dream trip with WanderWise.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
            <Link href="/plan-trip">
              Plan My Trip with AI
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Add simple keyframe animation to globals.css if it's not there
// @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
// .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
// Since I can't modify globals.css twice, I'll rely on existing animations or assume this is added.
// It will look good even without it.
