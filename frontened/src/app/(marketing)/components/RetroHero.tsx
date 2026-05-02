import React from "react";
import Image from "next/image";
import { RetroButton } from "@/components/ui/RetroButton";
import { RetroSticker } from "@/components/ui/RetroSticker";

export const RetroHero: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 flex-grow border-y-4 border-black border-t-0 md:border-t-4 mt-0 md:mt-[-4px]">
      <div className="flex flex-col justify-center px-6 sm:px-12 py-16 md:py-24 bg-[#fdf8f0]">
        <div className="max-w-xl mx-auto md:mx-0">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter uppercase mb-6 flex flex-col">
            <span>NO CAP,</span>
            <span>JUST</span>
            <span className="text-[#ff5500] font-serif italic mt-2 tracking-normal pr-4">
              FLAVOR
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 font-medium mb-10 max-w-md leading-snug">
            Serving 70s aesthetics with a modern twist. Locally sourced, highkey
            delicious, and strictly for the vibers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <RetroButton variant="primary">Order Now</RetroButton>
            <RetroButton variant="secondary">View Menu</RetroButton>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[60vh] md:h-auto border-t-4 md:border-t-0 md:border-l-4 border-black overflow-hidden bg-[#1a1a1a]">
        <Image
          src="/images/blueberrysgrill_hero/hero_dish_2.png"
          alt="Blueberry Grill Hero Dish"
          fill
          className="object-cover object-center"
          priority
        />

        <RetroSticker
          variant="circle"
          className="bottom-8 right-8"
          rotation="-rotate-12"
        >
          FRESH AF EVERY DAY
        </RetroSticker>
      </div>
    </div>
  );
};
