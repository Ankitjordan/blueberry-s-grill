"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, X, Navigation, Clock, Phone } from "lucide-react";
import { PremiumImage } from "@/components/ui/premium-image";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { DirectionalButton } from "@/components/ui/DirectionalButton";

export type LocationData = {
  id: number;
  name: string;
  tagline: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  hours: string;
  lat: number;
  lng: number;
};

type Props = {
  location: LocationData | null;
  onClose: () => void;
};

// Image presets matching the polaroids
const LOCATION_IMAGES: Record<number, string> = {
  1: "/images/enhanced_interior/interior-1.png",
  2: "/images/enhanced_interior/interior-2.png",
  3: "/images/enhanced_interior/interior-3.png",
  4: "/images/enhanced_interior/interior-4.png",
};

export function LocationSidebar({ location, onClose }: Props) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  /* close on Escape */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {location && (
        <>
          {/* Backdrop scrim */}
          <motion.div
            key="scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-30 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, rgba(15,23,42,0.08) 0%, transparent 60%)",
            }}
          />

          {/* Sidebar panel (Wider split-pane max-w-[440px]) */}
          <motion.aside
            key="sidebar"
            ref={sidebarRef}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 32,
              mass: 0.9,
            }}
            className="fixed right-0 top-0 z-40 h-full w-full max-w-[440px] flex flex-col overflow-hidden shadow-2xl"
            style={{
              background: "rgba(255,255,255,0.94)",
              borderLeft: "1px solid rgba(15,23,42,0.06)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label={`Location details for ${location.name}`}
          >
            {/* Elegant glowing border beam */}
            <BorderBeam 
              size={160} 
              duration={6} 
              borderWidth={1.5} 
              colorFrom="#D4AF37" 
              colorTo="#C5A028" 
            />

            {/* Top accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.18,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute top-0 left-0 right-0 h-[2px] origin-left"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #D4AF37 40%, #C5A028 60%, transparent)",
              }}
            />

            {/* Header */}
            <div className="flex items-center justify-between px-8 pt-10 pb-5 relative z-10 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.12,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-black">
                  Blueberry&apos;s Grill
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.35 }}
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 text-slate-400 hover:text-slate-900 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 cursor-pointer"
                aria-label="Close sidebar"
              >
                <X size={15} />
              </motion.button>
            </div>

            {/* Divider */}
            <div
              className="mx-8 mb-6 relative z-10 flex-shrink-0"
              style={{ height: "1px", background: "rgba(15,23,42,0.05)" }}
            />

            {/* Scrollable Body Content */}
            <div className="flex-1 overflow-y-auto pb-8 relative z-10">
              {/* Large Premium Photo (matching the London Office style card) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.16, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="px-8 mb-6"
              >
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-slate-100">
                  <PremiumImage
                    src={LOCATION_IMAGES[location.id]}
                    alt={location.name}
                    fill
                    sizes="376px"
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Location name block */}
              <div className="px-8 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-3 mb-3.5"
                >
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-full"
                    style={{
                      background: "rgba(212,175,55,0.08)",
                      border: "1px solid rgba(212,175,55,0.2)",
                    }}
                  >
                    <MapPin size={16} style={{ color: "#D4AF37" }} />
                  </span>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.15em]">
                      {location.city}, {location.state}
                    </p>
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.24,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-3xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-3"
                >
                  <span className="text-[#C5A028]">{location.name}</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.28,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-sm text-slate-500 font-medium leading-relaxed"
                >
                  {location.tagline}
                </motion.p>
              </div>

              {/* Info cards */}
              <div className="px-8 flex flex-col gap-3 mb-8">
                {[
                  {
                    icon: <Navigation size={14} />,
                    label: "Address",
                    value: location.address,
                    delay: 0.32,
                  },
                  {
                    icon: <Phone size={14} />,
                    label: "Reservations",
                    value: location.phone,
                    delay: 0.36,
                  },
                  {
                    icon: <Clock size={14} />,
                    label: "Hours",
                    value: location.hours,
                    delay: 0.40,
                  },
                ].map(({ icon, label, value, delay }) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-4 rounded-2xl px-5 py-4"
                    style={{
                      background: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(15,23,42,0.05)",
                    }}
                  >
                    <span
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#D4AF37" }}
                    >
                      {icon}
                    </span>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] mb-1">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-slate-800 leading-snug">
                        {value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Action Block */}
              <div className="px-8 mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.44,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <DirectionalButton
                    variant="accent"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 text-xs md:text-sm font-black"
                  >
                    <span>Get Directions</span>
                    <Navigation
                      size={14}
                      className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </DirectionalButton>

                  <button
                    onClick={onClose}
                    className="w-full mt-4 py-3 text-[10px] uppercase tracking-[0.25em] font-black text-slate-400 hover:text-[#D4AF37] transition-all duration-300 cursor-pointer"
                  >
                    Back to Globe
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Bottom warm gold glow */}
            <div
              className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.04) 0%, transparent 70%)",
              }}
            />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
