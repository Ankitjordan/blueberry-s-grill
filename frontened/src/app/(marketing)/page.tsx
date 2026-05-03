"use client";

import { MarqueeText } from "@/components/ui/MarqueeText";
import { ChefsFavorites } from "./components/ChefsFavorites";
import { InstaGrid } from "./components/InstaGrid";
import { RetroFooter } from "./components/RetroFooter";
import { RetroHeader } from "./components/RetroHeader";
import { RetroHero } from "./components/RetroHero";
import { VibeCheck } from "./components/VibeCheck";

function MarketingPage() {
	return (
		<>
			<main className="relative min-h-screen w-full flex flex-col font-sans bg-[#fdfaf5] text-black overflow-x-hidden pt-[72px] sm:pt-[80px]">
				<div className="grain-overlay" />

				<RetroHeader />

				<RetroHero />

				<MarqueeText text="L 2AM ★ BEST IN THE CITY ★ DISHES THAT SLAP ★ CRAFT COCKTAILS ★ RETRO VIBES ★ OPEN TIL" />

				<ChefsFavorites />

				<VibeCheck />

				<InstaGrid />
			</main>

			<RetroFooter />
		</>
	);
}

export default MarketingPage;
