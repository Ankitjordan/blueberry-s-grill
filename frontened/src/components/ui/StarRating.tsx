"use client";

import React from "react";
import { IoStar } from "react-icons/io5";

interface StarRatingProps {
	rating: number;
	showNumber?: boolean;
	className?: string;
	iconSize?: number;
}

export const StarRating = ({
	rating,
	showNumber = false,
	className = "",
	iconSize,
}: StarRatingProps) => {
	return (
		<div
			className={`flex items-center gap-1 ${className}`}
			role="img"
			aria-label={`${rating} out of 5 stars`}
		>
			<div className="flex gap-0.5">
				{[...Array(5)].map((_, i) => (
					<IoStar
						key={i}
						size={iconSize}
						className={`text-[11px] ${i < Math.floor(rating) ? "text-[#D4AF37]" : "text-slate-200"}`}
					/>
				))}
			</div>
			{showNumber && (
				<span className="text-xs font-bold text-slate-400 ml-1">
					{rating.toFixed(1)} / 5
				</span>
			)}
		</div>
	);
};
