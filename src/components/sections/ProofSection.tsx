import { Star, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";

type Testimonial = {
  src: string;
  poster: string; // new field for cover image
  author: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    src: "https://storage.googleapis.com/msgsndr/TK1Z7jFRpKG9k0DcMMmc/media/689611a664937269a7d0c773.mp4", 
    poster: "/TWINKLE.jpg",
    author: "Twinkle", 
    rating: 5 
  },
  { 
    src: "https://storage.googleapis.com/msgsndr/TK1Z7jFRpKG9k0DcMMmc/media/68960defb0a66a13f33d917c.mov", 
    poster: "/KHUSHI.jpg",
    author: "Khushi", 
    rating: 5 
  },
  { 
    src: "https://storage.googleapis.com/msgsndr/TK1Z7jFRpKG9k0DcMMmc/media/68960def3b96f72bd2c0a39e.mov", 
    poster: "/ASHWINI.jpg",
    author: "Ashwani", 
    rating: 5 
  },
  { 
    src: "https://storage.googleapis.com/msgsndr/TK1Z7jFRpKG9k0DcMMmc/media/689612596493722794d0c823.mov", 
    poster: "/Vaishali.jpg",
    author: "Vaishali", 
    rating: 5 
  },
    { 
    src: "https://storage.googleapis.com/msgsndr/TK1Z7jFRpKG9k0DcMMmc/media/68961620f5b3cb5cc423a8f0.mov", 
    poster: "/Nevil.jpg",
    author: "Nevil", 
    rating: 5 
  },
  { 
    src: "https://storage.googleapis.com/msgsndr/TK1Z7jFRpKG9k0DcMMmc/media/689604974d8e3762dc3fd203.mov", 
    poster: "/Dolly & Gwen.jpg",
    author: "Dolly & Gwen", 
    rating: 5 
  },
  { 
    src: "https://storage.googleapis.com/msgsndr/TK1Z7jFRpKG9k0DcMMmc/media/68961620d66e1efd313c9646.mp4", 
    poster: "/Lipi Sharma.jpg",
    author: "Lipi", 
    rating: 5 
  }
];

export const ProofSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const nextTestimonial = () => {
    setIsPlaying(false);
    setCurrentIndex((p) => (p + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setIsPlaying(false);
    setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (!v) return;
      v.pause();
      v.currentTime = 0;
    });
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section id="proof" className="py-20 bg-card/20 fade-in-section">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="font-heading text-4xl md:text-6xl text-center mb-16 uppercase">
          Proof of Transformation
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-2xl p-6 md:p-10">
            {/* Video / Poster wrapper */}
            <div className="mx-auto w-full max-w-[420px]">
              <div className="relative rounded-xl border border-border/70 overflow-hidden shadow-lg aspect-[9/16] md:aspect-[9/14] lg:aspect-[9/12] bg-muted/30">
                
                {!isPlaying ? (
                  <>
                    <img
                      src={current.poster}
                      alt={`${current.author} testimonial cover`}
                      className="h-full w-full object-cover"
                    />
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
                    >
                      <Play className="w-20 h-20 text-accent-glow" />
                    </button>
                  </>
                ) : (
                  <video
                    key={current.src}
                    ref={(el) => (videoRefs.current[currentIndex] = el)}
                    className="h-full w-full object-cover"
                    src={current.src}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                  />
                )}
              </div>
            </div>

            {/* Meta + controls */}
            <div className="mt-6 flex items-center justify-between">
              <div>
                <cite className="text-lg font-subheading text-accent not-italic">
                  — {current.author}
                </cite>
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-glow text-accent-glow" />
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonial}
                  className="hover:bg-accent/10"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  className="hover:bg-accent/10"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? "bg-accent scale-110" : "bg-muted"
                  }`}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentIndex(index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
