"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function PremiumImage({
	className,
	...props
}: ImageProps & { className?: string }) {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div className={cn("relative overflow-hidden w-full h-full", className)}>
			{/* Shimmer Skeleton Loader */}
			{isLoading && (
				<div
					className="absolute inset-0 z-10 animate-shimmer"
					style={{
						background:
							"linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)",
						backgroundSize: "400% 100%",
					}}
				/>
			)}

			{/* Actual Image */}
			<Image
				{...props}
				className={cn(
					"transition-opacity duration-700 ease-in-out",
					isLoading ? "opacity-0" : "opacity-100",
					className,
				)}
				onLoad={(e) => {
					setIsLoading(false);
					if (props.onLoad) props.onLoad(e);
				}}
			/>
		</div>
	);
}
