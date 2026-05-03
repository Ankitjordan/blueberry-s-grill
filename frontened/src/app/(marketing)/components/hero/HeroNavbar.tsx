"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LuCherry, LuMenu } from "react-icons/lu";

function HeroNavbar() {
	const [isVisible, setIsVisible] = useState(true);
	const [isScrolled, setIsScrolled] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}

			if (currentScrollY > lastScrollY && currentScrollY > 50) {
				// Scrolling down
				setIsVisible(false);
			} else {
				// Scrolling up
				setIsVisible(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 font-inter transition-all duration-300 ${
				isVisible ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			<div
				className={`flex items-center justify-between p-3 md:px-8 transition-all duration-300 ${isScrolled ? "bg-white border-b border-gray-100 shadow-sm" : "bg-transparent border-b border-transparent shadow-none"}`}
			>
				{/* Menu Section - Left */}
				<div className="flex-1 flex justify-start">
					<button
						className={`transition-all duration-300 flex items-center gap-2 group ${isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-white/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] font-semibold"}`}
					>
						<LuMenu
							size={24}
							className="group-hover:scale-110 transition-transform"
						/>
						<span className="hidden md:block text-xs font-medium tracking-widest uppercase">
							Menu
						</span>
					</button>
				</div>

				{/* Logo Section - Center */}
				<div className="flex-1 flex justify-center">
					<Link
						href="/"
						className={`flex items-center gap-3 group transition-all duration-300 ${isScrolled ? "" : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"}`}
					>
						<div
							className={`transition-all duration-300 group-hover:scale-105 group-hover:-rotate-6 translate-y-0.5 ${isScrolled ? "text-[#0f172a]" : "text-white"}`}
						>
							<LuCherry size={28} />
						</div>
						<div className="flex flex-col -space-y-0.9">
							<span
								className={`font-bold text-sm md:text-base tracking-tighter uppercase leading-none transition-colors duration-300 ${isScrolled ? "text-[#0f172a]" : "text-white"}`}
							>
								Blueberry&apos;s
							</span>
							<span
								className={`font-bold text-[10px] md:text-[11px] tracking-[0.4em] uppercase transition-colors duration-300 ${isScrolled ? "text-gray-500" : "text-white/90"}`}
							>
								Grill
							</span>
						</div>
					</Link>
				</div>

				{/* Action Button - Right */}
				<div className="flex-1 flex justify-end">
					<Link
						href="#reservations"
						className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap border ${
							isScrolled
								? "bg-[#0f172a] text-white border-transparent hover:bg-gray-800 shadow-md hover:shadow-xl hover:-translate-y-0.5"
								: "bg-transparent text-white border-white/80 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] backdrop-blur-sm"
						}`}
					>
						Book Now
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default HeroNavbar;
