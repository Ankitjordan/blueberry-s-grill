"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MenuSidebar } from "@/components/layout/sidebar/menu-sidebar";
import { useTransitionNavigation } from "@/components/transition-provider";

import { DESSERT_DATA } from "../../desserts/data";

const DESSERT_LINKS = DESSERT_DATA.map((item) => ({
	name: item.name,
	href: item.href,
}));

export const MenuNavigation = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const pathname = usePathname();
	const { navigateWithTransition } = useTransitionNavigation();

	const activeItem =
		DESSERT_LINKS.find((link) => link.href === pathname)?.name ||
		"Nutella Waffle";

	return (
		<>
			{/* Sidebar Toggle Button */}
			{!isSidebarOpen && (
				<motion.button
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					onClick={() => setIsSidebarOpen(true)}
					className="absolute left-6 md:left-12 top-4 md:top-8 z-[45] flex items-center gap-4 bg-white/80 backdrop-blur-md border border-slate-200 py-3 px-5 rounded-full hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl group"
				>
					<div className="flex flex-col gap-1.5">
						<div className="w-5 h-0.5 bg-[#D4AF37]" />
						<div className="w-3 h-0.5 bg-[#D4AF37] group-hover:w-5 transition-all duration-300" />
						<div className="w-5 h-0.5 bg-[#D4AF37]" />
					</div>
					<span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-900 transition-colors">
						Menu
					</span>
				</motion.button>
			)}

			{/* Navigation Sidebar Drawer */}
			<MenuSidebar
				isOpen={isSidebarOpen}
				onClose={() => setIsSidebarOpen(false)}
				title="DESSERT SELECTIONS"
				items={DESSERT_LINKS.map((link) => link.name)}
				activeItem={activeItem}
				onItemClick={(item) => {
					const link = DESSERT_LINKS.find((l) => l.name === item);
					if (link) {
						navigateWithTransition(link.href, link.name);
						setIsSidebarOpen(false);
					}
				}}
			/>
		</>
	);
};
