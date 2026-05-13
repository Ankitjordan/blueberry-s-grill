import { ExploreFoodSection } from "./features/explore-food/explore-food-section";
import { HeroSection } from "./features/hero/HeroSection";
import { TestimonialsSection } from "./features/testimonials/testimonials-section";

function MarketingPage() {
	return (
		<>
			<HeroSection />
			<ExploreFoodSection />
			<TestimonialsSection />
		</>
	);
}

export default MarketingPage;
