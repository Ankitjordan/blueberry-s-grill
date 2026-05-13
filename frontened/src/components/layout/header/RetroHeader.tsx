"use client";

import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { DirectionalButton } from "@/components/ui/DirectionalButton";
import { MobileSidebarPreview } from "../sidebar/MenuSidebarPreview";
import { MENU_CATEGORIES, MegaMenu, type MenuItem } from "./MegaMenu";

interface NavLink {
	name: string;
	href: string;
}

const OTHER_NAV_LINKS: NavLink[] = [
	{ name: "Vibe Check", href: "#vibe-check" },
	{ name: "Events", href: "#" },
	{ name: "Locations", href: "/locations" },
];

export const RetroHeader: React.FC = () => {
	const [isVisible, setIsVisible] = useState(true);
	const lastScrollY = useRef(0);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
	const [mobileSection, setMobileSection] = useState<string | null>(null);
	const [mobileCategory, setMobileCategory] = useState<string | null>(null);
	const [mobileSidebarItem, setMobileSidebarItem] = useState<MenuItem | null>(
		null,
	);

	const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		const onScroll = () => {
			const y = window.scrollY;
			setIsScrolled(y > 20);
			if (y > lastScrollY.current && y > 100) {
				setIsVisible(false);
				setIsMegaMenuOpen(false);
			} else {
				setIsVisible(true);
			}
			lastScrollY.current = y;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const originalOverflow = document.body.style.overflow;
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		}
		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, [isMobileMenuOpen]);

	useEffect(() => {
		return () => {
			if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
		};
	}, []);

	const openMegaMenu = () => {
		if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
		setIsMegaMenuOpen(true);
	};
	const closeMegaMenu = () => {
		megaTimeoutRef.current = setTimeout(() => setIsMegaMenuOpen(false), 150);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
		setMobileSection(null);
		setMobileCategory(null);
	};
	const toggleMobileSection = (id: string) =>
		setMobileSection((prev) => (prev === id ? null : id));
	const toggleMobileCategory = (id: string) =>
		setMobileCategory((prev) => (prev === id ? null : id));

	const headerClass = [
		"w-full flex items-center justify-between px-6 sm:px-12",
		"fixed top-0 left-0 z-50",
		"transition-all duration-300 ease-in-out border-b",
		isVisible ? "translate-y-0" : "-translate-y-full",
		isScrolled || isMobileMenuOpen
			? "bg-background/95 backdrop-blur-sm py-3 border-foreground/5"
			: "bg-background py-4 border-transparent",
	].join(" ");

	return (
		<>
			<header className={headerClass}>
				<div className="relative z-50">
					<Link
						href="/"
						onClick={closeMobileMenu}
						className="flex items-center gap-2 group transition-all duration-300 hover:scale-105"
					>
						<Image
							src="/favIcon.svg"
							alt="Blueberry's Grill Logo"
							width={32}
							height={32}
						/>
						<span className="font-black text-sm md:text-base tracking-tight uppercase">
							BLUEBERRY&apos;S{" "}
							<span className="font-normal lowercase tracking-widest text-[11px] md:text-xs ml-1 opacity-80">
								grill
							</span>
						</span>
					</Link>
				</div>

				<nav className="hidden md:flex items-center space-x-8 font-bold text-xs tracking-widest uppercase">
					<div
						className="relative"
						onMouseEnter={openMegaMenu}
						onMouseLeave={closeMegaMenu}
					>
						<button
							aria-expanded={isMegaMenuOpen}
							aria-haspopup="true"
							onClick={() => setIsMegaMenuOpen((prev) => !prev)}
							onKeyDown={(e) => {
								if (e.key === "Escape") setIsMegaMenuOpen(false);
							}}
							className={`flex items-center gap-1 transition-colors duration-150 ${
								isMegaMenuOpen ? "text-[#D4AF37]" : "hover:text-[#D4AF37]"
							}`}
						>
							Menu
							<svg
								width="10"
								height="6"
								viewBox="0 0 10 6"
								fill="none"
								className={`transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`}
							>
								<path
									d="M1 1L5 5L9 1"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>

					{OTHER_NAV_LINKS.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="hover:text-[#D4AF37] transition-colors duration-150"
						>
							{link.name}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-4 relative z-50">
					<div className="hidden sm:block">
						<DirectionalButton
							variant="accent"
							className="text-[11px] px-5 py-2.5"
						>
							Book a Table
						</DirectionalButton>
					</div>

					<button
						className="md:hidden flex flex-col gap-1.5 p-1"
						onClick={() => setIsMobileMenuOpen((p) => !p)}
						aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
					>
						<div
							className={`w-6 h-0.5 bg-foreground transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
						/>
						<div
							className={`w-6 h-0.5 bg-foreground transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
						/>
						<div
							className={`w-6 h-0.5 bg-foreground transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
						/>
					</button>
				</div>
			</header>

			<MegaMenu
				isOpen={isMegaMenuOpen}
				onMouseEnter={openMegaMenu}
				onMouseLeave={closeMegaMenu}
			/>

			<div
				className={`fixed inset-0 bg-background z-40 overflow-y-auto transition-all duration-500 ease-in-out md:hidden ${
					isMobileMenuOpen
						? "opacity-100 translate-x-0 pointer-events-auto"
						: "opacity-0 translate-x-full pointer-events-none"
				}`}
			>
				<div className="pt-24 pb-12 px-8">
					<div className="border-b-2 border-slate-200">
						<button
							onClick={() => toggleMobileSection("menu")}
							className="w-full flex items-center justify-between py-5 text-xl font-black uppercase tracking-tighter hover:text-[#D4AF37] transition-colors"
						>
							Menu
							<svg
								width="20"
								height="12"
								viewBox="0 0 10 6"
								fill="none"
								className={`transition-transform duration-300 ${mobileSection === "menu" ? "rotate-180" : ""}`}
							>
								<path
									d="M1 1L5 5L9 1"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>

						<div
							className={`overflow-hidden transition-all duration-400 ease-in-out ${
								mobileSection === "menu" ? "max-h-[800px] mb-4" : "max-h-0"
							}`}
						>
							{MENU_CATEGORIES.map((cat) => (
								<div key={cat.id} className="border-t border-slate-200">
									<button
										onClick={() => toggleMobileCategory(cat.id)}
										className="w-full flex items-center justify-between py-3 px-4 text-sm font-bold uppercase tracking-wide hover:text-[#D4AF37] transition-colors"
									>
										{cat.label}
										<svg
											width="14"
											height="9"
											viewBox="0 0 10 6"
											fill="none"
											className={`transition-transform duration-300 ${mobileCategory === cat.id ? "rotate-180" : ""}`}
										>
											<path
												d="M1 1L5 5L9 1"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</button>

									<div
										className={`overflow-hidden transition-all duration-300 ease-in-out ${
											mobileCategory === cat.id ? "max-h-[400px]" : "max-h-0"
										}`}
									>
										<ul className="px-4 pb-4 space-y-2">
											{cat.items.map((item) => (
												<li key={item.name}>
													<button
														onClick={() => {
															setMobileSidebarItem(item);
															closeMobileMenu();
														}}
														className="w-full flex items-center justify-between py-1.5 border-b border-slate-200 hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
													>
														<span className="font-bold text-xs">
															{item.name}
														</span>
														<span className="font-black font-serif italic text-[#D4AF37] text-xs">
															{item.price} →
														</span>
													</button>
												</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>

					{OTHER_NAV_LINKS.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							onClick={closeMobileMenu}
							className="block py-4 text-xl font-black uppercase tracking-tighter border-b-2 border-slate-200 hover:text-[#D4AF37] transition-colors"
						>
							{link.name}
						</Link>
					))}

					<div className="pt-10">
						<DirectionalButton variant="accent" onClick={closeMobileMenu}>
							Book a Table
						</DirectionalButton>
					</div>
				</div>

				<div className="absolute bottom-8 right-8 font-black text-7xl text-slate-900 opacity-[0.03] select-none pointer-events-none uppercase">
					VIBES
				</div>
			</div>

			<MobileSidebarPreview
				item={mobileSidebarItem}
				onClose={() => setMobileSidebarItem(null)}
			/>
		</>
	);
};
