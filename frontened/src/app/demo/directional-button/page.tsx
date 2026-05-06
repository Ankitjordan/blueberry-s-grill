"use client";

import React from "react";
import { DirectionalButton } from "@/components/ui/DirectionalButton";

export default function DirectionalButtonDemo() {
	return (
		<div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-8 space-y-12">
			<div className="text-center space-y-4">
				<h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
					Directional <span className="text-[#CCFF00]">Button</span>
				</h1>
				<p className="text-white/40 max-w-md mx-auto text-lg">
					A premium interaction component. Hover from different sides to see the
					magic.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div className="flex flex-col items-center space-y-4">
					<DirectionalButton variant="primary" className="w-64">
						Primary Variant
					</DirectionalButton>
					<span className="text-xs text-white/20 uppercase tracking-widest">
						Gold / Black Blob
					</span>
				</div>

				<div className="flex flex-col items-center space-y-4">
					<DirectionalButton variant="accent" className="w-64">
						Accent Variant
					</DirectionalButton>
					<span className="text-xs text-white/20 uppercase tracking-widest">
						White / Black Blob
					</span>
				</div>

				<div className="flex flex-col items-center space-y-4">
					<DirectionalButton variant="secondary" className="w-64">
						Secondary Variant
					</DirectionalButton>
					<span className="text-xs text-white/20 uppercase tracking-widest">
						Transparent / White Blob
					</span>
				</div>

				<div className="flex flex-col items-center space-y-4">
					<DirectionalButton
						backgroundColor="bg-black"
						textColor="text-white"
						blobColor="bg-[#CCFF00]"
						className="w-64"
					>
						Custom Osmo
					</DirectionalButton>
					<span className="text-xs text-white/20 uppercase tracking-widest">
						Custom Lime Green
					</span>
				</div>
			</div>

			<div className="pt-12 text-white/10 text-sm">
				Inspired by Osmo Supply • Powered by GSAP
			</div>
		</div>
	);
}
