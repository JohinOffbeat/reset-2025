import { MapPin } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map placeholder */}
          <div className="bg-muted/20 rounded-lg p-6 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-accent" />
              <h3 className="font-subheading text-lg">Event Location</h3>
            </div>
            <div className="aspect-video bg-muted/40 rounded-lg flex items-center justify-center">
              <a 
                href="https://maps.google.com/?q=Leroy+Grand,Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-glow hover:underline"
              >
                View Leroy Grand, Bangalore on Maps
              </a>
            </div>
          </div>
          
          {/* Signature and copyright */}
          <div className="text-center md:text-right">
            <div className="mb-6">
              <p className="font-script text-3xl text-accent-glow mb-2">
                Swastik Nandakumar
              </p>
              <p className="text-sm text-muted-foreground">
                Curator & Transformation Guide
              </p>
            </div>
            
            <p className="text-xs text-muted-foreground">
              © 2025 Swastik Nandakumar • All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle ember particle overlay effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-accent-glow/20 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-accent-glow/20 rounded-full animate-pulse delay-2000" />
      </div>
    </footer>
  );
};