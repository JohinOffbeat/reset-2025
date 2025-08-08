import { Button } from "@/components/ui/button";
import { Play, Calendar, MapPin, Clock } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-32 md:pt-40"
    >
      {/* Background & overlay */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 hero-overlay z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
          {/* Headline */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
            RESET 2025
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-accent-glow">
              Reboot the Person You Bring to the World
            </span>
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-lg font-subheading">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span>3 – 6 October</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Leroy Grand, Bangalore</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <span>Residential Immersion</span>
            </div>
          </div>

          {/* Subcopy */}
          <p className="text-xl lg:text-2xl mb-8 text-muted-foreground max-w-2xl">
            96 hours. One epic identity upgrade. Step out of routine, tear through self-imposed ceilings, and return home on fire.
          </p>

          {/* Video under text */}
          <div className="w-full max-w-3xl aspect-video bg-muted/40 rounded-xl flex items-center justify-center border border-border mb-8">
            <Play className="w-16 h-16 text-accent-glow" />
            <span className="sr-only">Hero video placeholder</span>
          </div>

          {/* CTA after video */}
          <Button
            variant="ember"
            size="lg"
            className="text-lg px-8 py-6 rounded-full"
            onClick={() => scrollToSection("cta-final")}
          >
            RESERVE MY ROOM
          </Button>
        </div>
      </div>

      {/* Sticky CTA (unchanged) */}
      <div className="fixed bottom-6 right-6 z-50 hidden" id="sticky-cta">
        <Button
          variant="ember"
          size="lg"
          className="rounded-full shadow-lg"
          onClick={() => scrollToSection("cta-final")}
        >
          RESERVE MY ROOM
        </Button>
      </div>
    </section>
  );
};
