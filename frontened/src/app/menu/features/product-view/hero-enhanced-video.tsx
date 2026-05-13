"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "motion/react";

interface HeroEnhancedVideoProps {
  src: string;
  title?: string;
}

export const HeroEnhancedVideo = ({ src, title }: HeroEnhancedVideoProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const computedTitle =
    title ||
    (() => {
      if (src.includes("brownie-stack"))
        return "Brownie Stack • Premium Dessert";
      if (src.includes("Dish_rotating"))
        return "Nutella Waffle • Rotating Dish";
      const filename = src.split("/").pop()?.split(".")[0] || "";
      return filename
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
    })();

  // Scroll Motion Values
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const scrollBlur = useTransform(scrollYProgress, [0, 1], ["0px", "10px"]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scrollBlurFilter = useTransform(scrollBlur, (b) => `blur(${b})`);

  // Animation config
  const springConfig = { damping: 20, stiffness: 150 };

  // Spotlight Motion Values (Pixels)
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const spotlightSpringX = useSpring(spotlightX, springConfig);
  const spotlightSpringY = useSpring(spotlightY, springConfig);

  const spotlightGradient = useTransform(
    [spotlightSpringX, spotlightSpringY],
    ([sx, sy]) =>
      `radial-gradient(circle 350px at ${sx}px ${sy}px, rgba(212,175,55,0.15), transparent 80%)`,
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mX = event.clientX - rect.left;
    const mY = event.clientY - rect.top;

    // Set for spotlight
    spotlightX.set(mX);
    spotlightY.set(mY);
  };

  const handleMouseLeave = () => {
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[2/1] rounded-[40px] group bg-slate-50 cursor-pointer"
    >
      <motion.div
        style={{
          scale: scrollScale,
          filter: scrollBlurFilter,
          opacity: scrollOpacity,
        }}
        className="relative w-full h-full rounded-[40px] overflow-hidden transition-shadow duration-500"
      >
        {/* Loading & Placeholder State */}
        <AnimatePresence>
          {(isLoading || !isInView) && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-slate-50 z-20"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="w-16 h-16 border-2 border-[#D4AF37]/10 rounded-full" />
                  <div className="absolute top-0 left-0 w-16 h-16 border-2 border-transparent border-t-[#D4AF37] rounded-full animate-spin" />
                </div>
                <div className="space-y-2 text-center">
                  <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">
                    Preparing Selection
                  </span>
                  <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    {computedTitle}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {isInView && (
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => {
              setIsLoading(false);
              // Dispatch global event for transition sync
              window.dispatchEvent(new CustomEvent("page-ready"));
            }}
            className={`w-full h-full object-cover mix-blend-lighten scale-110 group-hover:scale-105 transition-transform duration-[2000ms] ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
          />
        )}

        {/* Spotlight Overlay */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: spotlightGradient,
          }}
        />

        {/* Blending Overlays - subtle light depth */}
        <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.05)] pointer-events-none" />

        {/* Ambient Glow (Corner) */}
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      </motion.div>
    </div>
  );
};
