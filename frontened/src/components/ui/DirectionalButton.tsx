"use client";

import Link from "next/link";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

type BaseProps = {
	children: React.ReactNode;
	variant?: "primary" | "secondary" | "accent";
	blobColor?: string;
	textColor?: string;
	backgroundColor?: string;
	className?: string;
};

type ButtonProps = BaseProps &
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		href?: never;
	};

type AnchorProps = BaseProps &
	React.AnchorHTMLAttributes<HTMLAnchorElement> & {
		href: string;
	};

type DirectionalButtonProps = ButtonProps | AnchorProps;

const VARIANT_CONFIGS = {
	primary: {
		bg: "bg-[#D4AF37]",
		text: "text-black",
		blob: "bg-white/60",
		shadow: "hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]",
	},
	secondary: {
		bg: "bg-transparent",
		text: "text-slate-900",
		blob: "bg-[#D4AF37]/30",
		shadow: "hover:shadow-[0_0_20px_rgba(0,0,0,0.05)]",
	},
	accent: {
		bg: "bg-slate-900",
		text: "text-white",
		blob: "bg-[#D4AF37]/40",
		shadow: "hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]",
	},
};

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
	const anchorRef = useRef<HTMLAnchorElement>(null);
	const blobRef = useRef<HTMLDivElement>(null);

	const config = variant ? VARIANT_CONFIGS[variant] : null;
	const finalBg = backgroundColor || config?.bg || "bg-slate-900";
	const finalText = textColor || config?.text || "text-white";
	const finalBlob = blobColor || config?.blob || "bg-[#CCFF00]";
	const finalShadow = config?.shadow || "hover:shadow-[0_0_20px_rgba(204,255,0,0.15)]";

	useEffect(() => {
		const element = (buttonRef.current || anchorRef.current) as HTMLElement | null;
		const blob = blobRef.current;

		if (!element || !blob) return;

		gsap.set(blob, { scale: 0, opacity: 0 });

		// Use quickTo for high-performance mouse tracking
		const xTo = gsap.quickTo(blob, "x", { duration: 0.2, ease: "power1.out" });
		const yTo = gsap.quickTo(blob, "y", { duration: 0.2, ease: "power1.out" });

		// Cache the rect to avoid forced reflows on every mousemove.
		// Invalidated on mouseenter (once per hover) so it stays accurate.
		let cachedRect: DOMRect | null = null;

		const handleMouseEnter = (e: MouseEvent) => {
			// ONE getBoundingClientRect per hover — no reflow on mousemove
			cachedRect = element.getBoundingClientRect();
			const rect = cachedRect;

			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const sides = [
				{ side: "top", dist: y },
				{ side: "bottom", dist: rect.height - y },
				{ side: "left", dist: x },
				{ side: "right", dist: rect.width - x },
			];
			const closestSide = sides.reduce((prev, curr) => (prev.dist < curr.dist ? prev : curr));

			let startX = x;
			let startY = y;

			const offset = 40;
			if (closestSide.side === "top") startY = -offset;
			else if (closestSide.side === "bottom") startY = rect.height + offset;
			else if (closestSide.side === "left") startX = -offset;
			else if (closestSide.side === "right") startX = rect.width + offset;

			gsap.killTweensOf(blob);

			gsap.set(blob, { x: startX, y: startY, scale: 0, opacity: 1 });
			gsap.to(blob, {
				x,
				y,
				scale: 1,
				duration: 0.5,
				ease: "power3.out",
			});
		};

		const handleMouseMove = (e: MouseEvent) => {
			// Use cached rect — zero reflow cost
			if (!cachedRect) return;
			xTo(e.clientX - cachedRect.left);
			yTo(e.clientY - cachedRect.top);
		};

		const handleMouseLeave = (e: MouseEvent) => {
			// On leave we only need position relative to cached rect
			const rect = cachedRect || element.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const sides = [
				{ side: "top", dist: y },
				{ side: "bottom", dist: rect.height - y },
				{ side: "left", dist: x },
				{ side: "right", dist: rect.width - x },
			];
			const closestSide = sides.reduce((prev, curr) => (prev.dist < curr.dist ? prev : curr));

			let endX = x;
			let endY = y;

			const offset = 80;
			if (closestSide.side === "top") endY = -offset;
			else if (closestSide.side === "bottom") endY = rect.height + offset;
			else if (closestSide.side === "left") endX = -offset;
			else if (closestSide.side === "right") endX = rect.width + offset;

			cachedRect = null; // clear cache

			gsap.to(blob, {
				x: endX,
				y: endY,
				scale: 0,
				opacity: 0,
				duration: 0.5,
				ease: "power3.inOut",
			});
		};

		// Invalidate cached rect on resize (rare, cheap)
		const handleResize = () => { cachedRect = null; };

		element.addEventListener("mouseenter", handleMouseEnter);
		// passive: true tells the browser this handler never calls preventDefault,
		// allowing it to skip the compositor-blocking check on every event.
		element.addEventListener("mousemove", handleMouseMove, { passive: true });
		element.addEventListener("mouseleave", handleMouseLeave);
		window.addEventListener("resize", handleResize, { passive: true });

		return () => {
			element.removeEventListener("mouseenter", handleMouseEnter);
			element.removeEventListener("mousemove", handleMouseMove);
			element.removeEventListener("mouseleave", handleMouseLeave);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const sharedClasses = `
		relative overflow-hidden group
		px-8 py-3.5 rounded-full
		${finalBg} ${finalText}
		font-medium text-sm tracking-tight
		border border-black/5
		transition-all duration-300
		${finalShadow}
		active:scale-95
		inline-block text-center
		${className}
	`;

	const content = (
		<>
			<span className="relative z-10 block pointer-events-none uppercase tracking-wider font-bold">
				{children}
			</span>
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
		</>
	);

	if ("href" in props && props.href) {
		const { href, ...anchorProps } = props as AnchorProps;
		return (
			<Link href={href} className={sharedClasses} ref={anchorRef} {...anchorProps}>
				{content}
			</Link>
		);
	}

	return (
		<button ref={buttonRef} className={sharedClasses} {...(props as ButtonProps)}>
			{content}
		</button>
	);
};
