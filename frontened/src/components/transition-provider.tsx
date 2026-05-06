"use client";

import React, { createContext, useContext, useRef, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

interface TransitionContextProps {
  navigateWithTransition: (href: string, title: string) => void;
}

const TransitionContext = createContext<TransitionContextProps | undefined>(undefined);

export const useTransitionNavigation = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransitionNavigation must be used within a TransitionProvider");
  }
  return context;
};

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [displayTitle, setDisplayTitle] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isPending, setIsPending] = useState(false);

  const navigateWithTransition = (href: string, title: string) => {
    if (href === pathname) return;
    
    // STEP 1: Prefetch the next page immediately
    router.prefetch(href);
    
    setDisplayTitle(title);
    setIsPending(true);

    const tl = gsap.timeline();

    // STEP 3: Ensure initial state is clean via GSAP to avoid Tailwind conflicts
    gsap.set(overlayRef.current, { y: "100%", pointerEvents: "auto" });
    gsap.set(textRef.current, { y: 150, opacity: 0 });
    gsap.set(lineRef.current, { scaleX: 0 });

    tl.to(overlayRef.current, {
      y: "0%",
      duration: 0.9,
      ease: "expo.inOut",
    })
    .to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "expo.out",
    }, "-=0.7") // Start almost immediately after wipe begins
    .to(lineRef.current, {
      scaleX: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.6")
    .call(() => {
      router.push(href);
    }); // Trigger push after text is mostly visible
  };

  // STEP 5: Sync Out-Animation with actual content readiness
  useEffect(() => {
    if (!isPending) return;

    let hasExited = false;
    let fallbackTimeout: NodeJS.Timeout;

    const triggerExit = () => {
      if (hasExited) return;
      hasExited = true;

      clearTimeout(fallbackTimeout);
      window.removeEventListener("page-ready", triggerExit);

      requestAnimationFrame(() => {
        const tl = gsap.timeline({
          delay: 0.2, // Small buffer after signal
          onComplete: () => {
            setIsPending(false);
            gsap.set(overlayRef.current, { pointerEvents: "none" });
          },
        });

        tl.to(textRef.current, {
          y: -150,
          opacity: 0,
          duration: 0.7,
          ease: "expo.in",
        })
        .to(lineRef.current, {
          scaleX: 0,
          transformOrigin: "right",
          duration: 0.4,
          ease: "power2.in"
        }, "-=0.7")
        .to(overlayRef.current, {
          y: "-100%",
          duration: 0.9,
          ease: "expo.inOut",
        }, "-=0.4");
      });
    };

    // Listen for content readiness from sub-components
    window.addEventListener("page-ready", triggerExit);

    // Fallback timeout to prevent being stuck (e.g., on pages without a hero video)
    fallbackTimeout = setTimeout(triggerExit, 4000);

    return () => {
      window.removeEventListener("page-ready", triggerExit);
      clearTimeout(fallbackTimeout);
    };

  }, [pathname, isPending]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      
      {/* Global Transition Overlay - Handled by GSAP */}
      <div
        ref={overlayRef}
        style={{ transform: "translateY(100%)" }}
        className="fixed inset-0 bg-[#D4AF37] z-[9999] pointer-events-none flex items-center justify-center"
      >
        <div className="overflow-hidden py-10 px-6">
          <div
            ref={textRef}
            className="opacity-0"
          >
            <h2 className="text-black text-6xl md:text-9xl font-black uppercase tracking-tighter text-center leading-[0.8]">
              {displayTitle}
            </h2>
            <div 
              ref={lineRef}
              className="w-full h-1.5 md:h-2.5 bg-black mt-8 md:mt-12 scale-x-0 origin-left" 
            />
            
            {/* Elegant Loading Signal */}
            <div className="mt-12 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40">
                Preparing Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </TransitionContext.Provider>
  );
};
