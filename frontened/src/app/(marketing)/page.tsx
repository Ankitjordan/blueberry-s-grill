"use client";

import { RetroHeader } from "./components/RetroHeader";
import { RetroHero } from "./components/RetroHero";
import { MarqueeText } from "@/components/ui/MarqueeText";
import { ChefsFavorites } from "./components/ChefsFavorites";
import { VibeCheck } from "./components/VibeCheck";
import { InstaGrid } from "./components/InstaGrid";

function MarketingPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col font-sans bg-[#fdfaf5] text-black overflow-x-hidden pt-[72px] sm:pt-[80px]">
      <div className="grain-overlay" />

      <RetroHeader />

      <RetroHero />

      <MarqueeText text="L 2AM ★ BEST IN THE CITY ★ DISHES THAT SLAP ★ CRAFT COCKTAILS ★ RETRO VIBES ★ OPEN TIL" />

      <ChefsFavorites />

      <VibeCheck />

      <InstaGrid />
    </main>
  );
}

export default MarketingPage;
