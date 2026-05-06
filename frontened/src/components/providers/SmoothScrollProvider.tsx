"use client";

import React, { useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    let lenis: any;

    const onTick = (time: number) => {
      if (lenis) {
        lenis.raf(time * 1000);
      }
    };

    const init = async () => {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      gsap.registerPlugin(ScrollTrigger);
      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add(onTick);

      gsap.ticker.lagSmoothing(0);

      (window as any).__lenis = lenis;
    };

    init();

    return () => {
      gsap.ticker.remove(onTick);
      if (lenis) {
        lenis.destroy();
        delete (window as any).__lenis;
      }
    };
  }, []);

  return <>{children}</>;
};
