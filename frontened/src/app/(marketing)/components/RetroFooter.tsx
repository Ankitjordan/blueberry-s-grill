import Link from "next/link";
import type React from "react";

/* ── Data ── */

const NAV_LINKS = [
	{ label: "Menu", href: "#chefs-favorites" },
	{ label: "Our Story", href: "#vibe-check" },
	{ label: "Events", href: "#" },
	{ label: "Locations", href: "#" },
	{ label: "Privacy", href: "#" },
	{ label: "Terms", href: "#" },
];

const HOURS = [
	{ days: "Tue – Thu", time: "12pm – 11pm" },
	{ days: "Fri – Sat", time: "12pm – 2am" },
	{ days: "Sun", time: "11am – 9pm" },
	{ days: "Mon", time: "Closed (Vibe Reset Day)" },
];

const SOCIAL_LINKS = [
	{ label: "IG", href: "#" },
	{ label: "TW", href: "#" },
	{ label: "TK", href: "#" },
];

/* ── Component ── */

export const RetroFooter: React.FC = () => {
	return (
		<footer className="w-full bg-[#fdfaf5] border-t-4 border-black">
			{/* ── Main section ── */}
			<div className="w-full px-6 sm:px-12 pt-16 pb-12 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">
				{/* Brand block */}
				<div className="flex flex-col gap-5">
					<Link
						href="/"
						className="font-black text-4xl sm:text-5xl tracking-tighter uppercase leading-none inline-block text-black hover:text-[#ff5500] transition-colors duration-150"
					>
						BLUEBERRY<span className="text-[#ff5500]">★</span>GRILL
					</Link>
					<p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs">
						Your local spot for high-fidelity food and low-fidelity vibes.
						<br />
						Est. 2024 — but it feels like 1974.
					</p>

					{/* Mini tagline sticker */}
					<div className="inline-flex">
						<span className="px-4 py-1.5 bg-[#d4ff00] text-black font-bold text-xs uppercase tracking-widest border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
							OPEN TIL 2AM ★ NO RULES
						</span>
					</div>
				</div>

				{/* Nav links */}
				<div>
					<p className="text-[11px] font-black tracking-[0.2em] uppercase text-[#2d3bfe] mb-5">
						NAV
					</p>
					<ul className="space-y-3">
						{NAV_LINKS.map((link) => (
							<li key={link.label}>
								<Link
									href={link.href}
									className="text-sm font-medium text-gray-700 hover:text-[#ff5500] hover:underline decoration-2 underline-offset-4 transition-colors duration-150"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Hours */}
				<div>
					<p className="text-[11px] font-black tracking-[0.2em] uppercase text-[#2d3bfe] mb-5">
						HOURS
					</p>
					<ul className="space-y-3">
						{HOURS.map(({ days, time }) => (
							<li
								key={days}
								className="grid grid-cols-[90px_1fr] gap-2 text-sm"
							>
								<span className="font-bold text-black">{days}</span>
								<span className="text-gray-600">{time}</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* ── Bottom bar ── */}
			<div className="w-full border-t-2 border-black px-6 sm:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
				{/* Copyright */}
				<p className="text-[11px] font-bold tracking-widest uppercase text-gray-600">
					© 2025 BLUEBERRY&apos;S GRILL GROUP
				</p>

				{/* Credit */}
				<p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 text-center">
					COOKED UP WITH LOVE &amp; BUILT ON NEXT.JS
				</p>

				{/* Social */}
				<div className="flex items-center gap-4">
					{SOCIAL_LINKS.map((s) => (
						<Link
							key={s.label}
							href={s.href}
							className="text-[11px] font-black tracking-widest uppercase text-black hover:text-[#ff5500] transition-colors duration-150"
						>
							{s.label}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
};
