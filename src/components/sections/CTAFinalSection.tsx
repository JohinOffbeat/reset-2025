import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { CreditCard, Users, Clock } from "lucide-react";

export const CTAFinalSection = () => {
  const [isAgreed, setIsAgreed] = useState(true); // ✅ Pre-checked
  const [roomsLeft] = useState(20); // Could be dynamic

  const handlePayment = () => {
    if (!isAgreed) return;
    // ✅ Redirect to Razorpay
    window.open("https://rzp.io/rzp/reset-2025", "_blank");
  };

  return (
    <section id="cta-final" className="py-20 bg-gradient-to-r from-accent/20 to-accent-glow/20 fade-in-section">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-heading text-5xl md:text-7xl mb-8">
          Ready to Reset?
        </h2>
        
        <div className="flex items-center justify-center gap-8 mb-12 text-lg">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            <span className="font-subheading">
              <span className="text-accent-glow font-bold">{roomsLeft}</span> rooms left
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent" />
            <span className="text-muted-foreground">Limited availability</span>
          </div>
        </div>
        
        <p className="text-xl mb-12 text-muted-foreground">
          <span className="line-through">20 rooms</span> → <span className="text-accent-glow font-bold">{roomsLeft}</span>. 
          Secure yours before someone else does.
        </p>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="ember" 
              size="lg" 
              className="text-xl px-12 py-8 rounded-full"
              onClick={() => window.open("https://rzp.io/rzp/reset-2025", "_blank")}
            >
              RESERVE MY ROOM NOW
            </Button>
          </DialogTrigger>
          
        
        </Dialog>
      </div>
    </section>
  );
};
