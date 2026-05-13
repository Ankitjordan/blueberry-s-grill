"use client";

import {
	ArrowLeft,
	ChevronLeft,
	ChevronRight,
	Maximize2,
	X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { DotPattern } from "@/components/ui/DotPattern";
import { PremiumImage } from "@/components/ui/premium-image";

interface GalleryImage {
	src: string;
	caption: string;
	aspect: string;
}

interface GalleryData {
	title: string;
	locationName: string;
	description: string;
	images: GalleryImage[];
}

const GALLERY_DATA: Record<string, GalleryData> = {
	"myrtle-beach": {
		title: "Lightbox Setup",
		locationName: "Myrtle Beach, SC",
		description:
			"Witness the coastal warmth and vintage wooden textures of our original flagship dining room.",
		images: [
			{
				src: "/images/enhanced_interior/interior-1.png",
				caption: "Our spacious sunlit dining floor",
				aspect: "aspect-[4/5]",
			},
			{
				src: "/images/enhanced_interior/interior-6.png",
				caption: "Warm amber vintage filament grids",
				aspect:
					"aspect-[3/4] md:scale-105 shadow-[0_20px_40px_rgba(15,23,42,0.06)]",
			},
			{
				src: "/images/enhanced_interior/interior-5.png",
				caption: "Handcrafted wooden booths",
				aspect: "aspect-[4/3]",
			},
		],
	},
	"north-myrtle-beach": {
		title: "Lightbox Setup",
		locationName: "North Myrtle Beach, SC",
		description:
			"Relaxed coastal aesthetic featuring bright white accents, custom wood panels, and hanging greens.",
		images: [
			{
				src: "/images/enhanced_interior/interior-2.png",
				caption: "Hanging plants & bright ivory tables",
				aspect: "aspect-[4/5]",
			},
			{
				src: "/images/enhanced_interior/interior-6.png",
				caption: "Symmetrical modern frame displays",
				aspect:
					"aspect-[3/4] md:scale-105 shadow-[0_20px_40px_rgba(15,23,42,0.06)]",
			},
			{
				src: "/images/enhanced_interior/interior-5.png",
				caption: "Cozy leather-backed seating corner",
				aspect: "aspect-[4/3]",
			},
		],
	},
	wilmington: {
		title: "Lightbox Setup",
		locationName: "Wilmington, NC",
		description:
			"Industrial chic meets southern brickwork on the historic banks of the Cape Fear River.",
		images: [
			{
				src: "/images/enhanced_interior/interior-3.png",
				caption: "Exposed brick arches & brass light trees",
				aspect: "aspect-[4/5]",
			},
			{
				src: "/images/enhanced_interior/interior-6.png",
				caption: "Hanging glass globe light installations",
				aspect:
					"aspect-[3/4] md:scale-105 shadow-[0_20px_40px_rgba(15,23,42,0.06)]",
			},
			{
				src: "/images/enhanced_interior/interior-5.png",
				caption: "Polished oak bartop & stools",
				aspect: "aspect-[4/3]",
			},
		],
	},
	london: {
		title: "Lightbox Setup",
		locationName: "London, UK",
		description:
			"Contemporary European luxury featuring velvet partitions, gold-trimmed grids, and clean white marble.",
		images: [
			{
				src: "/images/enhanced_interior/interior-4.png",
				caption: "Sleek velvet banquet dining grids",
				aspect: "aspect-[4/5]",
			},
			{
				src: "/images/enhanced_interior/interior-5.png",
				caption: "Polished golden chandelier arrays",
				aspect:
					"aspect-[3/4] md:scale-105 shadow-[0_20px_40px_rgba(15,23,42,0.06)]",
			},
			{
				src: "/images/enhanced_interior/interior-6.png",
				caption: "Fine-art architectural canvas framing",
				aspect: "aspect-[4/3]",
			},
		],
	},
};

interface GalleryGridProps {
	data: GalleryData;
	onOpen: (index: number) => void;
}

const GalleryGrid = ({ data, onOpen }: GalleryGridProps) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center mt-12">
			{data.images.map((img, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: index * 0.15,
						duration: 0.8,
						ease: [0.16, 1, 0.3, 1],
					}}
					className={`group relative overflow-hidden rounded-[8px] bg-white border border-slate-200/50 p-2.5 shadow-[0_12px_36px_rgba(15,23,42,0.03)] cursor-pointer ${img.aspect} transition-all duration-500 hover:shadow-[0_24px_50px_rgba(15,23,42,0.08)]`}
					onClick={() => onOpen(index)}
				>
					<div className="relative w-full h-full overflow-hidden rounded-[4px] bg-slate-50">
						<PremiumImage
							src={img.src}
							alt={img.caption}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
							className="object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
							priority={index === 0}
						/>

						<div className="absolute inset-0 bg-slate-950/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
							<div className="w-11 h-11 rounded-full bg-white/95 shadow-lg flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 ease-out text-slate-800">
								<Maximize2 size={16} />
							</div>
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
};

interface GalleryLightboxProps {
	data: GalleryData;
	activeIndex: number | null;
	onPrev: () => void;
	onNext: () => void;
	onClose: () => void;
}

const GalleryLightbox = ({
	data,
	activeIndex,
	onPrev,
	onNext,
	onClose,
}: GalleryLightboxProps) => {
	return (
		<AnimatePresence>
			{activeIndex !== null && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 flex flex-col justify-between bg-slate-950/95 backdrop-blur-2xl p-6 md:p-12 pointer-events-auto"
				>
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_50%)] pointer-events-none" />

					<div className="relative z-10 flex items-center justify-between w-full select-none">
						<div className="flex flex-col">
							<span className="text-[10px] font-black tracking-[0.25em] text-[#D4AF37] uppercase">
								{data.locationName}
							</span>
							<span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-1">
								Spatial Preview Mode
							</span>
						</div>

						<button
							onClick={onClose}
							className="group flex items-center justify-center w-12 h-12 rounded-full border border-slate-800 hover:border-[#D4AF37] text-slate-400 hover:text-white transition-all duration-300 cursor-pointer"
							aria-label="Close Lightbox"
						>
							<X
								size={18}
								className="group-hover:rotate-90 transition-transform duration-300"
							/>
						</button>
					</div>

					<div className="relative flex-1 w-full max-w-5xl mx-auto flex items-center justify-center my-6">
						<button
							onClick={onPrev}
							className="absolute left-4 z-20 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-slate-800/60 hover:border-[#D4AF37] bg-slate-900/40 text-slate-400 hover:text-white transition-all duration-300 cursor-pointer"
							aria-label="Previous slide"
						>
							<ChevronLeft size={24} />
						</button>

						<AnimatePresence mode="wait">
							<motion.div
								key={activeIndex}
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 1.02 }}
								transition={{ duration: 0.4, ease: "easeOut" }}
								className="relative w-full h-[55vh] md:h-[65vh] rounded border border-slate-800/40 bg-slate-900/50 overflow-hidden shadow-2xl"
							>
								<PremiumImage
									src={data.images[activeIndex].src}
									alt={data.images[activeIndex].caption}
									fill
									sizes="(max-width: 1024px) 100vw, 1024px"
									className="object-contain p-2.5"
									priority
								/>
							</motion.div>
						</AnimatePresence>

						<button
							onClick={onNext}
							className="absolute right-4 z-20 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-slate-800/60 hover:border-[#D4AF37] bg-slate-900/40 text-slate-400 hover:text-white transition-all duration-300 cursor-pointer"
							aria-label="Next slide"
						>
							<ChevronRight size={24} />
						</button>
					</div>

					<div className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-between border-t border-slate-900 pt-6 select-none">
						<div className="flex items-center gap-3">
							<span className="text-[11px] font-black text-[#D4AF37] tracking-[0.15em]">
								{String(activeIndex + 1).padStart(2, "0")}
							</span>
							<span className="text-[9px] font-black text-slate-600 tracking-widest">
								//
							</span>
							<span className="text-[11px] font-black text-slate-400 tracking-[0.15em]">
								{String(data.images.length).padStart(2, "0")}
							</span>
						</div>

						<AnimatePresence mode="wait">
							<motion.p
								key={activeIndex}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.25 }}
								className="text-xs md:text-sm font-bold text-white uppercase tracking-wider text-center"
							>
								{data.images[activeIndex].caption}
							</motion.p>
						</AnimatePresence>

						<div className="hidden md:block">
							<span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em]">
								Use Arrow Keys to Navigate
							</span>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

