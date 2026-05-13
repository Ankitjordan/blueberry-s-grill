"use client";

import { type MotionStyle, motion, type Transition } from "motion/react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
	/**
	 * The size of the border beam.
	 */
	size?: number;
	/**
	 * The duration of the border beam.
	 */
	duration?: number;
	/**
	 * The delay of the border beam.
	 */
	delay?: number;
	/**
	 * The color of the border beam from.
	 */
	colorFrom?: string;
	/**
	 * The color of the border beam to.
	 */
	colorTo?: string;
	/**
	 * The motion transition of the border beam.
	 */
	transition?: Transition;
	/**
	 * The class name of the border beam.
	 */
	className?: string;
	/**
	 * The style of the border beam.
	 */
	style?: React.CSSProperties;
	/**
	 * Whether to reverse the animation direction.
	 */
	reverse?: boolean;
	/**
	 * The initial offset position (0-100).
	 */
	initialOffset?: number;
	/**
	 * The border width of the beam.
	 */
	borderWidth?: number;
}

const SIGNATURE_GOLD_FROM = "#D4AF37";
const SIGNATURE_GOLD_TO = "#C5A028";

export const BorderBeam = ({
	className,
	size = 120,
	delay = 0,
	duration = 5,
	colorFrom = SIGNATURE_GOLD_FROM,
	colorTo = SIGNATURE_GOLD_TO,
	transition,
	style,
	reverse = false,
	initialOffset = 0,
	borderWidth = 1.5,
}: BorderBeamProps) => {
	return (
		<div
			className="pointer-events-none absolute inset-0 rounded-[inherit]"
			style={
				{
					borderWidth: `${borderWidth}px`,
					borderStyle: "solid",
					borderColor: "transparent",
					maskImage:
						"linear-gradient(transparent, transparent), linear-gradient(#000, #000)",
					WebkitMaskImage:
						"linear-gradient(transparent, transparent), linear-gradient(#000, #000)",
					maskClip: "padding-box, border-box",
					WebkitMaskClip: "padding-box, border-box",
					maskComposite: "intersect",
					WebkitMaskComposite: "destination-in",
				} as React.CSSProperties
			}
		>
			<motion.div
				className={cn(
					"absolute aspect-square bg-gradient-to-l to-transparent",
					className,
				)}
				style={
					{
						width: size,
						offsetPath: `rect(0 auto auto 0 round ${size}px)`,
						"--tw-gradient-from": colorFrom,
						"--tw-gradient-to": colorTo,
						"--tw-gradient-stops":
							"var(--tw-gradient-from), var(--tw-gradient-to), transparent",
						...style,
					} as MotionStyle
				}
				initial={{ offsetDistance: `${initialOffset}%` }}
				animate={{
					offsetDistance: reverse
						? [`${100 - initialOffset}%`, `${-initialOffset}%`]
						: [`${initialOffset}%`, `${100 + initialOffset}%`],
				}}
				transition={{
					repeat: Infinity,
					ease: "linear",
					duration,
					delay: -delay,
					...transition,
				}}
			/>
		</div>
	);
};
