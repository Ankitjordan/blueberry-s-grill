"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { useTransitionNavigation } from "@/components/transition-provider";
import { DESSERT_DATA } from "../../desserts/data";

const DESSERT_LINKS = DESSERT_DATA.map((item) => ({
	name: item.name,
	href: item.href,
	id: item.id,
	tags: item.tags,
	rating: item.rating,
}));

export const MenuBottomNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const pathname = usePathname();
	const { navigateWithTransition } = useTransitionNavigation();

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const activeItem =
		DESSERT_LINKS.find((link) => link.href === pathname)?.name ||
		"Nutella Waffle";

	const handleItemClick = (href: string, name: string) => {
		navigateWithTransition(href, name);
		setIsOpen(false);
	};

	if (!mounted) return null;

	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: "100%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "100%" }}
						transition={{ type: "spring", damping: 30, stiffness: 250 }}
						className="fixed inset-0 z-[9998] bg-background flex flex-col"
					>
						<div className="fixed top-1/4 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none" />
						<div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />

						<div className="flex-shrink-0 flex items-center justify-between px-6 sm:px-8 md:px-16 pt-8 pb-6 border-b border-slate-200 relative z-10">
							<div>
								<span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37] block mb-1 opacity-70">
									Menu
								</span>
								<h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-900">
									Dessert Selections
								</h2>
							</div>
							<span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
								{DESSERT_LINKS.length} Items
							</span>
						</div>

						<div className="flex-1 overflow-y-auto overscroll-contain">
							<div className="px-6 sm:px-8 md:px-16 pt-8 pb-4 relative z-10">
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
									{DESSERT_LINKS.map((item, i) => {
										const isActive = item.name === activeItem;
										return (
											<motion.button
												key={item.id}
												initial={{ opacity: 0, y: 24 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: 0.05 * i, duration: 0.4 }}
												onClick={() => handleItemClick(item.href, item.name)}
												className={`group relative w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
													isActive
														? "border-[#D4AF37]/50 bg-[#D4AF37]/5"
														: "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100"
												}`}
											>
												{isActive && (
													<motion.div
														layoutId="overlay-active"
														className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#D4AF37]"
													/>
												)}

												<span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-3">
													{String(i + 1).padStart(2, "0")}
												</span>

												<h3
													className={`text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight leading-tight mb-4 transition-colors duration-300 ${
														isActive
															? "text-[#D4AF37]"
															: "text-slate-900 group-hover:text-[#D4AF37]"
													}`}
												>
													{item.name}
												</h3>

												{item.tags && (
													<div className="flex flex-wrap gap-2">
														{item.tags.slice(0, 2).map((tag) => (
															<span
																key={tag}
																className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 border border-slate-200 px-2.5 py-1 rounded-full"
															>
																{tag}
															</span>
														))}
														{item.rating && (
															<span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4AF37]/80 border border-[#D4AF37]/20 px-2.5 py-1 rounded-full ml-auto">
																★ {item.rating.toFixed(1)}
															</span>
														)}
													</div>
												)}

												<div
													className={`absolute bottom-5 right-5 transition-all duration-300 ${
														isActive
															? "opacity-100"
															: "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
													}`}
												>
													<svg
														width="16"
														height="16"
														viewBox="0 0 16 16"
														fill="none"
													>
														<path
															d="M3 8H13M13 8L9 4M13 8L9 12"
															stroke={isActive ? "#D4AF37" : "currentColor"}
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
											</motion.button>
										);
									})}
								</div>
							</div>

							<div className="px-6 sm:px-8 md:px-16 pt-4 pb-32 relative z-10">
								<span className="text-[60px] sm:text-[80px] md:text-[120px] font-black uppercase tracking-tighter text-slate-900/[0.03] select-none pointer-events-none leading-none">
									DESSERTS
								</span>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<div className="fixed bottom-0 left-0 right-0 z-[9999] px-6 pb-6 pointer-events-none flex justify-center">
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						delay: 0.4,
						type: "spring",
						damping: 25,
						stiffness: 200,
					}}
					className="pointer-events-auto"
				>
					<button
						onClick={() => setIsOpen((prev) => !prev)}
						className={`flex items-center gap-3.5 px-6 py-3.5 rounded-full border transition-all duration-300 ${
							isOpen
								? "bg-[#D4AF37] border-[#D4AF37]/50 text-[#0A0A0A] hover:bg-[#E5C048] hover:shadow-[0_0_25px_rgba(214,175,55,0.4)]"
								: "bg-[#D4AF37] border-transparent text-[#0A0A0A] hover:bg-[#E5C048] hover:shadow-[0_0_25px_rgba(214,175,55,0.5)] hover:scale-105"
						}`}
					>
						<div className="flex items-center gap-3">
							<AnimatePresence mode="wait">
								{isOpen ? (
									<motion.div
										key="close-icon"
										initial={{ rotate: -90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: 90, opacity: 0 }}
										transition={{ duration: 0.2 }}
										className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#D4AF37] shadow-sm"
									>
										<IoClose size={18} />
									</motion.div>
								) : (
									<motion.div
										key="open-icon"
										initial={{ rotate: 90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: -90, opacity: 0 }}
										transition={{ duration: 0.2 }}
										className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#D4AF37] shadow-sm"
									>
										<IoMenu size={18} />
									</motion.div>
								)}
							</AnimatePresence>

							<AnimatePresence mode="wait">
								<motion.span
									key={isOpen ? "close" : "open"}
									initial={{ opacity: 0, y: 6 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -6 }}
									transition={{ duration: 0.15 }}
									className="text-[13px] font-black uppercase tracking-[0.3em]"
								>
									{isOpen ? "Close" : "Menu"}
								</motion.span>
							</AnimatePresence>
						</div>
					</button>
				</motion.div>
			</div>
		</>
	);
};
