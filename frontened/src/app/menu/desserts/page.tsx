import type { Metadata } from "next";
import { MenuInfoRating } from "../features/product-view/menu-info-rating";
import { MenuProductView } from "../features/product-view/menu-product-view";
import { DESSERT_DATA } from "./data";

export const metadata: Metadata = {
	title: "Dessert Menu | Blueberry's Grill",
	description:
		"Indulge in our selection of artisanal desserts. From Nutella waffles to fudgy brownie stacks, find the perfect sweet finish to your meal at Blueberry's Grill.",
};
export default function DessertsRootPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						"mainEntity": [
							{
								"@type": "Question",
								"name": "What is the most popular dessert at Blueberry's Grill?",
								"acceptedAnswer": {
									"@type": "Answer",
									"text": "Our Nutella Waffle and Brownie Stack are the most popular choices. The Brownie Stack features 70% dark chocolate brownies and Tahitian vanilla bean ice cream."
								}
							},
							{
								"@type": "Question",
								"name": "Are the desserts made fresh daily?",
								"acceptedAnswer": {
									"@type": "Answer",
									"text": "Yes, all our desserts are handcrafted and prepared daily using premium, artisanal ingredients to ensure the highest quality."
								}
							},
							{
								"@type": "Question",
								"name": "Can I find Blueberry's Grill in multiple locations?",
								"acceptedAnswer": {
									"@type": "Answer",
									"text": "Yes, we have locations in Myrtle Beach, North Myrtle Beach, Wilmington, and an international location in London."
								}
							}
						]
					}),
				}}
			/>
			<MenuProductView activeId="nutella-waffle" />
			<MenuInfoRating
				{...DESSERT_DATA.find((item) => item.id === "nutella-waffle")!}
			/>

			{/* Definition Pattern - GEO Signals */}
			<section className="px-6 mb-12 max-w-4xl mx-auto">
				<div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
					<p className="text-sm text-slate-600 italic">
						<strong className="text-slate-900 not-italic">Artisanal Dining</strong> is defined as a culinary approach that prioritizes traditional, non-mechanized methods and high-quality, often locally-sourced ingredients to create unique flavor profiles. At Blueberry&apos;s Grill, this refers to our handcrafted preparation of every dessert and sauce.
					</p>
				</div>
			</section>

			{/* Chef's Selection - GEO Experience Signal */}
			<article className="mt-20 px-6 py-12 bg-slate-50/50 backdrop-blur-sm rounded-[32px] border border-slate-100 max-w-4xl mx-auto mb-20">
				<div className="flex flex-col md:flex-row gap-10 items-center">
					<div className="w-20 h-20 rounded-full flex-shrink-0 border-2 border-[#D4AF37] flex items-center justify-center bg-white shadow-sm">
						<span className="text-3xl">👨‍🍳</span>
					</div>
					<div className="flex-1 text-center md:text-left">
						<h3 id="chefs-selection" className="text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
							Chef&apos;s Selection
						</h3>
						<blockquote className="text-lg md:text-xl font-serif italic text-slate-800 leading-relaxed mb-6">
							&quot;At Blueberry&apos;s Grill, we believe that dessert isn&apos;t just a
							course; it&apos;s a legacy. We spend months perfecting the balance of our
							70% dark chocolate to ensure the Brownie Stack remains an
							undisputed icon of indulgence.&quot;
						</blockquote>
						<div className="flex flex-col md:flex-row md:items-center gap-2">
							<p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
								— Chef Marcus Thorne
							</p>
							<span className="hidden md:inline text-slate-300">•</span>
							<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
								Executive Chef
							</p>
						</div>
					</div>
				</div>
			</article>
		</>
	);
}
