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
		"Experience elegant plates, warm light, and flavors that linger at Blueberry's Grill.",
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
			<body className="min-h-full flex flex-col font-sans bg-background text-foreground">
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
