import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";

type Testimonial = {
  src: string;       // video file path
  poster?: string;   // optional poster image
  author: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  { src: "/videos/aditi.mp4", poster: "/videos/aditi-poster.jpg", author: "Aditi G.", rating: 5 },
  { src: "/videos/shyam.mp4", poster: "/videos/shyam-poster.jpg", author: "Shyam R.",  rating: 5 },
  { src: "/videos/priya.mp4", poster: "/videos/priya-poster.jpg", author: "Priya M.",  rating: 5 },
];

export const ProofSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const nextTestimonial = () =>
    setCurrentIndex((p) => (p + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === currentIndex) {
        v.pause();
        v.currentTime = 0; // reset when slide changes
      } else {
        v.pause();
      }
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
            {/* Video (keep width, reduce height on md+) */}
            <div className="mx-auto w-full max-w-[420px]">
              <div className="relative rounded-xl border border-border/70 overflow-hidden shadow-lg">
                {/* mobile: classic portrait; md+: shorter height */}
                <div className="aspect-[9/16] md:aspect-[9/14] lg:aspect-[9/12] bg-muted/30">
                  <video
                    key={current.src}
                    ref={(el) => (videoRefs.current[currentIndex] = el)}
                    className="h-full w-full object-cover"
                    src={current.src}
                    poster={current.poster}
                    controls
                    playsInline
                    preload="metadata"
                  />
                </div>
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
                  onClick={() => setCurrentIndex(index)}
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
