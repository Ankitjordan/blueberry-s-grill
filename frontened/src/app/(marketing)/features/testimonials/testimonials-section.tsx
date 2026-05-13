"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { DotPattern } from "@/components/ui/DotPattern";
import { StarRating } from "@/components/ui/StarRating";
import testimonialsData from "../../../../../public/data/testimonials.json";

interface Testimonial {
	name: string;
	rating: number;
	image: string;
	review: string;
}

const allTestimonials: Testimonial[] = testimonialsData as Testimonial[];
const selectedTestimonials = allTestimonials.slice(0, 4);

const galleryImages = [
	{
		src: "/images/enhanced_interior/interior-1.png",
		span: "col-span-2 row-span-1",
	},
	{
		src: "/images/enhanced_interior/interior-2.png",
		span: "col-span-1 row-span-2",
	},
	{ src: "/images/interior/interior_6.jpg", span: "col-span-1 row-span-1" },
	{
		src: "/images/enhanced_interior/interior-3.png",
		span: "col-span-1 row-span-1",
	},
	{ src: "/images/interior/interior_5.jpg", span: "col-span-1 row-span-2" },
	{
		src: "/images/enhanced_interior/interior-4.png",
		span: "col-span-2 row-span-1",
	},
	{ src: "/images/interior/interior_3.jpg", span: "col-span-1 row-span-1" },
	{ src: "/images/interior/interior_4.jpg", span: "col-span-1 row-span-1" },
	{
		src: "/images/enhanced_interior/interior-5.png",
		span: "col-span-3 row-span-1",
	},
	{ src: "/images/interior/interior_1.jpg", span: "col-span-1 row-span-1" },
	{
		src: "/images/enhanced_interior/interior-6.png",
		span: "col-span-1 row-span-1",
	},
	{ src: "/images/interior/interior_2.jpg", span: "col-span-1 row-span-1" },
	{
		src: "/images/enhanced_interior/interior-7.png",
		span: "col-span-2 row-span-1",
	},
	{ src: "/images/foods/food_10.jpg", span: "col-span-1 row-span-2" },
	{ src: "/images/interior/interior_11.jpg", span: "col-span-2 row-span-1" },
];

const DecorativeQuote = () => (
	<div className="absolute top-5 right-5 opacity-[0.04] pointer-events-none decorative-quote-icon">
		<svg
			width="48"
			height="48"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="text-[#D4AF37]"
		>
			<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H2.017V21H5.017Z" />
		</svg>
	</div>
);

interface TestimonialItemProps {
	testimonial: Testimonial;
	index: number;
	onReadMore: (t: Testimonial) => void;
}

const TestimonialItem = ({
	testimonial,
	index,
	onReadMore,
}: TestimonialItemProps) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ delay: index * 0.1, duration: 0.5 }}
		className="group relative bg-white border border-slate-100 p-5 rounded-[1.75rem] shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-0.5 flex flex-col testimonial-card"
	>
		<DecorativeQuote />

		<div className="flex items-center gap-3 mb-4">
			<div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#D4AF37]/20 shrink-0">
				<Image
					src={testimonial.image}
					alt={testimonial.name}
					fill
					className="object-cover"
					sizes="40px"
				/>
			</div>
			<div className="min-w-0">
				<h4 className="font-black text-slate-900 uppercase tracking-tight text-[11px] truncate">
					{testimonial.name}
				</h4>
				<StarRating rating={testimonial.rating} />
			</div>
		</div>

		<p className="text-slate-600 text-sm leading-relaxed font-medium italic line-clamp-3 relative z-10 flex-1">
			&quot;{testimonial.review}&quot;
		</p>

		<button
			onClick={() => onReadMore(testimonial)}
			className="mt-3 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] border-b border-transparent hover:border-[#D4AF37] transition-all w-fit"
		>
			Read Full Review
		</button>
	</motion.div>
);

interface GalleryTileProps {
	src: string;
	span: string;
	index: number;
}

const GalleryTile = ({ src, span, index }: GalleryTileProps) => (
	<div
		className={`relative group overflow-hidden rounded-2xl shadow-lg ${span} gallery-tile`}
		style={{ animationDelay: `${(index % 8) * 60}ms` }}
	>
		<Image
			src={src}
			alt={`Blueberry's Grill ambience ${index + 1}`}
			fill
			loading="lazy"
			className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
			sizes="(max-width: 768px) 100vw, (max-width: 1280px) 55vw, 600px"
		/>
		<div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent visual-depth-gradient" />
		<div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5 hover-reveal-overlay">
			<span className="text-white/90 text-[10px] font-black uppercase tracking-[0.25em] translate-y-3 group-hover:translate-y-0 transition-transform duration-500 block">
				Blueberry&apos;s Grill
			</span>
		</div>
	</div>
);

