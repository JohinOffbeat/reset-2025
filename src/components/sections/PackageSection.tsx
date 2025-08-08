import { Check, Bed, Utensils, Clock, Trophy } from "lucide-react";

const packageItems = [
  {
    icon: Bed,
    title: "Twin-share room (3 nights)",
    description: "at Leroy Grand – gender-matched, curator-paired"
  },
  {
    icon: Utensils,
    title: "All gourmet meals:",
    description: "All your meals starting from Friday Dinner till Monday Lunch are a taken care of!"
  },
  {
    icon: Clock,
    title: "4 Day Immersive Experience",
    description: "Be ready to completely reset yourself"
  },
  {
    icon: Trophy,
    title: "4 Days Booking Charges:",
    description: "₹ 20,000 + 18% GST · non-refundable",
    highlight: true
  }
];

export const PackageSection = () => {
  return (
    <section id="package" className="py-20 fade-in-section">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="font-heading text-4xl md:text-6xl text-center mb-16">
          Your Residential Package Includes
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {packageItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className={`bg-card border rounded-lg p-6 ${
                    item.highlight 
                      ? 'border-accent bg-accent/5' 
                      : 'border-border hover:border-accent/30'
                  } transition-colors`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${
                      item.highlight ? 'bg-accent/20' : 'bg-accent/10'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        item.highlight ? 'text-accent' : 'text-accent-glow'
                      }`} />
                    </div>
                    <div>
                      <h3 className={`font-subheading text-lg mb-2 ${
                        item.highlight ? 'text-accent' : 'text-foreground'
                      }`}>
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <p className="text-xl font-subheading text-accent-glow mb-2">
              Transformation is priceless;
            </p>
            <p className="text-lg text-muted-foreground">
              lodging & meals are the only cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};