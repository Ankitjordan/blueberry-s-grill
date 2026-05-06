"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import type { MenuItem } from "./MegaMenu";

/* ── Star Rating ── */
const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={i < rating ? "#ff5500" : "none"}
        stroke={i < rating ? "#ff5500" : "#6b7280"}
        strokeWidth="2"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
    <span className="text-xs font-bold text-gray-400 ml-1">
      {rating.toFixed(1)} / 5
    </span>
  </div>
);

/* ── Desktop sidebar (embedded in MegaMenu) ── */
interface DesktopSidebarProps {
  item: MenuItem | null;
}

export const DesktopSidebarPreview: React.FC<DesktopSidebarProps> = ({
  item,
}) => (
  <div
    className={`w-72 flex-shrink-0 border-l-2 border-black overflow-hidden transition-all duration-300 ease-in-out ${
      item
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-6 pointer-events-none"
    }`}
  >
    {item && (
      <div className="h-full flex flex-col bg-[#1a1a1a] text-white">
        <div className="relative w-full h-48 flex-shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="288px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 to-transparent" />
        </div>
        <div className="flex flex-col flex-1 p-5">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">
            Chef&apos;s Pick
          </p>
          <h3 className="text-xl font-black uppercase tracking-tight leading-tight mb-3">
            {item.name}
          </h3>
          <StarRating rating={item.rating} />
          <p className="text-xs text-gray-400 mt-3 leading-relaxed flex-1">
            {item.description}
          </p>
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-2xl font-black font-serif italic text-[#d4ff00]">
              {item.price}
            </span>
            <Link 
              href={item.href}
              className="px-4 py-2 bg-[#ff5500] text-white text-xs font-bold uppercase tracking-wider border-2 border-[#ff5500] hover:bg-transparent hover:text-[#ff5500] transition-colors duration-150"
            >
              Order →
            </Link>
          </div>
        </div>
      </div>
    )}
  </div>
);

/* ── Mobile sidebar (full-screen overlay) ── */
interface MobileSidebarProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const MobileSidebarPreview: React.FC<MobileSidebarProps> = ({
  item,
  onClose,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Prevent SSR errors by only using createPortal on the client
  if (typeof document === "undefined") return null;
  
  const { createPortal } = require("react-dom");
  
  return createPortal(
    <div
      className={`fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] z-[9999] bg-[#1a1a1a] text-white flex flex-col transition-all duration-400 ease-in-out ${
        item
          ? "opacity-100 translate-x-0 pointer-events-auto"
          : "opacity-0 translate-x-full pointer-events-none"
      }`}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center border-2 border-white/30 font-black text-lg hover:bg-white hover:text-black transition-colors"
      >
        ✕
      </button>

      {item && (
        <>
          {/* Hero image */}
          <div className="relative w-full h-64 flex-shrink-0">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 px-8 py-6 overflow-y-auto">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">
              Chef&apos;s Pick
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-3">
              {item.name}
            </h2>
            <StarRating rating={item.rating} />
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              {item.description}
            </p>
            <div className="mt-6">
              <span className="text-4xl font-black font-serif italic text-[#d4ff00]">
                {item.price}
              </span>
            </div>
            <Link 
              href={item.href}
              onClick={onClose}
              className="mt-8 py-4 bg-[#ff5500] text-white text-center font-bold uppercase tracking-widest border-2 border-[#ff5500] hover:bg-transparent hover:text-[#ff5500] transition-colors duration-150"
            >
              Add to Order
            </Link>
          </div>
        </>
      )}
    </div>,
    document.body
  );
};
