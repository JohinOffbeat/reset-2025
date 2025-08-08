import { MapPin } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map with preview */}
          <div className="bg-muted/20 rounded-lg p-6 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-accent" />
              <h3 className="font-subheading text-lg">Event Location</h3>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.17565230449!2d77.54442037584633!3d13.024483787295798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae2938f193f813%3A0x607df3ed814ddb55!2sHotel%20Leroy%20Grand%2C%20Yeshwanthpur%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1754661850426!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Signature and copyright */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <img
              src="/sign.png"
              alt="Swastik Nandakumar Signature"
              className="h-36 w-auto object-contain"
            />
            <p className="text-base md:text-lg text-muted-foreground">
              Peak Performance Coach
            </p>
            <p className="text-xs text-muted-foreground mt-2">
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
