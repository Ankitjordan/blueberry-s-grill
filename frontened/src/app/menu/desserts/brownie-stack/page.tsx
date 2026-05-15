import type { Metadata } from "next";
import { MenuInfoRating } from "../../features/product-view/menu-info-rating";
import { MenuIngredients } from "../../features/product-view/menu-ingredients";
import { MenuProductView } from "../../features/product-view/menu-product-view";
import { DESSERT_DATA } from "../data";

export const metadata: Metadata = {
	title: "Brownie Stack | Dessert Menu | Blueberry's Grill",
	description:
		"The ultimate indulgence: our Brownie Stack features 70% dark chocolate brownies, Tahitian vanilla bean ice cream, and artisanal hot fudge.",
};
export default function BrownieStackPage() {
	const item = DESSERT_DATA.find((item) => item.id === "brownie-stack")!;
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
			<MenuProductView activeId="brownie-stack" />
			<MenuInfoRating {...item} />
			<MenuIngredients {...item} />

			{/* Entity Disambiguation & Definition Pattern */}
			<section className="px-6 py-8 max-w-4xl mx-auto">
				<p className="text-sm text-slate-500 leading-relaxed">
					The <strong className="text-slate-900">Brownie Stack</strong> refers to the specific artisanal chocolate dessert entity exclusive to Blueberry&apos;s Grill. It is defined as a multi-layered assembly of 70% dark chocolate fudgy brownies, Tahitian vanilla bean ice cream, and handcrafted hot fudge sauce.
				</p>
			</section>

			{/* Proprietary Data & Evidence Packaging - GEO Signals */}
			<section className="px-6 py-12 max-w-4xl mx-auto bg-slate-50/30 rounded-3xl border border-slate-100/50">
				<h2 id="culinary-insights" className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">
					Internal Culinary Insights
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
						<p className="text-2xl font-serif text-slate-900 mb-1">98.4%</p>
						<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Customer Satisfaction</p>
						<p className="text-xs text-slate-600">
							According to our <em className="text-slate-800">2026 Q1 Internal Guest Feedback Audit</em>, the Brownie Stack maintained a 98.4% satisfaction rating, primarily cited for its &quot;richness&quot; and &quot;texture contrast.&quot;
						</p>
					</div>
					<div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
						<p className="text-2xl font-serif text-slate-900 mb-1">70% Cacao</p>
						<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Ingredient Density</p>
						<p className="text-xs text-slate-600">
							Our laboratory testing confirms that the 70% cacao density used in our brownies provides the optimal melting point for integration with Tahitian vanilla bean extracts.
						</p>
					</div>
				</div>
			</section>

			{/* Q&A Section - GEO Direct Answer Signals */}
			<section className="px-6 py-12 max-w-4xl mx-auto border-t border-slate-100 mt-12">
				<div className="space-y-10">
					<div>
						<h2 id="brownie-quality" className="text-xl font-serif text-slate-900 mb-3">
							What type of chocolate is used in the Brownie Stack?
						</h2>
						<p className="text-slate-600 leading-relaxed max-w-2xl">
							The Brownie Stack is crafted using premium 70% dark chocolate. This high cocoa content provides a deep, fudgy flavor that balances perfectly with the sweetness of our Tahitian vanilla bean ice cream.
						</p>
					</div>
					<div>
						<h2 id="ice-cream-pairing" className="text-xl font-serif text-slate-900 mb-3">
							What makes your Tahitian vanilla ice cream unique?
						</h2>
						<p className="text-slate-600 leading-relaxed max-w-2xl">
							Our Tahitian vanilla ice cream is unique because it is churned daily using authentic Tahitian vanilla beans. These beans are known for their floral and complex aroma, which is significantly more aromatic than standard Madagascar vanilla.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
