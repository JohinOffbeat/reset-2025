import { 
  Heart, 
  Brain, 
  Users, 
  Briefcase, 
  DollarSign, 
  Flower, 
  Plane, 
  Infinity 
} from "lucide-react";

const lifeAreas = [
  {
    icon: Heart,
    label: "Body & Vitality",
    description: "Ever-ready energy that outlasts coffee."
  },
  {
    icon: Brain,
    label: "Emotions & Mindset", 
    description: "Command the inner voice steering every choice."
  },
  {
    icon: Users,
    label: "Relationships & Connection",
    description: "Love, lead, communicate on a higher frequency."
  },
  {
    icon: Briefcase,
    label: "Career & Business Growth",
    description: "Turn work into mission and scale impact."
  },
  {
    icon: DollarSign,
    label: "Wealth & Money Mastery",
    description: "Convert income into lasting freedom."
  },
  {
    icon: Flower,
    label: "Spirituality & Purpose",
    description: "Anchor daily action to a deeper *why*."
  },
  {
    icon: Plane,
    label: "Fun, Recreation & Adventure", 
    description: "Inject play so life feels rich, not just busy."
  },
  {
    icon: Infinity,
    label: "Contribution & Legacy",
    description: "Craft the footprint you'll leave behind."
  }
];

export const LifeWheelSection = () => {
  return (
    <section id="life-wheel" className="py-20 bg-card/20 fade-in-section">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="font-heading text-4xl md:text-6xl text-center mb-16">
          The Life-Reset Wheel
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lifeAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-accent-glow" />
                  </div>
                </div>
                
                <h3 className="font-subheading text-lg mb-3 text-foreground">
                  {area.label}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};