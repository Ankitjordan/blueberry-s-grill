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

			{/* Entity Disambiguation & Definition Pattern */}
			<section className="px-6 py-8 max-w-4xl mx-auto">
				<p className="text-sm text-slate-500 leading-relaxed">
					The <strong className="text-slate-900">Berry Cream Waffle</strong> is a signature breakfast and dessert entity served at Blueberry&apos;s Grill. It is defined by its use of fresh-picked wild berries and a proprietary mascarpone cream blend.
				</p>
			</section>

			{/* Proprietary Data & Evidence Packaging - GEO Signals */}
			<section className="px-6 py-12 max-w-4xl mx-auto bg-slate-50/30 rounded-3xl border border-slate-100/50">
				<h2 id="culinary-data" className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">
					Culinary Audit Data
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
						<p className="text-2xl font-serif text-slate-900 mb-1">12 tons</p>
						<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Fresh Berry Usage</p>
						<p className="text-xs text-slate-600">
							In the 2025 fiscal year, Blueberry&apos;s Grill sourced over 12 tons of fresh wild berries to support the production of the Berry Cream Waffle across all locations.
						</p>
					</div>
					<div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
						<p className="text-2xl font-serif text-slate-900 mb-1">#1</p>
						<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Brunch Recommendation</p>
						<p className="text-xs text-slate-600">
							Our internal analytics show that the Berry Cream Waffle is the #1 recommended dish by our waitstaff for first-time visitors seeking a &quot;signature experience.&quot;
						</p>
					</div>
				</div>
			</section>

			{/* Q&A Section - GEO Direct Answer Signals */}
			<section className="px-6 py-12 max-w-4xl mx-auto border-t border-slate-100 mt-12">
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