const TestimonialsHeadingLeft = () => (
	<div className="space-y-4 text-heading-block">
		<motion.div
			initial={{ opacity: 0, x: -16 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			className="inline-block px-4 py-1.5 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-lg shadow-[#D4AF37]/20"
		>
			Guest Stories
		</motion.div>

		<motion.h2
			id="testimonials-title"
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: 0.1, duration: 0.7 }}
			className="text-slate-900 font-black text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9]"
		>
			CRAFTING MEMORIES
			<br />
			<span className="text-[#D4AF37]">ONE PLATE AT A TIME</span>
		</motion.h2>

		<motion.p
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay: 0.25 }}
			className="text-slate-500 text-base leading-relaxed font-medium max-w-md"
		>
			Real stories from guests who&apos;ve made Blueberry&apos;s Grill
			a part of their most cherished moments.
		</motion.p>
	</div>
);

interface TestimonialsListProps {
	testimonials: Testimonial[];
	onReadMore: (t: Testimonial) => void;
}

const TestimonialsList = ({
	testimonials,
	onReadMore,
}: TestimonialsListProps) => (
	<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 testimonials-grid">
		{testimonials.map((t, idx) => (
			<TestimonialItem
				key={idx}
				index={idx}
				testimonial={t}
				onReadMore={onReadMore}
			/>
		))}
	</div>
);

interface GalleryRightColumnProps {
	images: Array<{ src: string; span: string }>;
}

const GalleryRightColumn = ({ images }: GalleryRightColumnProps) => (
	<div className="w-full lg:w-[55%] self-stretch relative overflow-hidden min-h-[600px] gallery-column">
		<div
			className="absolute inset-0 overflow-hidden p-3 gap-3"
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)",
				gridAutoRows: "200px",
			}}
		>
			{images.map((img, idx) => (
				<GalleryTile
					key={idx}
					src={img.src}
					span={img.span}
					index={idx}
				/>
			))}
		</div>
	</div>
);

interface FullReviewModalProps {
	testimonial: Testimonial | null;
	onClose: () => void;
}

const FullReviewModal = ({ testimonial, onClose }: FullReviewModalProps) => {
	if (!testimonial) return null;
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-black/40 review-modal-overlay"
				onClick={onClose}
			>
				<motion.div
					initial={{ scale: 0.9, opacity: 0, y: 20 }}
					animate={{ scale: 1, opacity: 1, y: 0 }}
					exit={{ scale: 0.9, opacity: 0, y: 20 }}
					className="bg-white rounded-[2.5rem] p-8 md:p-10 max-w-xl w-full relative shadow-2xl overflow-hidden review-modal-content"
					onClick={(e) => e.stopPropagation()}
				>
					<button
						onClick={onClose}
						aria-label="close-modal"
						className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 transition-colors"
					>
						<IoClose className="text-xl text-slate-400" />
					</button>

					<div className="flex items-center gap-5 mb-6">
						<div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-[#D4AF37]/20 shadow-xl shrink-0">
							<Image
								src={testimonial.image}
								alt={testimonial.name}
								fill
								className="object-cover"
								sizes="64px"
							/>
						</div>
						<div>
							<h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
								{testimonial.name}
							</h3>
							<StarRating rating={testimonial.rating} />
							<span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] mt-1 block">
								Verified Guest
							</span>
						</div>
					</div>

					<div className="relative">
						<div className="absolute -top-4 -left-4 opacity-[0.05] pointer-events-none">
							<svg
								width="100"
								height="100"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="text-[#D4AF37]"
							>
								<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H2.017V21H5.017Z" />
							</svg>
						</div>
						<p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium italic relative z-10">
							&quot;{testimonial.review}&quot;
						</p>
					</div>

					<div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
						<span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
							Experience at Blueberry&apos;s Grill
						</span>
						<div className="w-10 h-px bg-[#D4AF37]/30" />
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export function TestimonialsSection() {
	const [selectedTestimonial, setSelectedTestimonial] =
		useState<Testimonial | null>(null);

	return (
		<section
			className="relative w-full bg-[#fafafa] overflow-hidden border-t border-slate-100"
			aria-labelledby="testimonials-title"
		>
			<DotPattern
				className="text-slate-900/[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
				width={32}
				height={32}
				cx={1}
				cy={1}
				cr={1}
			/>

			<div className="flex flex-col lg:flex-row relative z-10">
				<div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
					<div className="max-w-xl mx-auto lg:mx-0 space-y-10">
						<TestimonialsHeadingLeft />
						<TestimonialsList
							testimonials={selectedTestimonials}
							onReadMore={setSelectedTestimonial}
						/>
					</div>
				</div>

				<GalleryRightColumn images={galleryImages} />
			</div>

			<FullReviewModal
				testimonial={selectedTestimonial}
				onClose={() => setSelectedTestimonial(null)}
			/>
		</section>
	);
}
