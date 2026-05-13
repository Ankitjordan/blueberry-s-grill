import type React from "react";
import { RetroFooter } from "@/components/layout/footer/RetroFooter";
import { RetroHeader } from "@/components/layout/header/RetroHeader";
import { FooterReveal } from "@/components/ui/FooterReveal";

export default function MarketingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className="relative min-h-screen w-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden z-10">
				<div className="grain-overlay" />
				<RetroHeader />
				{children}
			</div>
			<FooterReveal>
				<RetroFooter />
			</FooterReveal>
		</>
	);
}
