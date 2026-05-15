import type { Metadata } from "next";
import { Great_Vibes, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

/**
 * Font strategy — load only what each variant actually uses:
 *
 * - Inter:           primary UI font (replaces Geist Sans / Geist Mono)
 * - Playfair_Display: decorative headings
 * - Great_Vibes:     script accent
 *
 * display:"swap" ensures text is visible immediately with a fallback
 * font while the web font loads, eliminating render-blocking behaviour
 * and improving FCP / LCP scores.
 *
 * Geist Sans and Geist Mono have been removed — they were not referenced
 * anywhere in the marketing page CSS / components.
 */
const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
	display: "swap",
});

const greatVibes = Great_Vibes({
	variable: "--font-great-vibes",
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Blueberry's Grill | Modern Dining with a Timeless Soul",
	description:
		"Experience elegant plates, warm light, and unforgettable flavors at Blueberry's Grill. A modern dining experience with a timeless soul. Book your table today!",
	metadataBase: new URL("https://blueberry-s-grill.vercel.app"),
	alternates: {
		canonical: "/",
	},
	icons: {
		icon: "/favIcon.svg",
	},
};

import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { TransitionProvider } from "@/components/transition-provider";
import { LazyAskGrillButton } from "@/components/ui/LazyAskGrillButton";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<head>
				<link rel="llms-txt" href="/llms.txt" />
			</head>
			<body className="min-h-full flex flex-col font-sans bg-background text-foreground">
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Restaurant",
							"name": "Blueberry's Grill",
							"image": "https://blueberry-s-grill.vercel.app/images/foods/burger-hero.png",
							"url": "https://blueberry-s-grill.vercel.app",
							"telephone": "+1234567890",
							"description": "Blueberry's Grill is a modern dining destination specializing in handcrafted American cuisine with a gourmet twist. From our signature smash burgers to artisanal desserts, we offer an elegant yet soul-stirring culinary experience.",
							"foundingDate": "2020",
							"sameAs": [
								"https://www.instagram.com/blueberrysgrill",
								"https://www.facebook.com/blueberrysgrill"
							],
							"address": {
								"@type": "PostalAddress",
								"streetAddress": "123 Flavor Street",
								"addressLocality": "Gourmet City",
								"addressRegion": "GC",
								"postalCode": "12345",
								"addressCountry": "US"
							},
							"geo": {
								"@type": "GeoCoordinates",
								"latitude": 40.7128,
								"longitude": -74.0060
							},
							"openingHoursSpecification": [
								{
									"@type": "OpeningHoursSpecification",
									"dayOfWeek": [
										"Monday",
										"Tuesday",
										"Wednesday",
										"Thursday",
										"Friday",
										"Saturday",
										"Sunday"
									],
									"opens": "11:00",
									"closes": "23:00"
								}
							],
							"servesCuisine": "American, Modern",
							"priceRange": "$$"
						}),
					}}
				/>
				<SmoothScrollProvider>
					<TransitionProvider>
						{children}
						<LazyAskGrillButton />
					</TransitionProvider>
				</SmoothScrollProvider>
			</body>
		</html>
	);
}
