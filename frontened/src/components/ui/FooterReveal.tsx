"use client";

import React from "react";

interface FooterRevealProps {
	children: React.ReactNode;
}

/**
 * FooterReveal
 * A wrapper component that implements a "sticky reveal" effect for the footer.
 * The footer is revealed from behind the main content as you scroll.
 */
export const FooterReveal: React.FC<FooterRevealProps> = ({ children }) => {
	return (
		<div
			className="relative h-[800px] md:h-[600px] -z-10"
			style={{
				clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)",
			}}
		>
			<div className="fixed bottom-0 left-0 w-full h-[800px] md:h-[600px]">
				{children}
			</div>
		</div>
	);
};
