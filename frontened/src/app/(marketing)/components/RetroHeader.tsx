"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { RetroButton } from "@/components/ui/RetroButton";
import { MegaMenu, MENU_CATEGORIES, MenuItem } from "./MegaMenu";
import { MobileSidebarPreview } from "./MenuSidebarPreview";

/* ── Types ── */
interface NavLink {
  name: string;
  href: string;
}

const OTHER_NAV_LINKS: NavLink[] = [
  { name: "Vibe Check", href: "#vibe-check" },
  { name: "Events",     href: "#" },
  { name: "Locations",  href: "#" },
];

/* ── Component ── */

export const RetroHeader: React.FC = () => {
  const [isVisible,          setIsVisible]          = useState(true);
  const [lastScrollY,        setLastScrollY]        = useState(0);
  const [isScrolled,         setIsScrolled]         = useState(false);
  const [isMobileMenuOpen,   setIsMobileMenuOpen]   = useState(false);
  const [isMegaMenuOpen,     setIsMegaMenuOpen]     = useState(false);
  // Mobile accordion: which section is expanded ("menu" | null)
  const [mobileSection,      setMobileSection]      = useState<string | null>(null);
  // Mobile accordion: which category is expanded
  const [mobileCategory,     setMobileCategory]     = useState<string | null>(null);
  // Mobile sidebar preview
  const [mobileSidebarItem,  setMobileSidebarItem]  = useState<MenuItem | null>(null);

  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* — Scroll hide/show — */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
      if (y > lastScrollY && y > 100) {
        setIsVisible(false);
        setIsMegaMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(y);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  /* — Body scroll lock — */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  /* — Mega menu hover with debounce — */
  const openMegaMenu  = () => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setIsMegaMenuOpen(true);
  };
  const closeMegaMenu = () => {
    megaTimeoutRef.current = setTimeout(() => setIsMegaMenuOpen(false), 150);
  };

  /* — Mobile helpers — */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileSection(null);
    setMobileCategory(null);
  };
  const toggleMobileSection = (id: string) =>
    setMobileSection((prev) => (prev === id ? null : id));
  const toggleMobileCategory = (id: string) =>
    setMobileCategory((prev) => (prev === id ? null : id));

  /* — Header class — */
  const headerClass = [
    "w-full flex items-center justify-between py-4 px-6 sm:px-12",
    "fixed top-0 left-0 z-50",
    "border-b-2 border-black",
    "transition-all duration-300 ease-in-out",
    isVisible ? "translate-y-0" : "-translate-y-full",
    isScrolled || isMobileMenuOpen
      ? "bg-[#fdfaf5]/95 backdrop-blur-sm py-3"
      : "bg-[#fdfaf5]",
  ].join(" ");

  return (
    <>
      {/* ── Main header bar ── */}
      <header className={headerClass}>

        {/* Logo */}
        <div className="font-black text-2xl sm:text-3xl tracking-tighter uppercase relative z-50">
          <Link href="/" onClick={closeMobileMenu}>
            BLUEBERRY<span className="text-xl mx-1 align-middle text-[#ff5500]">★</span>GRILL
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8 font-bold text-sm tracking-wider uppercase">

          {/* Menu — mega menu trigger */}
          <div
            className="relative"
            onMouseEnter={openMegaMenu}
            onMouseLeave={closeMegaMenu}
          >
            <button
              aria-expanded={isMegaMenuOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 transition-colors duration-150 ${
                isMegaMenuOpen ? "text-[#ff5500]" : "hover:text-[#ff5500]"
              }`}
            >
              Menu
              <svg
                width="10" height="6" viewBox="0 0 10 6" fill="none"
                className={`transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Other links */}
          {OTHER_NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#ff5500] transition-colors duration-150"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4 relative z-50">
          <div className="hidden sm:block">
            <RetroButton variant="accent" className="text-xs px-4 py-2">
              Book a Table
            </RetroButton>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setIsMobileMenuOpen((p) => !p)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* ── Desktop Mega Menu ── */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onMouseEnter={openMegaMenu}
        onMouseLeave={closeMegaMenu}
      />

      {/* ── Mobile full-screen overlay ── */}
      <div
        className={`fixed inset-0 bg-[#fdfaf5] z-40 overflow-y-auto transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="pt-24 pb-12 px-8">

          {/* ── MENU accordion ── */}
          <div className="border-b-2 border-black">
            <button
              onClick={() => toggleMobileSection("menu")}
              className="w-full flex items-center justify-between py-5 text-4xl font-black uppercase tracking-tighter hover:text-[#ff5500] transition-colors"
            >
              Menu
              <svg
                width="20" height="12" viewBox="0 0 10 6" fill="none"
                className={`transition-transform duration-300 ${mobileSection === "menu" ? "rotate-180" : ""}`}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Categories accordion */}
            <div
              className={`overflow-hidden transition-all duration-400 ease-in-out ${
                mobileSection === "menu" ? "max-h-[800px] mb-4" : "max-h-0"
              }`}
            >
              {MENU_CATEGORIES.map((cat) => (
                <div key={cat.id} className="border-t border-black/10">
                  <button
                    onClick={() => toggleMobileCategory(cat.id)}
                    className="w-full flex items-center justify-between py-3 px-4 text-lg font-bold uppercase tracking-wide hover:text-[#ff5500] transition-colors"
                  >
                    {cat.label}
                    <svg
                      width="14" height="9" viewBox="0 0 10 6" fill="none"
                      className={`transition-transform duration-300 ${mobileCategory === cat.id ? "rotate-180" : ""}`}
                    >
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Category items */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileCategory === cat.id ? "max-h-[400px]" : "max-h-0"
                    }`}
                  >
                    <ul className="px-4 pb-4 space-y-2">
                      {cat.items.map((item) => (
                        <li key={item.name}>
                          <button
                            onClick={() => setMobileSidebarItem(item)}
                            className="w-full flex items-center justify-between py-1.5 border-b border-black/10 hover:text-[#ff5500] transition-colors"
                          >
                            <span className="font-bold text-sm">{item.name}</span>
                            <span className="font-black font-serif italic text-[#2d3bfe] text-sm">{item.price} →</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Other links ── */}
          {OTHER_NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className="block py-5 text-4xl font-black uppercase tracking-tighter border-b-2 border-black hover:text-[#ff5500] transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* CTA */}
          <div className="pt-10">
            <RetroButton variant="accent" onClick={closeMobileMenu}>
              Book a Table
            </RetroButton>
          </div>
        </div>

        {/* Decorative */}
        <div className="absolute bottom-8 right-8 font-black text-7xl opacity-[0.04] select-none pointer-events-none uppercase">
          VIBES
        </div>
      </div>

      {/* ── Mobile item preview sidebar ── */}
      <MobileSidebarPreview
        item={mobileSidebarItem}
        onClose={() => setMobileSidebarItem(null)}
      />
    </>
  );
};
