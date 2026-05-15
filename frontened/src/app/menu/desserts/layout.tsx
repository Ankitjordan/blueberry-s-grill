import type React from "react";
import { MenuBottomNav } from "../features/product-view/menu-bottom-nav";
import { DESSERT_DATA } from "./data";

export default function DessertsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Menu",
						"name": "Dessert Menu",
						"mainEntityOfPage": "https://blueberry-s-grill.vercel.app/menu/desserts",
						"hasMenuSection": [
							{
								"@type": "MenuSection",
								"name": "Signature Desserts",
								"hasMenuItem": DESSERT_DATA.map((item) => ({
									"@type": "MenuItem",
									"name": item.name,
									"description": item.description || item.ingredients.join(", "),
									"offers": {
										"@type": "Offer",
										"priceCurrency": "USD"
									}
								}))
							}
						]
					}),
				}}
			/>
			<div className="min-h-[600px] px-6 md:px-0 relative flex flex-col pb-28">
				{children}
			</div>
			<MenuBottomNav />
		</>
	);
}
