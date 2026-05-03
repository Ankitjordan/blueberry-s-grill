"use client";

import Image from "next/image";
import type React from "react";
import { useCallback, useEffect, useState } from "react";

const INTERIOR_IMAGES = [
	"/images/enhanced_interior/interior-1.png",
	"/images/enhanced_interior/interior-2.png",
	"/images/enhanced_interior/interior-3.png",
	"/images/enhanced_interior/interior-4.png",
	"/images/enhanced_interior/interior-5.png",
	"/images/enhanced_interior/interior-6.png",
	"/images/enhanced_interior/interior-7.png",
];

export const VibeSlider: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	const nextSlide = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % INTERIOR_IMAGES.length);
	}, []);

	useEffect(() => {
		if (isHovered) return;

		const interval = setInterval(nextSlide, 4000); // 4 seconds interval
		return () => clearInterval(interval);
	}, [isHovered, nextSlide]);

	return (
		<div
			className="relative w-full h-full min-h-[340px] md:min-h-full overflow-hidden group bg-black"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			aria-roledescription="carousel"
		>
			{INTERIOR_IMAGES.map((src, index) => (
				<div
					key={src}
					className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
						index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
					}`}
					aria-hidden={index !== currentIndex}
				>
					<Image
						src={src}
						alt={`Blueberry's Grill interior ${index + 1}`}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover object-center"
						priority={index === 0}
						loading={index === 0 ? "eager" : "lazy"}
					/>
				</div>
			))}

			{/* Subtle Indicators */}
			<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-1 z-20">
				{INTERIOR_IMAGES.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						aria-label={`Go to slide ${index + 1}`}
						className="w-8 h-8 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
					>
						<span
							className={`w-2 h-2 rounded-full transition-all duration-300 ${
								index === currentIndex
									? "bg-white scale-125 opacity-100"
									: "bg-white/50 hover:bg-white/75"
							}`}
						/>
					</button>
				))}
			</div>
		</div>
	);
};
