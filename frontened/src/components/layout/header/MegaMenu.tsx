"use client";

import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { DesktopSidebarPreview } from "../sidebar/MenuSidebarPreview";

export interface MenuItem {
	name: string;
	price: string;
	image: string;
	description: string;
	rating: number;
	href: string;
}

export interface MenuCategory {
	id: string;
	label: string;
	items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
	{
		id: "starters",
		label: "Starters",
		items: [
			{
				name: "Loaded Fries",
				price: "$9",
				image: "/images/foods/food_12.jpg",
				description:
					"Cheese, jalapeños, sour cream drizzle on crispy golden fries.",
				rating: 4,
				href: "#",
			},
			{
				name: "Crispy Wings",
				price: "$13",
				image: "/images/foods/food_13.jpg",
				description: "6 pcs tossed in your choice of signature house sauce.",
				rating: 5,
				href: "#",
			},
			{
				name: "Nachos Supreme",
				price: "$11",
				image: "/images/foods/food_14.jpg",
				description:
					"Guac, pico de gallo, three-cheese pull — the crowd pleaser.",
				rating: 4,
				href: "#",
			},
			{
				name: "Onion Rings",
				price: "$7",
				image: "/images/foods/food_15.jpg",
				description: "Beer battered rings served with our tangy aioli.",
				rating: 3,
				href: "#",
			},
		],
	},
	{
		id: "mains",
		label: "Mains",
		items: [
			{
				name: "The OG Burger",
				price: "$14",
				image: "/images/foods/food_4.jpg",
				description:
					"Triple wagyu smash patty, secret vibe sauce, pickles on brioche.",
				rating: 5,
				href: "#",
			},
			{
				name: "Club Sandwich",
				price: "$12",
				image: "/images/foods/food_5.jpg",
				description:
					"Grilled chicken, avocado, fresh greens on sourdough toast.",
				rating: 4,
				href: "#",
			},
			{
				name: "BBQ Platter",
				price: "$22",
				image: "/images/foods/food_3.jpg",
				description:
					"Ribs, wings, corn on the cob, and house slaw — the full spread.",
				rating: 5,
				href: "#",
			},
			{
				name: "Pasta Al Forno",
				price: "$16",
				image: "/images/foods/food_11.jpg",
				description: "Baked penne in a rich slow-cooked tomato and herb sauce.",
				rating: 4,
				href: "#",
			},
		],
	},
	{
		id: "beverages",
		label: "Beverages",
		items: [
			{
				name: "Disco Sour",
				price: "$12",
				image: "/images/foods/food_7.jpg",
				description:
					"Gin, butterfly pea, elderflower and gold glitter edible dust.",
				rating: 5,
				href: "#",
			},
			{
				name: "Berry Smash",
				price: "$10",
				image: "/images/foods/food_20.jpg",
				description:
					"Muddled fresh berries, soda water, torn mint — wildly refreshing.",
				rating: 4,
				href: "#",
			},
			{
				name: "Iced Matcha",
				price: "$8",
				image: "/images/foods/food_21.jpg",
				description:
					"Ceremonial grade matcha over creamy oat milk and crushed ice.",
				rating: 4,
				href: "#",
			},
			{
				name: "Mango Shake",
				price: "$7",
				image: "/images/foods/food_22.jpg",
				description:
					"Alphonso mango blended with vanilla ice cream, house blend.",
				rating: 3,
				href: "#",
			},
		],
	},
	{
		id: "desserts",
		label: "Desserts",
		items: [
			{
				name: "Nutella Waffle",
				price: "$10",
				image: "/images/foods/food_6.jpg",
				description:
					"Fresh berries, whipped cream and a generous Nutella drizzle.",
				rating: 5,
				href: "/menu/desserts",
			},
			{
				name: "Brownie Stack",
				price: "$9",
				image: "/images/foods/food_23.jpg",
				description:
					"Warm chocolate brownie with fudge sauce and a vanilla scoop.",
				rating: 5,
				href: "/menu/desserts/brownie-stack",
			},
			{
				name: "Berry Cream Waffle",
				price: "$11",
				image: "/images/foods/food_2.jpg",
				description:
					"Our signature stack — served with maple butter. A legend.",
				rating: 5,
				href: "/menu/desserts/berry-cream-waffle",
			},
			{
				name: "Chocolate Banana French Toast",
				price: "$12",
				image: "/images/foods/food_1.jpg",
				description:
					"Indulgent thick-cut brioche French toast layered with rich chocolate.",
				rating: 5,
				href: "/menu/desserts/chocolate-banana-french-toast",
			},
			{
				name: "Pancake",
				price: "$11",
				image: "/images/foods/food_3.jpg",
				description:
					"Classic, perfectly fluffy buttermilk pancakes served with premium maple syrup.",
				rating: 5,
				href: "/menu/desserts/pancake",
			},
		],
	},
];

