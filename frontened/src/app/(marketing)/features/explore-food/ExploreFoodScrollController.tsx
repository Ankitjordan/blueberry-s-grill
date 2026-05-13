"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import type React from "react";
import { memo, useLayoutEffect, useRef } from "react";
import { useTransitionNavigation } from "@/components/transition-provider";
import { DirectionalButton } from "@/components/ui/DirectionalButton";

const initializeGsapForClient = () => {
	if (typeof window !== "undefined") {
		gsap.registerPlugin(ScrollTrigger);
	}
};

const optimizeGsapTickerForVisibility = () => {
	if (typeof window !== "undefined") {
		document.addEventListener("visibilitychange", () => {
			if (document.hidden) {
				gsap.ticker.sleep();
			} else {
				gsap.ticker.wake();
			}
		});
	}
};

initializeGsapForClient();
optimizeGsapTickerForVisibility();

const SCROLL_PER_CARD = 700;
const HOLD_PER_CARD = 200;
const SLIDE_DUR = 1.4;
const HOLD_DUR = 0.7;
const PUSH_SCALE = 0.04;
const PUSH_OPACITY = 0.14;
const PUSH_Y = -20;

interface FoodSection {
	id: string;
	title: string;
	subtitle: string;
	tag: string;
	description: string;
	image: string;
	href: string;
	rotate: string;
}

const CardFace = memo(
	({ section, index }: { section: FoodSection; index: number }) => {
		const isReversed = index % 2 === 1;
		const { navigateWithTransition } = useTransitionNavigation();

		return (
			<div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
				<div
					className={`flex flex-col justify-center gap-5 md:gap-7
          px-7 py-10 sm:px-10 md:px-14 lg:px-16 xl:px-20
          ${isReversed ? "lg:order-2" : "lg:order-1"}`}
				>
					<div className="inline-flex items-center gap-2 w-fit">
						<span className="h-px w-5 bg-[#D4AF37]" />
						<span className="text-[#D4AF37] text-[9px] md:text-[11px] font-black uppercase tracking-[0.25em]">
							{section.tag}
						</span>
					</div>

					<h2
						className="font-black uppercase tracking-tighter leading-[0.88]"
						style={{ fontSize: "clamp(2rem, 6.5vw, 7.5rem)" }}
					>
						<span className="text-[#C5A028] block">{section.title}</span>
						<span className="text-slate-900">{section.subtitle}</span>
					</h2>

					<p
						className="text-slate-600 font-medium leading-relaxed
          text-sm md:text-base lg:text-lg max-w-md
          line-clamp-3 md:line-clamp-none"
					>
						{section.description}
					</p>

					<div>
						<DirectionalButton
							variant="primary"
							className="w-full sm:w-auto min-w-[200px] md:min-w-[240px]
              text-xs md:text-sm py-3 md:py-5 rounded-full"
							aria-label={`Explore our ${section.id} menu`}
							onClick={() =>
								navigateWithTransition(section.href, section.title)
							}
						>
							Explore {section.id}
						</DirectionalButton>
					</div>
				</div>

				<div
					className={`relative flex items-center justify-center overflow-hidden
          min-h-[220px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-0
          ${isReversed ? "lg:order-1" : "lg:order-2"}`}
				>
					<div
						className="absolute inset-0 pointer-events-none"
						aria-hidden
						style={{
							background:
								"radial-gradient(ellipse 65% 55% at 50% 55%, rgba(212,175,55,0.18), transparent 72%)",
						}}
					/>
					<div className={`relative w-full h-full ${section.rotate}`}>
						<Image
							src={section.image}
							alt={section.title}
							fill
							className="object-contain
              scale-75 sm:scale-90 md:scale-95 lg:scale-[1.05]"
							sizes="(max-width: 640px) 80vw, (max-width: 1024px) 55vw, 44vw"
							priority={index === 0}
						/>
					</div>
				</div>
			</div>
		);
	},
);
CardFace.displayName = "CardFace";