interface GalleryLoadingOverlayProps {
	loading: boolean;
}

const GalleryLoadingOverlay = ({ loading }: GalleryLoadingOverlayProps) => {
	return (
		<AnimatePresence>
			{loading && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#faf5ee]"
				>
					<DotPattern
						className="text-slate-900/[0.04] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
						width={32}
						height={32}
						cx={1}
						cy={1}
						cr={1}
					/>

					<div className="flex flex-col items-center gap-6">
						<div className="relative w-12 h-12">
							<div className="absolute inset-0 rounded-full border-[2.5px] border-slate-200/50" />
							<div className="absolute inset-0 rounded-full border-[2.5px] border-t-[#D4AF37] animate-spin" />
						</div>

						<div className="flex flex-col items-center gap-1.5 text-center select-none">
							<h2 className="text-[10px] font-black uppercase tracking-[0.35em] text-[#D4AF37]">
								Loading Experience
							</h2>
							<p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">
								Preparing Spatial Gallery Preset
							</p>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

type PageProps = {
	params: Promise<{ gallery: string }>;
};

export default function GalleryPage({ params }: PageProps) {
	const { gallery } = React.use(params);
	const data = GALLERY_DATA[gallery] || GALLERY_DATA["myrtle-beach"];
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 950);
		return () => clearTimeout(timer);
	}, []);

	const handlePrev = useCallback(() => {
		if (activeIndex === null) return;
		setActiveIndex((activeIndex - 1 + data.images.length) % data.images.length);
	}, [activeIndex, data.images.length]);

	const handleNext = useCallback(() => {
		if (activeIndex === null) return;
		setActiveIndex((activeIndex + 1) % data.images.length);
	}, [activeIndex, data.images.length]);

	const handleClose = useCallback(() => {
		setActiveIndex(null);
	}, []);

	useEffect(() => {
		if (activeIndex === null) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") handleClose();
			if (e.key === "ArrowLeft") handlePrev();
			if (e.key === "ArrowRight") handleNext();
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [activeIndex, handleClose, handlePrev, handleNext]);

	return (
		<main className="relative min-h-screen bg-[#faf5ee] text-slate-900 pb-24 selection:bg-[#D4AF37]/20 selection:text-slate-900 overflow-hidden">
			<DotPattern
				className="text-slate-950/[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
				width={32}
				height={32}
				cx={1}
				cy={1}
				cr={1}
			/>

			<header className="sticky top-0 z-30 w-full bg-[#faf5ee]/80 backdrop-blur-md border-b border-slate-200/40 px-6 py-4 md:px-12 flex items-center justify-between">
				<Link
					href="/locations"
					className="inline-flex items-center gap-2 group text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-slate-950 transition-colors duration-300"
				>
					<ArrowLeft
						size={14}
						className="group-hover:-translate-x-1 transition-transform duration-300"
					/>
					Back to Globe
				</Link>
				<span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">
					BLUEBERRY&apos;S GRILL — SPATIAL PRESETS
				</span>
			</header>

			<div className="max-w-6xl mx-auto px-6 md:px-12 mt-20">
				<div className="max-w-2xl mb-12">
					<div className="inline-flex items-center gap-2.5 mb-5">
						<span className="h-px w-5 bg-[#D4AF37]" />
						<span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.25em]">
							{data.locationName}
						</span>
					</div>
					<h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.9] text-slate-900 mb-6">
						{data.title}
					</h1>
					<p className="text-slate-500 text-sm leading-relaxed max-w-lg font-medium">
						{data.description}
					</p>
				</div>

				<GalleryGrid data={data} onOpen={setActiveIndex} />
			</div>

			<GalleryLightbox
				data={data}
				activeIndex={activeIndex}
				onPrev={handlePrev}
				onNext={handleNext}
				onClose={handleClose}
			/>

			<GalleryLoadingOverlay loading={loading} />
		</main>
	);
}
