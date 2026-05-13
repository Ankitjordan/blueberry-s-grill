"use client";

import dynamic from "next/dynamic";
import React from "react";
import { DotPattern } from "@/components/ui/DotPattern";

const FOOD_SECTIONS = [
  {
    id: "beverages",
    title: "THE BEVERAGES",
    subtitle: "LEGACY",
    tag: "Premium Refreshment",
    description:
      "Dive into our signature house-blend creations. Perfectly chilled, expertly balanced, and designed to cleanse the palate. Our mixologists blend tradition with modern technique to deliver the gold standard of refreshment.",
    image: "/images/drinks/drink-wobg.png",
    href: "/menu/beverages",
    rotate: "-rotate-[6deg]",
  },
  {
    id: "quickbites",
    title: "THE QUICKBITES",
    subtitle: "LEGACY",
    tag: "Signature Handhelds",
    description:
      "Indulge in our collection of handheld masterpieces. From classic toasts to gourmet sandwiches, every bite is a curated journey through flavor and texture. Crafted with artisanal bread and the finest ingredients.",
    image: "/images/foods/sandwhich-nobg.png",
    href: "/menu/quickbites",
    rotate: "",
  },
  {
    id: "desserts",
    title: "SWEET FINISHES",
    subtitle: "DESSERT LEGACY",
    tag: "Decadent & Sweet",
    description:
      "Decadent treats and signature sugar-crafted masterpieces designed to conclude your culinary journey with a moment of pure bliss. Each creation is a masterpiece of balance and texture.",
    image: "/images/desserts/desserts-nobg.png",
    href: "/menu/desserts",
    rotate: "",
  },
  {
    id: "mains",
    title: "GRAND ENTREES",
    subtitle: "MAINS LEGACY",
    tag: "Flame-Grilled Perfection",
    description:
      "Substantial flavors and substantial portions. Our mains are fire-grilled with precision and served with the soul of Blueberry's Grill. Featuring premium cuts and locally sourced produce.",
    image: "/images/mains/tofu-nobg.png",
    href: "/menu/mains",
    rotate: "",
  },
] as const;

const ExploreFoodScrollController = dynamic(
  () =>
    import("./ExploreFoodScrollController").then(
      (m) => m.ExploreFoodScrollController,
    ),
  {
    ssr: false,
    loading: () => {
      const n = FOOD_SECTIONS.length;
      const SCROLL_PER_CARD = 700;
      const HOLD_PER_CARD = 200;
      const totalScrollDist = (n - 1) * SCROLL_PER_CARD + n * HOLD_PER_CARD;
      return (
        <div
          style={{ height: `calc(100vh + ${totalScrollDist}px)` }}
          className="relative w-full"
        />
      );
    },
  },
);

export const ExploreFoodSection = () => {
  return (
    <div className="w-full bg-background relative overflow-hidden">
      <DotPattern
        className="text-slate-900/[0.07] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        width={32}
        height={32}
        cx={1}
        cy={1}
        cr={1}
      />

      <header className="py-20 md:py-28 text-center bg-transparent px-4 relative z-10">
        <div
          className="inline-flex items-center gap-3 text-[#D4AF37]
          text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-5"
        >
          <span className="h-px w-6 bg-[#D4AF37]" />
          The Full Spectrum
          <span className="h-px w-6 bg-[#D4AF37]" />
        </div>
        <h2
          className="text-slate-900 font-black uppercase tracking-tighter leading-none"
          style={{ fontSize: "clamp(2.5rem, 9vw, 8rem)" }}
        >
          EXPLORE <span className="text-[#D4AF37]">OUR MENU</span>
        </h2>
      </header>

      <ExploreFoodScrollController sections={FOOD_SECTIONS} />

      <div className="h-[15vh] bg-transparent" />
    </div>
  );
};
