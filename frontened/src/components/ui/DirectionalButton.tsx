"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface DirectionalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: "primary" | "secondary" | "accent";
	blobColor?: string;
	textColor?: string;
	backgroundColor?: string;
}

const VARIANT_CONFIGS = {
	primary: {
		bg: "bg-[#D4AF37]",
		text: "text-black",
		blob: "bg-white/40",
		shadow: "hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]",
	},
	secondary: {
		bg: "bg-transparent",
		text: "text-white",
		blob: "bg-[#D4AF37]/30",
		shadow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
	},
	accent: {
		bg: "bg-white",
		text: "text-black",
		blob: "bg-[#D4AF37]/30",
		shadow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]",
	},
};

/**
 * DirectionalButton
 * A premium button component inspired by Osmo Supply.
 * The hover highlight (blob) enters and exits based on the mouse direction.
 */
export const DirectionalButton: React.FC<DirectionalButtonProps> = ({
	children,
	variant,
	className = "",
	blobColor,
	textColor,
	backgroundColor,
	...props
}) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const blobRef = useRef<HTMLDivElement>(null);

	// Determine final colors based on variant or individual props
	const config = variant ? VARIANT_CONFIGS[variant] : null;
	const finalBg = backgroundColor || config?.bg || "bg-black";
	const finalText = textColor || config?.text || "text-white";
	const finalBlob = blobColor || config?.blob || "bg-[#CCFF00]";
	const finalShadow = config?.shadow || "hover:shadow-[0_0_20px_rgba(204,255,0,0.15)]";

	useEffect(() => {
		const button = buttonRef.current;
		const blob = blobRef.current;

		if (!button || !blob) return;

		// Initial state: hidden and scaled down
		gsap.set(blob, { scale: 0, opacity: 0 });

		const handleMouseEnter = (e: MouseEvent) => {
			const rect = button.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			// Determine which side the mouse entered from
			const sides = [
				{ side: "top", dist: y },
				{ side: "bottom", dist: rect.height - y },
				{ side: "left", dist: x },
				{ side: "right", dist: rect.width - x },
			];
			const closestSide = sides.reduce((prev, curr) => (prev.dist < curr.dist ? prev : curr));

			// Calculate starting position outside the button
			let startX = x;
			let startY = y;

			const offset = 40;
			if (closestSide.side === "top") startY = -offset;
			else if (closestSide.side === "bottom") startY = rect.height + offset;
			else if (closestSide.side === "left") startX = -offset;
			else if (closestSide.side === "right") startX = rect.width + offset;

			// Kill any ongoing animations
			gsap.killTweensOf(blob);

			// Animation: Enter from the calculated side
			gsap.set(blob, { x: startX, y: startY, scale: 0, opacity: 1 });
			gsap.to(blob, {
				x: x,
				y: y,
				scale: 1,
				duration: 0.5,
				ease: "power3.out",
			});
		};

		const handleMouseMove = (e: MouseEvent) => {
			const rect = button.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			// Smoothly track mouse position
			gsap.to(blob, {
				x: x,
				y: y,
				duration: 0.2,
				ease: "power1.out",
			});
		};

		const handleMouseLeave = (e: MouseEvent) => {
			const rect = button.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			// Determine which side the mouse is leaving from
			const sides = [
				{ side: "top", dist: y },
				{ side: "bottom", dist: rect.height - y },
				{ side: "left", dist: x },
				{ side: "right", dist: rect.width - x },
			];
			const closestSide = sides.reduce((prev, curr) => (prev.dist < curr.dist ? prev : curr));

			// Calculate exit position
			let endX = x;
			let endY = y;

			const offset = 80;
			if (closestSide.side === "top") endY = -offset;
			else if (closestSide.side === "bottom") endY = rect.height + offset;
			else if (closestSide.side === "left") endX = -offset;
			else if (closestSide.side === "right") endX = rect.width + offset;

			// Animation: Exit towards the departure side
			gsap.to(blob, {
				x: endX,
				y: endY,
				scale: 0,
				opacity: 0,
				duration: 0.5,
				ease: "power3.inOut",
			});
		};

		button.addEventListener("mouseenter", handleMouseEnter);
		button.addEventListener("mousemove", handleMouseMove);
		button.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			button.removeEventListener("mouseenter", handleMouseEnter);
			button.removeEventListener("mousemove", handleMouseMove);
			button.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<button
			ref={buttonRef}
			className={`
        relative overflow-hidden group
        px-8 py-3.5 rounded-full
        ${finalBg} ${finalText}
        font-medium text-sm tracking-tight
        border border-white/10
        transition-all duration-300
        ${finalShadow}
        active:scale-95
        ${className}
      `}
			{...props}
		>
			{/* Text content - ensured visibility and high contrast */}
			<span className="relative z-10 block pointer-events-none uppercase tracking-wider font-bold">
				{children}
			</span>

			{/* The directional blob - using blur and lower opacity for better text legibility */}
			<div
				ref={blobRef}
				className={`
          absolute top-0 left-0
          w-48 h-48 -mt-24 -ml-24
          rounded-full pointer-events-none
          blur-[40px]
          ${finalBlob}
          opacity-0
        `}
				style={{ willChange: "transform, opacity" }}
			/>
		</button>
	);
};
