import { Hourglass } from "lucide-react";

export const WhyFourDaysSection = () => {
  return (
    <section id="why" className="py-20 fade-in-section">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Hourglass className="w-16 h-16 text-accent-glow animate-pulse" />
            <div className="absolute inset-0 w-16 h-16 text-accent-glow opacity-50 animate-ping">
              <Hourglass className="w-16 h-16" />
            </div>
          </div>
        </div>
        
        <h2 className="font-heading text-4xl md:text-6xl mb-12">
          Why Four Straight Days?
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground">
            Insight can spark a thought; <span className="text-accent-glow font-medium">immersion rewires identity</span>.
          </p>
          <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground mt-6">
            Four unbroken days flood your nervous system with peak-state experiences, new reference points, and tribe energy—long enough for breakthrough to become baseline.
          </p>
        </div>
      </div>
    </section>
  );
};