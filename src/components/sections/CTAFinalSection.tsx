import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { CreditCard, Users, Clock } from "lucide-react";

export const CTAFinalSection = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [roomsLeft] = useState(20); // This would be dynamic from backend

  const handlePayment = () => {
    if (!isAgreed) return;
    // Integration with Razorpay would go here
    console.log("Processing payment...");
    // Redirect to /thank-you after payment
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
            >
              RESERVE MY ROOM NOW
            </Button>
          </DialogTrigger>
          
          <DialogContent className="sm:max-w-md bg-card border-border">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">Reserve Your Room</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="bg-muted/20 p-4 rounded-lg">
                <h3 className="font-subheading text-lg mb-2">Package Details</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  3 nights twin-share accommodation + all meals
                </p>
                <p className="text-2xl font-bold text-accent">
                  ₹ 20,000 <span className="text-sm text-muted-foreground">+ 18% GST</span>
                </p>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={isAgreed}
                  onCheckedChange={(checked) => setIsAgreed(checked === true)}
                />
                <label 
                  htmlFor="terms" 
                  className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                >
                  I understand accommodations are twin-share and the fee is non-refundable.
                </label>
              </div>
              
              <Button 
                variant="ember" 
                className="w-full"
                disabled={!isAgreed}
                onClick={handlePayment}
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Proceed to Payment
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Secure payment powered by Razorpay
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};