"use client";

import Image from "next/image";
import Link from "next/link";
import React, { memo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoClose } from "react-icons/io5";
import { DirectionalButton } from "@/components/ui/DirectionalButton";
import { useTransitionNavigation } from "@/components/transition-provider";

// --- Data Definition ---

const FOOD_SECTIONS = [
  {
    id: "beverages",
    title: "THE BEVERAGES",
    subtitle: "LEGACY",
    tag: "Premium Refreshment",
    description:
      "Dive into our signature house-blend creations. Perfectly chilled, expertly balanced, and designed to cleanse the palate. Our mixologists blend tradition with modern technique to deliver the gold standard of refreshment.",
    image: "/images/drinks/drink-wobg.png",
    cardTitle: "Beverage Craft",
    cardDescription: "Signature house-blend creations and chilled mixology.",
    glowColor: "rgba(212,175,55,0.15)",
    savorText: "CHILL",
    href: "/menu/beverages",
  },
  {
    id: "quickbites",
    title: "THE QUICKBITES",
    subtitle: "LEGACY",
    tag: "Signature Handhelds",
    description:
      "Indulge in our collection of handheld masterpieces. From classic toasts to gourmet sandwiches, every bite is a curated journey through flavor and texture. Crafted with artisanal bread and the finest ingredients.",
    image: "/images/foods/sandwhich-nobg.png",
    cardTitle: "Handheld Classics",
    cardDescription: "Signature toasted sandwiches and gourmet quick bites.",
    glowColor: "rgba(212,175,55,0.15)",
    savorText: "SAVOR",
    href: "/menu/quickbites",
  },
  {
    id: "desserts",
    title: "SWEET FINISHES",
    subtitle: "DESSERT LEGACY",
    tag: "Decadent & Sweet",
    description:
      "Decadent treats and signature sugar-crafted masterpieces designed to conclude your culinary journey with a moment of pure bliss. Each creation is a masterpiece of balance and texture.",
    image: "/images/desserts/desserts-nobg.png",
    cardTitle: "Sweet Finishes",
    cardDescription:
      "Decadent treats and signature sugar-crafted masterpieces.",
    glowColor: "rgba(212,175,55,0.15)",
    savorText: "SWEET",
    href: "/menu/desserts",
  },
  {
    id: "mains",
    title: "GRAND ENTREES",
    subtitle: "MAINS LEGACY",
    tag: "Flame-Grilled Perfection",
    description:
      "Substantial flavors and substantial portions. Our mains are fire-grilled with precision and served with the soul of Blueberry's Grill. Featuring premium cuts and locally sourced produce.",
    image: "/images/mains/tofu-nobg.png",
    cardTitle: "Grand Entrees",
    cardDescription:
      "Hearty main courses fire-grilled with precision and soul.",
    glowColor: "rgba(212,175,55,0.15)",
    savorText: "GRAND",
    href: "/menu/mains",
  },
];

// --- Sub-Components ---

/**
 * Main Layout Section (Hero-style)
 */
const MainLayout = memo(
  ({
    section,
    isReversed,
    priority,
  }: {
    section: (typeof FOOD_SECTIONS)[0];
    isReversed: boolean;
    priority: boolean;
  }) => {
    const { navigateWithTransition } = useTransitionNavigation();
    
    return (
      <section className="w-full h-full p-8 md:p-16 lg:p-24 flex items-center relative overflow-hidden bg-black/40">
        <div className="absolute inset-0 grain-overlay opacity-10 pointer-events-none" />
        <div className="w-full max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          {/* Content Block */}
          <div
            className={`flex flex-col gap-10 ${isReversed ? "lg:order-2 lg:pl-12" : "lg:order-1"}`}
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-[#D4AF37] text-black text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-4 shadow-[4px_4px_0px_0px_rgba(212,175,55,0.2)]">
                {section.tag}
              </div>
              <h2 className="font-black text-6xl md:text-8xl lg:text-[120px] uppercase tracking-tighter leading-[0.85]">
                <span className="text-[#D4AF37] block mb-2">{section.title}</span>
                <span className="text-white">{section.subtitle}</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
                {section.description}
              </p>
            </div>
            <div>
              <DirectionalButton
                variant="primary"
                className="min-w-[240px] text-sm py-5 rounded-full"
                aria-label={`Explore ${section.id}`}
                onClick={() => navigateWithTransition(section.href, section.title)}
              >
                Explore {section.id}
              </DirectionalButton>
            </div>
          </div>

          {/* Image Block */}
          <div
            className={`${isReversed ? "lg:order-1" : "lg:order-2"} flex justify-center relative`}
          >
            <div className="relative w-full aspect-square max-w-[600px] lg:max-w-[700px]">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#D4AF37]/10 blur-[120px] rounded-full opacity-60"
                aria-hidden="true"
              />
              <Image
                src={section.image}
                alt={section.title}
                fill
                className={`object-contain transform drop-shadow-[0_40px_100px_rgba(212,175,55,0.2)] transition-transform duration-700 ${
                  section.id === "beverages"
                    ? "scale-[1.3] lg:scale-[1.5] -rotate-[8deg]"
                    : "scale-110 lg:scale-125"
                }`}
                priority={priority}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    );
  },
);
MainLayout.displayName = "MainLayout";

/**
 * StickyCard handles the pinning and layering logic
 */
const StickyCard = ({
  section,
  index,
  isReversed,
  priority,
}: {
  section: (typeof FOOD_SECTIONS)[0];
  index: number;
  isReversed: boolean;
  priority: boolean;
}) => {
  return (
    <div
      className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ zIndex: index }}
    >
      <div className="w-[96%] h-[90vh] max-w-[1850px] bg-[#0A0A0A] rounded-[40px] border border-white/10 shadow-[0_-20px_60px_rgba(0,0,0,0.9)] relative">
        <MainLayout
          section={section}
          isReversed={isReversed}
          priority={priority}
        />
      </div>
    </div>
  );
};

// --- Main Component ---

export const ExploreFoodSection = () => {
  // Use FOOD_SECTIONS directly to prevent hydration mismatch and layout shift
  const shuffledSections = FOOD_SECTIONS;
  
  return (
    <div className="w-full bg-black">
      {/* Introduction Header */}
      <div className="py-32 text-center space-y-6 bg-black relative z-10">
        <div className="inline-block px-4 py-1.5 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.25em] mb-2">
          The Full Spectrum
        </div>
        <h2 className="text-white font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none">
          EXPLORE <span className="text-[#D4AF37]">OUR MENU</span>
        </h2>
      </div>

      {/* Stacking Sections Container */}
      <div className="relative w-full px-4 sm:px-6 lg:px-10 pb-[10vh]">
        {shuffledSections.map((section, idx) => (
          <StickyCard
            key={section.id}
            section={section}
            index={idx}
            isReversed={idx % 2 === 1}
            priority={idx === 0}
          />
        ))}
      </div>
    </div>
  );
};
