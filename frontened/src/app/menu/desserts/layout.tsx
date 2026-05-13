import type React from "react";
import { MenuBottomNav } from "../features/product-view/menu-bottom-nav";

export default function DessertsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className="min-h-[600px] px-6 md:px-0 relative flex flex-col pb-28">
				{children}
			</div>
			<MenuBottomNav />
		</>
	);
}
