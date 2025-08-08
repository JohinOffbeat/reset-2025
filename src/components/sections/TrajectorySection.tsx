import { Flame, Hammer, Compass, Rocket } from "lucide-react";

const trajectorySteps = [
  {
    day: "Friday",
    title: "IGNITE",
    description: "Light the fuse and switch from ordinary to electrified.",
    icon: Flame,
    color: "text-accent"
  },
  {
    day: "Saturday", 
    title: "BREAK & RELEASE",
    description: "Tear down hidden walls and walk out lighter than you've felt in years.",
    icon: Hammer,
    color: "text-accent-glow"
  },
  {
    day: "Sunday",
    title: "DESIGN & ALIGN", 
    description: "Draft the upgraded blueprint for body, money, mission, and love.",
    icon: Compass,
    color: "text-accent"
  },
  {
    day: "Monday",
    title: "COMMIT & ASCEND",
    description: "Lock the shift, pledge with your tribe, then depart unstoppable.",
    note: "Hotel checkout 1 p.m.; luggage room provided • Book flights 11 p.m.+",
    icon: Rocket,
    color: "text-accent-glow"
  }
];

export const TrajectorySection = () => {
  return (
    <section id="trajectory" className="py-20 fade-in-section">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="font-heading text-4xl md:text-6xl text-center mb-16">
          The 4-Day Trajectory
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trajectorySteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Timeline connector */}
                {index < trajectorySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent to-accent-glow opacity-30 z-0" />
                )}
                
                <div className="bg-card border border-border rounded-lg p-6 h-full relative z-10 hover:border-accent/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className={`w-8 h-8 ${step.color}`} />
                    <span className="text-sm font-subheading text-muted-foreground">
                      {step.day}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-xl mb-4 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  {step.note && (
                    <div className="text-xs text-muted-foreground/80 italic">
                      {step.note}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};