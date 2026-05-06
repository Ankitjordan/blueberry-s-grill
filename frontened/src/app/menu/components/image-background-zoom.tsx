"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

interface ImageBackgroundZoomProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
}

export const ImageBackgroundZoom = ({ src, alt, children }: ImageBackgroundZoomProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomed(false);
    };

    if (isZoomed) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isZoomed]);

  const handleZoom = () => {
    setIsZoomed(true);
  };

  const handleClose = () => {
    setIsZoomed(false);
  };

  if (!mounted) return null;

  return (
    <>
      <div 
        ref={triggerRef}
        onClick={handleZoom}
        className="relative cursor-zoom-in group overflow-hidden rounded-2xl border border-white/10"
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        {children}
      </div>

      {createPortal(
        <AnimatePresence>
          {isZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-12"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="absolute inset-0 bg-black/95 backdrop-blur-xl cursor-zoom-out"
              />
              
              <motion.div
                layoutId={`zoom-${src}`}
                className="relative w-full h-full max-w-6xl max-h-[80vh] rounded-[40px] overflow-hidden shadow-2xl border border-white/10"
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-8 right-8 p-3 rounded-full bg-black/40 border border-white/10 text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300 z-10"
                >
                  <IoClose size={24} />
                </button>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black via-black/60 to-transparent">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37] mb-2 block">Ingredient Insight</span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">{alt}</h2>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