interface MenuItemCardProps {
	item: MenuItem;
	isActive: boolean;
	onHover: (item: MenuItem) => void;
	tabIndex: number;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
	item,
	isActive,
	onHover,
	tabIndex,
}) => (
	<li>
		<Link
			href={item.href}
			tabIndex={tabIndex}
			onMouseEnter={() => onHover(item)}
			onFocus={() => onHover(item)}
			className={`group w-full flex items-center gap-3 p-1.5 -mx-1.5 transition-all duration-150 text-left ${
				isActive
					? "bg-slate-100 text-slate-900"
					: "hover:bg-slate-50 hover:text-slate-900"
			}`}
		>
			<div
				className={`relative w-10 h-10 flex-shrink-0 overflow-hidden border transition-colors ${
					isActive
						? "border-slate-200"
						: "border-transparent group-hover:border-slate-200"
				}`}
			>
				<Image
					src={item.image}
					alt={item.name}
					fill
					sizes="40px"
					className="object-cover"
					loading="eager"
				/>
			</div>
			<div className="min-w-0">
				<div className="flex items-baseline gap-1.5">
					<span className="font-bold text-sm leading-tight truncate">
						{item.name}
					</span>
					<span
						className={`text-xs font-black font-serif italic flex-shrink-0 transition-colors ${
							isActive
								? "text-[#D4AF37]"
								: "text-slate-400 group-hover:text-[#D4AF37]"
						}`}
					>
						{item.price}
					</span>
				</div>
				<p
					className={`text-xs leading-tight truncate transition-colors ${
						isActive
							? "text-slate-600"
							: "text-slate-500 group-hover:text-slate-600"
					}`}
				>
					{item.description.split(",")[0]}
				</p>
			</div>
		</Link>
	</li>
);

interface MegaMenuProps {
	isOpen: boolean;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
	isOpen,
	onMouseEnter,
	onMouseLeave,
}) => {
	const [activeItem, setActiveItem] = useState<MenuItem | null>(null);

	const handlePanelLeave = () => {
		setActiveItem(null);
		onMouseLeave();
	};

	return (
		<div
			role="region"
			aria-label="Menu categories"
			aria-hidden={!isOpen}
			onMouseEnter={onMouseEnter}
			onMouseLeave={handlePanelLeave}
			className={`fixed left-0 right-0 top-[73px] z-40 bg-background border-b border-slate-200 shadow-[0_6px_30px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out ${
				isOpen
					? "opacity-100 translate-y-0 pointer-events-auto"
					: "opacity-0 -translate-y-3 pointer-events-none"
			}`}
		>
			<div className="w-full flex">
				<section
					aria-label="Menu Categories Grid"
					className="flex-1 px-6 sm:px-12 py-8 min-w-0"
				>
					<h2 className="sr-only">Menu Categories</h2>
					<div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
						<p className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-500">
							OUR MENU
						</p>
						<Link
							href="/menu"
							tabIndex={isOpen ? 0 : -1}
							className="text-xs font-bold uppercase tracking-widest underline decoration-1 underline-offset-4 hover:text-[#D4AF37] transition-colors duration-150"
						>
							See Full Menu →
						</Link>
					</div>

					<div className="grid grid-cols-4 gap-6">
						{MENU_CATEGORIES.map((category) => (
							<div key={category.id}>
								<h3 className="font-black text-sm uppercase tracking-widest mb-4 pb-2 border-b border-slate-200 text-slate-900">
									{category.label}
								</h3>
								<ul className="space-y-2">
									{category.items.map((item) => (
										<MenuItemCard
											key={item.name}
											item={item}
											isActive={activeItem?.name === item.name}
											onHover={setActiveItem}
											tabIndex={isOpen ? 0 : -1}
										/>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				<DesktopSidebarPreview item={activeItem} />
			</div>
		</div>
	);
};