const cardAnimationStyles = (idx: number): React.CSSProperties => ({
	zIndex: (idx + 1) * 10,
	backfaceVisibility: "hidden",
	WebkitBackfaceVisibility: "hidden",
	transformOrigin: "center top",
	willChange: "transform, opacity",
});

export const ExploreFoodScrollController = ({
	sections,
}: {
	sections: readonly FoodSection[];
}) => {
	const outerRef = useRef<HTMLDivElement>(null);
	const pinnedRef = useRef<HTMLDivElement>(null);
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

	useLayoutEffect(() => {
		if (typeof window === "undefined") return;

		const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
		const n = cards.length;
		if (n === 0 || !pinnedRef.current || !outerRef.current) return;

		const ctx = gsap.context(() => {
			gsap.set(cards[0], { y: "0%", scale: 1, opacity: 1, force3D: true });
			if (n > 1) {
				gsap.set(cards.slice(1), {
					y: "105%",
					scale: 1,
					opacity: 1,
					force3D: true,
				});
			}

			const tl = gsap.timeline({ defaults: { ease: "none" } });

			let cursor = 0;

			for (let i = 1; i < n; i++) {
				const incomingCard = cards[i];

				const slideLabel = `slide-${i}`;
				tl.addLabel(slideLabel, cursor);

				tl.fromTo(
					incomingCard,
					{ y: "105%" },
					{
						y: "0%",
						duration: SLIDE_DUR,
						ease: "power2.out",
						force3D: true,
					},
					slideLabel,
				);

				for (let prev = 0; prev < i; prev++) {
					const depth = i - prev;
					tl.to(
						cards[prev],
						{
							scale: Math.max(0.82, 1 - depth * PUSH_SCALE),
							opacity: Math.max(0.28, 1 - depth * PUSH_OPACITY),
							y: `${depth * PUSH_Y}px`,
							duration: SLIDE_DUR,
							ease: "power2.out",
							force3D: true,
						},
						slideLabel,
					);
				}

				cursor += SLIDE_DUR;

				if (i < n - 1) {
					tl.to({}, { duration: HOLD_DUR }, cursor);
					cursor += HOLD_DUR;
				}
			}

			tl.to({}, { duration: HOLD_DUR }, cursor);
			cursor += HOLD_DUR;

			const totalScrollDist = (n - 1) * SCROLL_PER_CARD + n * HOLD_PER_CARD;

			ScrollTrigger.create({
				trigger: outerRef.current!,
				pin: pinnedRef.current!,
				start: "top top",
				end: `+=${totalScrollDist}`,
				scrub: 2.2,
				anticipatePin: 1,
				animation: tl,
				invalidateOnRefresh: true,
			});
		}, outerRef);

		return () => ctx.revert();
	}, [sections]);

	const n = sections.length;
	const totalScrollDist = (n - 1) * SCROLL_PER_CARD + n * HOLD_PER_CARD;
	const outerHeight = `calc(100vh + ${totalScrollDist}px)`;

	return (
		<div
			ref={outerRef}
			style={{ height: outerHeight }}
			className="relative w-full"
		>
			<div
				ref={pinnedRef}
				className="w-full h-screen flex items-center justify-center
          px-3 sm:px-5 lg:px-8 overflow-hidden"
			>
				<div className="relative w-full h-[90vh] max-w-[1800px]">
					{sections.map((section, idx) => (
						<div
							key={section.id}
							ref={(el) => {
								cardRefs.current[idx] = el;
							}}
							className="absolute inset-0 w-full h-full
                bg-white rounded-[28px] md:rounded-[40px]
                border border-slate-200 overflow-hidden
                shadow-[0_8px_60px_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.02)]"
							style={cardAnimationStyles(idx)}
						>
							<div className="absolute inset-0 grain-overlay opacity-[0.07] pointer-events-none z-0" />
							<CardFace section={section} index={idx} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
