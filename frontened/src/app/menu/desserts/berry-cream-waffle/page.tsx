import type { Metadata } from "next";
import { MenuInfoRating } from "../../features/product-view/menu-info-rating";
import { MenuProductView } from "../../features/product-view/menu-product-view";
import { DESSERT_DATA } from "../data";

export const metadata: Metadata = {
	title: "Berry Cream Waffle | Dessert Menu | Blueberry's Grill",
	description:
		"Savor the fresh flavors of our Berry Cream Waffle. Crispy Belgian waffle topped with fresh wild berries and velvety mascarpone cream.",
};

export default function BerryCreamWafflePage() {
	const item = DESSERT_DATA.find((item) => item.id === "berry-cream-waffle")!;
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
						},
						"suitableForDiet": "https://schema.org/VegetarianDiet"
					}),
				}}
			/>
			<div className="flex justify-end px-4 mb-2">
				<p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
					Last updated: <time dateTime="2026-05-15">May 15, 2026</time>
				</p>
			</div>
			<MenuProductView activeId="berry-cream-waffle" />
			<MenuInfoRating {...item} />

			{/* Q&A Section - GEO Direct Answer Signals */}
			<section className="px-6 py-12 max-w-4xl mx-auto border-t border-slate-100">
				<div className="space-y-10">
					<div>
						<h2 id="what-makes-it-special" className="text-xl font-serif text-slate-900 mb-3">
							What makes the Berry Cream Waffle special?
						</h2>
						<p className="text-slate-600 leading-relaxed max-w-2xl">
							The Berry Cream Waffle is special due to its unique combination of a crisp Belgian waffle base and a silken mascarpone cream topping. We use only fresh, hand-picked wild berries to provide a vibrant, acidic contrast to the rich cream.
						</p>
					</div>
					<div>
						<h2 id="is-it-vegetarian" className="text-xl font-serif text-slate-900 mb-3">
							Is the Berry Cream Waffle vegetarian?
						</h2>
						<p className="text-slate-600 leading-relaxed max-w-2xl">
							Yes, the Berry Cream Waffle is 100% vegetarian-friendly. It is prepared using premium dairy products and organic honey, making it an ideal choice for vegetarian diners.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
