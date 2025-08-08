import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { StickyNav } from "@/components/navigation/StickyNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyFourDaysSection } from "@/components/sections/WhyFourDaysSection";
import { TrajectorySection } from "@/components/sections/TrajectorySection";
import { LifeWheelSection } from "@/components/sections/LifeWheelSection";
import { PackageSection } from "@/components/sections/PackageSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { HorizonSection } from "@/components/sections/HorizonSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTAFinalSection } from "@/components/sections/CTAFinalSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StickyNav />
      <main>
        <HeroSection />
        <WhyFourDaysSection />
        <TrajectorySection />
        <LifeWheelSection />
        <PackageSection />
        <ProofSection />
        <HorizonSection />
        <FAQSection />
        <CTAFinalSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
