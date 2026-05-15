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

			{/* Q&A Section - GEO Direct Answer Signals */}
			<section className="px-6 py-12 max-w-4xl mx-auto border-t border-slate-100">
				<div className="space-y-10">
					<div>
						<h2 id="bread-choice" className="text-xl font-serif text-slate-900 mb-3">
							What type of bread is used for the French Toast?
						</h2>
						<p className="text-slate-600 leading-relaxed max-w-2xl">
							We use thick-cut artisanal brioche bread for our French Toast. This enriched bread is chosen for its high butter and egg content, which creates a custardy interior and a perfectly caramelized exterior during the searing process.
						</p>
					</div>
					<div>
						<h2 id="banana-caramelization" className="text-xl font-serif text-slate-900 mb-3">
							How are the caramelized bananas prepared?
						</h2>
						<p className="text-slate-600 leading-relaxed max-w-2xl">
							Our bananas are pan-seared with organic brown sugar and a hint of Madagascar vanilla until they achieve a deep mahogany caramelization. This process takes approximately 3 minutes per batch to ensure a soft texture and intense flavor.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
