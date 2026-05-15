"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTransitionNavigation } from "@/components/transition-provider";

const SLIDES = [
  {
    id: "burger",
    tag: "Signature Burgers",
    badge: "Fan Favourite",
    headline: ["THE", "SMASH", "BURGER"],
    gradientColors: ["#fef9c3", "#fbbf24", "#f59e0b", "#b45309"],
    accentHex: "#fbbf24",
    accentRgb: "251,191,36",
    bg: "radial-gradient(ellipse 80% 60% at 70% 40%, #3d1f00 0%, #1a0c00 40%, #090400 100%)",
    image: "/images/foods/burger-hero.png",
    imageAlt: "Blueberry's Smash Burger",
    description:
      "Hand-smashed Angus beef, melted American cheese, house pickles, and our secret blueberry-chipotle sauce — all stacked sky-high on a toasted brioche bun.",
    primaryCta: {
      label: "Order Now",
      route: "/menu/mains",
      transition: "THE MAINS",
    },
    secondaryCta: {
      label: "View Full Menu",
      route: "/menu",
      transition: "THE MENU",
    },
    stats: [
      { value: "100%", label: "Angus Beef" },
      { value: "4.8★", label: "Guest Rating" },
      { value: "6+", label: "Burger Builds" },
    ],
    ringColor: "rgba(251,191,36,0.06)",
    particleColor: "rgba(251,191,36,0.45)",
    gridColor: "rgba(251,191,36,0.8)",
    glowBg:
      "radial-gradient(circle, rgba(251,191,36,0.5) 0%, rgba(180,83,9,0.22) 45%, transparent 70%)",
    imageSize: {
      w: "clamp(440px, 55vw, 820px)",
      h: "clamp(520px, 68vw, 980px)",
    },
  },
  {
    id: "drink",
    headlineColor: "#2e1065",
    tag: "Signature Beverages",
    badge: "New Arrival",
    headline: ["THE", "GRAPE", "LEGACY"],
    gradientColors: ["#6b21a8", "#7c3aed", "#a855f7", "#c084fc"],
    accentHex: "#7c3aed",
    accentRgb: "124,58,237",
    bg: "radial-gradient(ellipse 90% 70% at 65% 45%, #f0ebff 0%, #e9e0ff 35%, #f5f0ff 65%, #faf8ff 100%)",
    image: "/images/drinks/berry-drink-Photoroom.png",
    imageAlt: "Blueberry's Signature Grape Drink",
    description:
      "Our signature Blueberry's Grape Drink — house-blended from hand-picked deep-violet grapes, served ice-cold in our frosted mason jar. Every sip a moment worth remembering.",
    primaryCta: {
      label: "Order Now",
      route: "/menu/beverages",
      transition: "THE BEVERAGES",
    },
    secondaryCta: {
      label: "View Full Menu",
      route: "/menu",
      transition: "THE MENU",
    },
    stats: [
      { value: "100%", label: "Natural Grapes" },
      { value: "4.9★", label: "Guest Rating" },
      { value: "12+", label: "Flavor Variants" },
    ],
    ringColor: "rgba(124,58,237,0.07)",
    particleColor: "rgba(124,58,237,0.2)",
    gridColor: "rgba(124,58,237,0.4)",
    glowBg:
      "radial-gradient(circle, rgba(192,132,252,0.35) 0%, rgba(124,58,237,0.12) 45%, transparent 70%)",
    imageSize: {
      w: "clamp(480px, 58vw, 860px)",
      h: "clamp(560px, 70vw, 1020px)",
    },
  },
  {
    id: "oats",
    headlineColor: "#3b1a00",
    tag: "Signature Desserts",
    badge: "Chef's Pick",
    headline: ["THE", "GOLDEN", "OATS"],
    gradientColors: ["#92400e", "#b45309", "#d97706", "#f59e0b"],
    accentHex: "#b45309",
    accentRgb: "180,83,9",
    bg: "radial-gradient(ellipse 80% 60% at 70% 40%, #fdf8f0 0%, #faf4e8 40%, #f5ede0 100%)",
    image: "/images/desserts/oats.png",
    imageAlt: "Blueberry's Golden Oats Dessert",
    description:
      "Slow-cooked golden oats layered with house-made caramel drizzle, toasted almonds, and a dusting of cinnamon spice. Comfort in every spoonful — wholesome, indulgent, and impossible to put down.",
    primaryCta: {
      label: "Order Now",
      route: "/menu/desserts",
      transition: "THE DESSERTS",
    },
    secondaryCta: {
      label: "View Full Menu",
      route: "/menu",
      transition: "THE MENU",
    },
    stats: [
      { value: "Slow", label: "Cooked" },
      { value: "4.8★", label: "Guest Rating" },
      { value: "6+", label: "Sweet Options" },
    ],
    ringColor: "rgba(180,83,9,0.08)",
    particleColor: "rgba(180,83,9,0.25)",
    gridColor: "rgba(180,83,9,0.5)",
    glowBg:
      "radial-gradient(circle, rgba(245,158,11,0.3) 0%, rgba(180,83,9,0.12) 45%, transparent 70%)",
    imageSize: {
      w: "clamp(440px, 55vw, 820px)",
      h: "clamp(520px, 68vw, 980px)",
    },
  },
  {
    id: "carpaccio",
    tag: "Fresh Starters",
    badge: "House Favourite",
    headline: ["THE", "FRESH", "PLATE"],
    gradientColors: ["#fff7ed", "#fdba74", "#f97316", "#c2410c"],
    accentHex: "#fb923c",
    accentRgb: "249,115,22",
    bg: "radial-gradient(ellipse 80% 60% at 70% 40%, #431407 0%, #1c0a03 40%, #080300 100%)",
    image: "/images/foods/hero-dish-1.png",
    imageAlt: "Blueberry's Fresh Carpaccio Starter",
    description:
      "Delicate slices fanned to perfection — dressed with house citrus vinaigrette, shaved cucumber ribbons, crumbled feta, and a scatter of peppery microgreens. Light, vibrant, unforgettable.",
    primaryCta: {
      label: "Order Now",
      route: "/menu/starters",
      transition: "THE STARTERS",
    },
    secondaryCta: {
      label: "View Full Menu",
      route: "/menu",
      transition: "THE MENU",
    },
    stats: [
      { value: "Fresh", label: "Daily Sourced" },
      { value: "4.8★", label: "Guest Rating" },
      { value: "5+", label: "Starter Options" },
    ],
    ringColor: "rgba(249,115,22,0.06)",
    particleColor: "rgba(249,115,22,0.4)",
    gridColor: "rgba(251,146,60,0.8)",
    glowBg:
      "radial-gradient(circle, rgba(249,115,22,0.45) 0%, rgba(194,65,12,0.2) 45%, transparent 70%)",
    imageSize: {
      w: "clamp(420px, 52vw, 800px)",
      h: "clamp(500px, 65vw, 960px)",
    },
  },
  {
    id: "avocado",
    tag: "Signature Sides",
    badge: "Plant Forward",
    headline: ["SPICED", "AVOCADO", "BOWL"],
    gradientColors: ["#f0fdf4", "#86efac", "#22c55e", "#15803d"],
    accentHex: "#4ade80",
    accentRgb: "74,222,128",
    bg: "radial-gradient(ellipse 80% 60% at 70% 40%, #052e16 0%, #020f07 40%, #010503 100%)",
    image: "/images/foods/hero-dish-2.png",
    imageAlt: "Blueberry's Spiced Avocado Dish",
    description:
      "Halved Hass avocados dusted with smoked paprika, everything-bagel seasoning, and crowned with a tangle of fresh microgreens. Clean energy, bold flavour — zero compromise.",
    primaryCta: {
      label: "Order Now",
      route: "/menu/starters",
      transition: "THE STARTERS",
    },
    secondaryCta: {
      label: "View Full Menu",
      route: "/menu",
      transition: "THE MENU",
    },
    stats: [
      { value: "100%", label: "Plant Based" },
      { value: "4.9★", label: "Guest Rating" },
      { value: "Vegan", label: "Friendly" },
    ],
    ringColor: "rgba(74,222,128,0.06)",
    particleColor: "rgba(74,222,128,0.4)",
    gridColor: "rgba(74,222,128,0.8)",
    glowBg:
      "radial-gradient(circle, rgba(34,197,94,0.45) 0%, rgba(21,128,61,0.2) 45%, transparent 70%)",
    imageSize: {
      w: "clamp(420px, 52vw, 800px)",
      h: "clamp(500px, 65vw, 960px)",
    },
  },
] as const;

