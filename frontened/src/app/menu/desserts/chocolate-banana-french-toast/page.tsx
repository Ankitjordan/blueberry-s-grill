import type { Metadata } from "next";
import { MenuInfoRating } from "../../features/product-view/menu-info-rating";
import { MenuProductView } from "../../features/product-view/menu-product-view";
import { DESSERT_DATA } from "../data";

export const metadata: Metadata = {
	title: "Chocolate Banana French Toast | Dessert Menu | Blueberry's Grill",
	description:
		"Indulgent brioche French toast layered with rich chocolate and caramelized bananas. A gourmet sweet treat at Blueberry's Grill.",
};

export default function ChocolateBananaFrenchToastPage() {
	const item = DESSERT_DATA.find(
		(item) => item.id === "chocolate-banana-french-toast",
	)!;
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "MenuItem",
						"name": item.name,
						"description": item.description,
						"image": `https://blueberry-s-grill.vercel.app/images/desserts/${item.id}.png`,
						"datePublished": "2026-05-13",
						"dateModified": "2026-05-15",
						"author": {
							"@type": "Organization",
							"name": "Blueberry's Grill Culinary Team"
						},
						"reviewedBy": {
							"@type": "Person",
							"name": "Chef Marcus Thorne",
							"jobTitle": "Executive Chef",
							"url": "https://blueberry-s-grill.vercel.app/about"
						},
						"offers": {
							"@type": "Offer",
							"priceCurrency": "USD",
							"availability": "https://schema.org/InStock"
						}
					}),
				}}
			/>
			<div className="flex justify-end px-4 mb-2">
				<p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
					Last updated: <time dateTime="2026-05-15">May 15, 2026</time>
				</p>
			</div>
			<MenuProductView activeId="chocolate-banana-french-toast" />
			<MenuInfoRating {...item} />
		</>
	);
}
