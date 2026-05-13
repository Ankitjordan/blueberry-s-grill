"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";

import { LOCATIONS } from "./Globe";
import type { LocationData } from "./LocationSidebar";
import { LocationSidebar } from "./LocationSidebar";

// ── CRITICAL: dynamic import MUST live at module scope, never inside a
//    component body. Defining it inside the component creates a new reference
//    on every render, which causes Next.js to unmount + remount the entire
//    Canvas — producing the "globe disappears" bug. ──────────────────────────
const Globe = dynamic(() => import("./Globe"), { ssr: false });

/**
 * GlobeScene — Client Component
 *
 * Owns the selected-location state and composes the interactive globe
 * with the cinematic sidebar and floating gold-accented navigation arrows.
 */
export function GlobeScene() {
	// Default to the first location (Myrtle Beach) on load
	const [selected, setSelected] = useState<LocationData | null>(LOCATIONS[0]);

	const handleSelect = useCallback((loc: LocationData | null) => {
		setSelected(loc);
	}, []);

	const handleClose = useCallback(() => {
		setSelected(null);
	}, []);

	// ── Previous & Next Cycling ──────────────────────────────────────────────
	const handlePrev = useCallback(() => {
		const currentIndex = selected
			? LOCATIONS.findIndex((l) => l.id === selected.id)
			: 0;
		const prevIndex = (currentIndex - 1 + LOCATIONS.length) % LOCATIONS.length;
		setSelected(LOCATIONS[prevIndex]);
	}, [selected]);

	const handleNext = useCallback(() => {
		const currentIndex = selected
			? LOCATIONS.findIndex((l) => l.id === selected.id)
			: 0;
		const nextIndex = (currentIndex + 1) % LOCATIONS.length;
		setSelected(LOCATIONS[nextIndex]);
	}, [selected]);

	return (
		<>
			{/* ── Floating Navigation Arrows (Top of Viewport) ──────────────────── */}
			<div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 bg-white/75 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-200/50 shadow-lg pointer-events-auto">
				<button
					onClick={handlePrev}
					className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-100 text-slate-600 hover:text-slate-900 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 shadow-sm cursor-pointer"
					aria-label="Previous location"
				>
					<ArrowLeft size={16} />
				</button>

				<span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 px-2 select-none min-w-[120px] text-center">
					{selected ? selected.city : "Select Location"}
				</span>

				<button
					onClick={handleNext}
					className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-100 text-slate-600 hover:text-slate-900 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 shadow-sm cursor-pointer"
					aria-label="Next location"
				>
					<ArrowRight size={16} />
				</button>
			</div>

			{/* ── Globe (fills entire viewport) ─────────────────────────────────── */}
			<div className="absolute inset-0 z-0">
				<Globe onSelectLocation={handleSelect} selectedLocation={selected} />
			</div>

			{/* ── Hint pill (shown when nothing is selected) ─────────────────────── */}
			<AnimatePresence>
				{!selected && (
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 8 }}
						transition={{ delay: 2, duration: 0.6 }}
						className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 pointer-events-none"
					>
						<div
							className="flex items-center gap-2.5 rounded-full px-5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
							style={{
								background: "rgba(255,255,255,0.75)",
								border: "1px solid rgba(15,23,42,0.06)",
								backdropFilter: "blur(12px)",
								WebkitBackdropFilter: "blur(12px)",
							}}
						>
							<span
								className="h-2 w-2 rounded-full animate-pulse"
								style={{
									background: "#D4AF37",
									boxShadow: "0 0 10px rgba(212,175,55,0.8)",
								}}
							/>
							<p className="text-[10px] font-black tracking-[0.25em] uppercase text-slate-800">
								4 locations — drag to explore
							</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* ── Sidebar ───────────────────────────────────────────────────────── */}
			<LocationSidebar location={selected} onClose={handleClose} />
		</>
	);
}
