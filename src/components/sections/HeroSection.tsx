import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

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

          {/* Video from URL */}
          <div className="w-full max-w-3xl aspect-video mb-8 rounded-xl overflow-hidden border border-border">
            <iframe
              width="100%"
              height="100%"
              src="https://storage.googleapis.com/msgsndr/TK1Z7jFRpKG9k0DcMMmc/media/6895f598f5b3cb22a8236a47.mp4" // <-- replace with your video URL
              title="Hero video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* CTA after video */}
          <Button
            variant="ember"
            size="lg"
            className="text-lg px-8 py-6 rounded-full"
            onClick={() => window.open("https://rzp.io/rzp/reset-2025", "_blank")}
          >
            RESERVE MY ROOM
          </Button>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 z-50 hidden" id="sticky-cta">
        <Button
          variant="ember"
          size="lg"
          className="rounded-full shadow-lg"
          onClick={() => window.open("https://rzp.io/rzp/reset-2025", "_blank")}
        >
          RESERVE MY ROOM
        </Button>
      </div>
    </section>
  );
};