/* ─── Floating particle blobs ─────────────────────────────────────── */
const PARTICLES = [
  { w: 6, h: 6, top: "18%", left: "8%", delay: 0, dur: 3.8 },
  { w: 4, h: 4, top: "32%", left: "14%", delay: 0.6, dur: 4.5 },
  { w: 8, h: 8, top: "55%", left: "5%", delay: 1.2, dur: 3.2 },
  { w: 5, h: 5, top: "72%", left: "18%", delay: 0.4, dur: 5.0 },
  { w: 3, h: 3, top: "12%", left: "78%", delay: 0.9, dur: 4.1 },
  { w: 7, h: 7, top: "28%", left: "88%", delay: 0.2, dur: 3.6 },
  { w: 4, h: 4, top: "65%", left: "92%", delay: 1.5, dur: 4.8 },
  { w: 6, h: 6, top: "82%", left: "82%", delay: 0.7, dur: 3.4 },
  { w: 3, h: 3, top: "45%", left: "3%", delay: 1.1, dur: 5.2 },
  { w: 5, h: 5, top: "88%", left: "40%", delay: 0.3, dur: 3.9 },
];

const TICKER_ITEMS = [
  "Signature Beverages",
  "★",
  "Crafted with Passion",
  "★",
  "House-Blended Recipes",
  "★",
  "The Grape Collection",
  "★",
  "Blueberry's Grill",
  "★",
  "Premium Refreshment",
  "★",
];

