"use client";

import Link from "next/link";
import type React from "react";
import Image from "next/image";

/* ── Data ── */

const NAV_LINKS = [
  { label: "Menu", href: "#chefs-favorites" },
  { label: "Our Story", href: "#vibe-check" },
  { label: "Events", href: "#" },
  { label: "Locations", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

const HOURS = [
  { days: "Tue – Thu", time: "12pm – 11pm" },
  { days: "Fri – Sat", time: "12pm – 2am" },
  { days: "Sun", time: "11am – 9pm" },
  { days: "Mon", time: "Closed (Vibe Reset Day)" },
];

const SOCIAL_LINKS = [
  { label: "IG", href: "#" },
  { label: "TW", href: "#" },
  { label: "TK", href: "#" },
];

/* ── Component ── */

export const RetroFooter: React.FC = () => {
  return (
    <footer className="relative w-full bg-background overflow-hidden">
      <div className="relative z-10">
        {/* ── Main section ── */}
        <div className="w-full px-6 sm:px-12 pt-24 pb-20 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16 md:gap-24">
          {/* Brand block */}
          <div className="flex flex-col gap-8">
            <Link
              href="/"
              className="flex items-center gap-4 group transition-all duration-300"
            >
              <Image
                src="/favIcon.svg"
                alt="Blueberry's Grill Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="font-black text-4xl tracking-tighter uppercase leading-none text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                BLUEBERRY&apos;S <span className="text-[#D4AF37]">GRILL</span>
              </span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-medium">
              High-fidelity food and low-fidelity vibes since 2024. Crafted for
              the community, served with soul.
            </p>
            {/* Newsletter-ish area */}
            <div className="space-y-4 max-w-sm">
              <label
                htmlFor="newsletter-email"
                className="text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37] block"
              >
                Join the Club
              </label>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="bg-white/5 border border-white/10 px-4 py-3 rounded-full text-sm w-full focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Join
                </button>
              </form>
            </div>{" "}
          </div>

          {/* Nav links */}
          <div className="pt-4">
            <p className="text-[11px] font-black tracking-[0.3em] uppercase text-[#D4AF37] mb-8">
              EXPLORE
            </p>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-lg font-bold text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="pt-4">
            <p className="text-[11px] font-black tracking-[0.3em] uppercase text-[#D4AF37] mb-8">
              VISIT US
            </p>
            <ul className="space-y-6">
              {HOURS.map(({ days, time }) => (
                <li key={days} className="flex flex-col gap-1">
                  <span className="text-sm font-black uppercase tracking-widest text-white">
                    {days}
                  </span>
                  <span className="text-gray-400 font-medium">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="w-full border-t border-white/5 px-6 sm:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
            © {new Date().getFullYear()} BLUEBERRY&apos;S GRILL GROUP • ALL
            RIGHTS RESERVED
          </p>

          {/* Social icons (minimalist) */}
          <div className="flex items-center gap-8">
            {SOCIAL_LINKS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="text-[10px] font-black tracking-[0.3em] uppercase text-white hover:text-[#D4AF37] transition-all duration-300 hover:-translate-y-0.5"
              >
                {s.label}
              </Link>
            ))}
          </div>

          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
            PRIVACY • TERMS • COOKIES
          </p>
        </div>
      </div>
    </footer>
  );
};
