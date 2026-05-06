import { ExploreFoodSection } from "./components/marketing-components/explore-food-section";
import { TestimonialsSection } from "./components/marketing-components/testimonials-section";
import { RetroFooter } from "./components/RetroFooter";
import { RetroHeader } from "./components/RetroHeader";
import { FooterReveal } from "@/components/ui/FooterReveal";

function MarketingPage() {
  return (
    <>
      <main className="relative min-h-screen w-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden pt-[72px] sm:pt-[80px] z-10">
        <div className="grain-overlay" />

        <RetroHeader />

        <ExploreFoodSection />
        <TestimonialsSection />
      </main>
      <FooterReveal>
        <RetroFooter />
      </FooterReveal>
    </>
  );
}

export default MarketingPage;
