import React from "react";
import Link from "next/link";
import { VibeSlider } from "./VibeSlider";

export const VibeCheck: React.FC = () => {
  return (
    <section
      id="vibe-check"
      aria-labelledby="vibe-check-heading"
      className="w-full grid grid-cols-1 md:grid-cols-2 border-b-4 border-black"
    >
      {/* ── Left: Orange Copy Panel ── */}
      <div className="flex flex-col justify-center px-8 sm:px-14 py-16 md:py-24 bg-[#ff5500] border-b-4 md:border-b-0 md:border-r-4 border-black">
        <h2
          id="vibe-check-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter text-white mb-8"
        >
          THE VIBE CHECK IS PASSED.
        </h2>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-sm mb-10">
          We don&apos;t just do food. We do moments. From the curated 90s
          hip-hop playlist to the 70s diner seats, every corner is designed for
          your next dump. No reservations needed for the main room, just bring
          the energy.
        </p>

        <div>
          <Link
            href="#our-story"
            className="inline-block px-6 py-3 bg-black text-white font-bold uppercase tracking-widest text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150"
          >
            OUR STORY
          </Link>
        </div>
      </div>

      {/* ── Right: Interior Photo Slider ── */}
      <div className="relative w-full h-[55vw] max-h-[600px] md:h-auto min-h-[340px] overflow-hidden bg-black">
        <VibeSlider />
      </div>
    </section>
  );
};
