import type React from "react";
import { MenuHeader } from "./features/layout/menu-header";

const AmbientGlows: React.FC = () => {
	return (
		<>
			<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />
			<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none" />
		</>
	);
};

export default function MenuLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-[#D4AF37] selection:text-black">
			<main className="flex-1 pt-20 pb-24 relative overflow-hidden z-20">
				<AmbientGlows />

				<div className="max-w-[1700px] mx-auto px-0 md:px-12 relative z-10">
					<MenuHeader />
					{children}
				</div>
			</main>
		</div>
	);
}
