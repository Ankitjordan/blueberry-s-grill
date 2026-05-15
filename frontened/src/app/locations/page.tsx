import type { Metadata } from "next";
import { GlobeScene } from "./components/GlobeScene";

export const metadata: Metadata = {
	title: "Our Locations | Blueberry's Grill",
	description:
		"Find a Blueberry's Grill near you. Explore our premium dining locations across the Carolina coast and Wilmington. Experience local hospitality and gourmet flavors at our iconic restaurants.",
};

export default function LocationsPage() {
	return (
		<main
			aria-label="Locations globe page"
			style={{ isolation: "isolate" }}
			className="relative h-screen w-screen overflow-hidden"
		>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ItemList",
						"itemListElement": [
							{
								"@type": "ListItem",
								"position": 1,
								"item": {
									"@type": "Restaurant",
									"name": "Blueberry's Grill - Myrtle Beach",
									"address": {
										"@type": "PostalAddress",
										"streetAddress": "1120 N Ocean Blvd",
										"addressLocality": "Myrtle Beach",
										"addressRegion": "SC",
										"postalCode": "29577",
										"addressCountry": "US"
									},
									"telephone": "(843) 555-0101"
								}
							},
							{
								"@type": "ListItem",
								"position": 2,
								"item": {
									"@type": "Restaurant",
									"name": "Blueberry's Grill - North Myrtle Beach",
									"address": {
										"@type": "PostalAddress",
										"streetAddress": "2240 Sea Mountain Hwy",
										"addressLocality": "North Myrtle Beach",
										"addressRegion": "SC",
										"postalCode": "29582",
										"addressCountry": "US"
									},
									"telephone": "(843) 555-0202"
								}
							},
							{
								"@type": "ListItem",
								"position": 3,
								"item": {
									"@type": "Restaurant",
									"name": "Blueberry's Grill - Wilmington",
									"address": {
										"@type": "PostalAddress",
										"streetAddress": "10 Market St",
										"addressLocality": "Wilmington",
										"addressRegion": "NC",
										"postalCode": "28401",
										"addressCountry": "US"
									},
									"telephone": "(910) 555-0303"
								}
							},
							{
								"@type": "ListItem",
								"position": 4,
								"item": {
									"@type": "Restaurant",
									"name": "Blueberry's Grill - London",
									"address": {
										"@type": "PostalAddress",
										"streetAddress": "Tower Bridge Rd",
										"addressLocality": "London",
										"postalCode": "SE1 2UP",
										"addressCountry": "UK"
									},
									"telephone": "+44 20 7555 0199"
								}
							}
						]
					}),
				}}
			/>
			<GlobeScene />
		</main>
	);
}
