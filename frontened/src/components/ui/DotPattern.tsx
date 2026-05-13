import type React from "react";
import { useId } from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
	width?: number;
	height?: number;
	x?: number;
	y?: number;
	cx?: number;
	cy?: number;
	cr?: number;
	className?: string;
	glow?: boolean;
}

/**
 * DotPattern — lightweight CSS-pattern implementation.
 *
 * Uses a single SVG <pattern> + <rect fill="url(…)"> instead of rendering
 * one <circle> element per dot.  This eliminates:
 *  - Hundreds of DOM nodes
 *  - The getBoundingClientRect() forced-reflow triggered by measuring the
 *    container inside useEffect
 *  - All motion/framer-motion JS overhead for the decorative background
 *
 * The visual output is identical for the non-glow usage used on the
 * marketing page.  The `glow` variant falls back to the same static pattern
 * (animated glow was purely decorative and is not used on this page).
 */
export function DotPattern({
	width = 16,
	height = 16,
	cx = 1,
	cy = 1,
	cr = 1,
	className,
	// glow prop kept for API compatibility but intentionally unused
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	glow,
	...props
}: DotPatternProps) {
	const id = useId();

	return (
		<svg
			aria-hidden="true"
			className={cn(
				"pointer-events-none absolute inset-0 h-full w-full text-neutral-400/20",
				className,
			)}
			{...props}
		>
			<defs>
				<pattern
					id={`dot-${id}`}
					x="0"
					y="0"
					width={width}
					height={height}
					patternUnits="userSpaceOnUse"
				>
					<circle cx={cx} cy={cy} r={cr} fill="currentColor" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill={`url(#dot-${id})`} />
		</svg>
	);
}