const SLIDE_DURATION = 5500;

/* ─── SlideImage: isolated image slot — mounts → enters → floats ──── */
function SlideImage({
  slide,
  onReady,
}: {
  slide: (typeof SLIDES)[number];
  onReady?: () => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    /* Kill any previous tweens on this element */
    gsap.killTweensOf(el);

    /* Entrance */
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.92, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.85,
        ease: "expo.out",
        onComplete: () => {
          onReady?.();
          /* Idle float */
          floatRef.current = gsap.to(el, {
            y: -18,
            duration: 3.6,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
          });
        },
      },
    );

    return () => {
      floatRef.current?.kill();
      gsap.killTweensOf(el);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        position: "absolute",
        width: slide.imageSize.w,
        height: slide.imageSize.h,
        opacity: 0 /* GSAP drives this */,
      }}
    >
      <Image
        src={slide.image}
        alt={slide.imageAlt}
        fill
        priority
        fetchPriority="high"
        className="object-contain object-center"
        sizes="(max-width: 1024px) 90vw, 58vw"
      />
    </div>
  );
}

export function HeroSection() {
  const { navigateWithTransition } = useTransitionNavigation();

  const [activeIdx, setActiveIdx] = useState(0);
  /* imageKey forces SlideImage to fully unmount/remount on each slide change */
  const [imageKey, setImageKey] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const glowRef = useRef<HTMLDivElement>(null);
  const glowTween = useRef<gsap.core.Tween | null>(null);

  /* ── glow animation ────────────────────────────────────────────── */
  const startGlow = useCallback(() => {
    const el = glowRef.current;
    if (!el) return;
    gsap.killTweensOf(el);
    glowTween.current?.kill();
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: "power2.out",
        onComplete: () => {
          glowTween.current = gsap.to(el, {
            scale: 1.08,
            opacity: 0.75,
            duration: 2.8,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
          });
        },
      },
    );
  }, []);

  /* ── slide transition ──────────────────────────────────────────── */
  const goTo = useCallback(
    (nextIdx: number) => {
      if (isLocked || nextIdx === activeIdx) return;
      setIsLocked(true);
      setActiveIdx(nextIdx);
      /* bump key → SlideImage unmounts old, mounts new */
      setImageKey((k) => k + 1);
      startGlow();
      /* unlock after entrance completes */
      setTimeout(() => setIsLocked(false), 950);
    },
    [activeIdx, isLocked, startGlow],
  );

  /* ── initial glow on mount ─────────────────────────────────────── */
  useEffect(() => {
    startGlow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── auto-advance ──────────────────────────────────────────────── */
  useEffect(() => {
    const id = setTimeout(() => {
      const next = (activeIdx + 1) % SLIDES.length;
      goTo(next);
    }, SLIDE_DURATION);
    return () => clearTimeout(id);
  }, [activeIdx, goTo]);

  const slide = SLIDES[activeIdx];

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex flex-col hero-bg-transition"
      style={{ background: slide.bg }}
    >
      {/* ── Noise grain ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Concentric rings ── */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-end pr-[5%]">
        {[520, 380, 260].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: size,
              height: size,
              borderColor: slide.ringColor,
              transition: "border-color 0.8s ease",
            }}
          />
        ))}
      </div>

      {/* ── Floating particles ── */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none z-0"
          style={{
            width: p.w,
            height: p.h,
            top: p.top,
            left: p.left,
            background: slide.particleColor,
            animation: `heroFloat ${p.dur}s ${p.delay}s ease-in-out infinite alternate`,
            transition: "background 0.8s ease",
          }}
        />
      ))}

      {/* ── Subtle grid ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${slide.gridColor} 1px,transparent 1px),linear-gradient(90deg,${slide.gridColor} 1px,transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-10 lg:px-16 xl:px-24 pt-28 pb-0 max-w-[1600px] mx-auto w-full">
        {/* ── LEFT ── */}
        <div
          key={`text-${slide.id}`}
          className="flex-1 flex flex-col gap-7 lg:max-w-[54%] lg:pr-8 hero-text-enter"
        >
          {/* Tag badge */}
          <div className="inline-flex items-center gap-2.5 w-fit">
            <span
              className="h-px w-8"
              style={{ background: slide.accentHex }}
            />
            <span
              className="text-[10px] font-black uppercase tracking-[0.35em]"
              style={{ color: slide.accentHex }}
            >
              {slide.tag}
            </span>
            <span
              className="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest"
              style={{
                background: `rgba(${slide.accentRgb},0.12)`,
                border: `1px solid rgba(${slide.accentRgb},0.3)`,
                color: slide.gradientColors[0],
              }}
            >
              {slide.badge}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-black uppercase tracking-tighter leading-[0.85]"
            style={{ fontSize: "clamp(3.2rem, 8.5vw, 9rem)" }}
          >
            <span
              className="block"
              style={{
                color:
                  (slide as { headlineColor?: string }).headlineColor ??
                  "#ffffff",
              }}
            >
              {slide.headline[0]}
            </span>
            <span
              className="block"
              style={{
                background: `linear-gradient(135deg, ${slide.gradientColors.join(", ")})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {slide.headline[1]}
            </span>
            <span
              className="block"
              style={{
                color: (slide as { headlineColor?: string }).headlineColor
                  ? `${(slide as { headlineColor?: string }).headlineColor}cc`
                  : "rgba(255,255,255,0.9)",
              }}
            >
              {slide.headline[2]}
            </span>
          </h1>

          {/* Description */}
          <p
            className="font-medium leading-relaxed max-w-md"
            style={{
              fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
              color: `rgba(${slide.accentRgb}, 0.6)`,
            }}
          >
            {slide.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() =>
                navigateWithTransition(
                  slide.primaryCta.route,
                  slide.primaryCta.transition,
                )
              }
              className="group relative overflow-hidden px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider text-black transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: `linear-gradient(135deg, ${slide.gradientColors[0]}, ${slide.gradientColors[1]}, ${slide.gradientColors[2]})`,
                boxShadow: `0 0 40px rgba(${slide.accentRgb},0.45), 0 4px 20px rgba(0,0,0,0.4)`,
              }}
            >
              <span className="relative z-10">{slide.primaryCta.label}</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${slide.gradientColors[0]}, ${slide.gradientColors[1]})`,
                }}
              />
            </button>

            <button
              onClick={() =>
                navigateWithTransition(
                  slide.secondaryCta.route,
                  slide.secondaryCta.transition,
                )
              }
              className="flex items-center gap-3 font-bold text-sm uppercase tracking-wider transition-colors duration-300"
              style={{ color: `rgba(${slide.accentRgb}, 0.8)` }}
            >
              <span
                className="w-10 h-10 rounded-full border flex items-center justify-center text-xs"
                style={{
                  background: `rgba(${slide.accentRgb}, 0.1)`,
                  borderColor: `rgba(${slide.accentRgb}, 0.3)`,
                }}
              >
                →
              </span>
              {slide.secondaryCta.label}
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-4">
            {slide.stats.map((s) => (
              <div key={s.value} className="flex flex-col gap-0.5">
                <span
                  className="font-black text-xl leading-none"
                  style={{
                    background: `linear-gradient(135deg, ${slide.gradientColors[0]}, ${slide.gradientColors[1]})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: `rgba(${slide.accentRgb}, 0.5)` }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-5 pt-2">
            <button
              aria-label="Previous slide"
              onClick={() =>
                goTo((activeIdx - 1 + SLIDES.length) % SLIDES.length)
              }
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              style={{
                background: `rgba(${slide.accentRgb}, 0.08)`,
                borderColor: `rgba(${slide.accentRgb}, 0.3)`,
                color: slide.accentHex,
              }}
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: i === activeIdx ? 28 : 8,
                    height: 8,
                    background:
                      i === activeIdx
                        ? slide.accentHex
                        : `rgba(${slide.accentRgb}, 0.3)`,
                  }}
                />
              ))}
            </div>

            <button
              aria-label="Next slide"
              onClick={() => goTo((activeIdx + 1) % SLIDES.length)}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              style={{
                background: `rgba(${slide.accentRgb}, 0.08)`,
                borderColor: `rgba(${slide.accentRgb}, 0.3)`,
                color: slide.accentHex,
              }}
            >
              →
            </button>

            {/* Progress bar */}
            <div
              className="flex-1 max-w-[120px] h-[2px] rounded-full overflow-hidden"
              style={{ background: `rgba(${slide.accentRgb}, 0.15)` }}
            >
              <div
                key={`progress-${activeIdx}`}
                className="h-full rounded-full hero-progress-bar"
                style={{ background: slide.accentHex }}
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT: single image slot — key forces full remount ── */}
        <div className="flex-1 relative flex items-center justify-center lg:justify-end min-h-[400px] lg:min-h-0 lg:self-stretch">
          {/* Glow — single element, reused across slides */}
          <div
            ref={glowRef}
            className="absolute pointer-events-none"
            style={{
              width: "520px",
              height: "520px",
              background: slide.glowBg,
              filter: "blur(60px)",
              borderRadius: "50%",
              opacity: 0,
              transition: "background 0.8s ease",
            }}
          />

          {/* One image at a time — remounts on imageKey change */}
          <SlideImage key={imageKey} slide={slide} />
        </div>
      </div>

      {/* ── Marquee ticker ── */}
      <div
        className="relative z-10 w-full mt-auto overflow-hidden py-4 border-t"
        style={{
          borderColor: `rgba(${slide.accentRgb},0.15)`,
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(10px)",
          transition: "border-color 0.8s ease",
        }}
      >
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="text-[10px] font-black uppercase tracking-[0.3em] flex-shrink-0"
              style={{
                color: `rgba(${slide.accentRgb}, 0.4)`,
                transition: "color 0.8s ease",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`@keyframes heroFloat{from{transform:translateY(0) scale(1);opacity:0.4}to{transform:translateY(-14px) scale(1.15);opacity:0.7}}.hero-text-enter{animation:heroTextIn .45s ease-out both}@keyframes heroTextIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}.hero-bg-transition{transition:background .9s ease}.hero-progress-bar{animation:heroProgress ${SLIDE_DURATION}ms linear both}@keyframes heroProgress{from{width:0%}to{width:100%}}`}</style>
    </section>
  );
}
