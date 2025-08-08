import { Mountain, Waves, Users2 } from "lucide-react";

export const HorizonSection = () => {
  return (
    <section id="horizon" className="py-20 fade-in-section">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="font-heading text-4xl md:text-6xl text-center mb-16">
          Beyond RESET
        </h2>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground mb-6">
            RESET is base camp. Graduates who choose to master every arena will discover an invitation-only pathway.
          </p>
          <p className="text-lg text-accent-glow font-medium">
            For now: focus on your breakthrough—the next summit appears when you're ready.
          </p>
        </div>
        
        {/* Blurred image strip representation */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative group">
            <div className="aspect-video bg-gradient-to-br from-muted/40 to-muted/60 rounded-lg overflow-hidden border border-border">
              <div className="flex items-center justify-center h-full">
                <Mountain className="w-12 h-12 text-accent opacity-60" />
              </div>
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500" />
            </div>
            <p className="text-center mt-4 text-sm text-muted-foreground">Mountain Basecamp</p>
          </div>
          
          <div className="relative group">
            <div className="aspect-video bg-gradient-to-br from-muted/40 to-muted/60 rounded-lg overflow-hidden border border-border">
              <div className="flex items-center justify-center h-full">
                <Waves className="w-12 h-12 text-accent-glow opacity-60" />
              </div>
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500" />
            </div>
            <p className="text-center mt-4 text-sm text-muted-foreground">Coastal Retreat</p>
          </div>
          
          <div className="relative group">
            <div className="aspect-video bg-gradient-to-br from-muted/40 to-muted/60 rounded-lg overflow-hidden border border-border">
              <div className="flex items-center justify-center h-full">
                <Users2 className="w-12 h-12 text-accent opacity-60" />
              </div>
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500" />
            </div>
            <p className="text-center mt-4 text-sm text-muted-foreground">Mastermind Circle</p>
          </div>
        </div>
      </div>
    </section>
  );
};