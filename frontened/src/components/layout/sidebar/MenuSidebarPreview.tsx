"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import type { MenuItem } from "../header/MegaMenu";
import { StarRating } from "@/components/ui/StarRating";

/* ── Desktop sidebar (embedded in MegaMenu) ── */
interface DesktopSidebarProps {
  item: MenuItem | null;
}

export const DesktopSidebarPreview: React.FC<DesktopSidebarProps> = ({
  item,
}) => (
  <div
    className={`w-72 flex-shrink-0 border-l border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${
      item
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-6 pointer-events-none"
    }`}
  >
    {item && (
      <div className="h-full flex flex-col bg-white text-slate-900">
        <div className="relative w-full h-48 flex-shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="288px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" />
        </div>
        <div className="flex flex-col flex-1 p-5">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-1">
            Chef&apos;s Pick
          </p>
          <h3 className="text-xl font-black uppercase tracking-tight leading-tight mb-3">
            {item.name}
          </h3>
          <StarRating rating={item.rating} showNumber />
          <p className="text-xs text-slate-500 mt-3 leading-relaxed flex-1">
            {item.description}
          </p>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-2xl font-black font-serif italic text-[#D4AF37]">
              {item.price}
            </span>
            <Link 
              href={item.href}
              className="px-4 py-2 bg-[#D4AF37] text-white text-xs font-bold uppercase tracking-wider border-2 border-[#D4AF37] hover:bg-transparent hover:text-[#D4AF37] transition-colors duration-150"
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
      className={`fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] z-[9999] bg-white text-slate-900 flex flex-col transition-all duration-400 ease-in-out ${
        item
          ? "opacity-100 translate-x-0 pointer-events-auto"
          : "opacity-0 translate-x-full pointer-events-none"
      }`}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center border-2 border-slate-900/20 font-black text-lg hover:bg-slate-900 hover:text-white transition-colors"
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
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 px-8 py-6 overflow-y-auto">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-2">
              Chef&apos;s Pick
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-3">
              {item.name}
            </h2>
            <StarRating rating={item.rating} showNumber />
            <p className="text-slate-500 mt-4 text-sm leading-relaxed">
              {item.description}
            </p>
            <div className="mt-6">
              <span className="text-4xl font-black font-serif italic text-[#D4AF37]">
                {item.price}
              </span>
            </div>
            <Link 
              href={item.href}
              onClick={onClose}
              className="mt-8 py-4 bg-[#D4AF37] text-white text-center font-bold uppercase tracking-widest border-2 border-[#D4AF37] hover:bg-transparent hover:text-[#D4AF37] transition-colors duration-150"
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
