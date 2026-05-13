"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { useTransitionNavigation } from "@/components/transition-provider";
import { DESSERT_DATA } from "../../desserts/data";
import { HeroEnhancedVideo } from "./hero-enhanced-video";

interface MenuProductViewProps {
	activeId: string;
}

export const MenuProductView = ({ activeId }: MenuProductViewProps) => {
	const { navigateWithTransition } = useTransitionNavigation();
	const currentItem =
		DESSERT_DATA.find((d) => d.id === activeId) || DESSERT_DATA[0];
	const currentIndex = DESSERT_DATA.findIndex((d) => d.id === activeId);
	const nextItem = DESSERT_DATA[(currentIndex + 1) % DESSERT_DATA.length];

	const [showIngredients, setShowIngredients] = useState(false);

	return (
		<div className="flex flex-col gap-16 pb-32">
			<HeroEnhancedVideo src={currentItem.videoSrc} title={currentItem.name} />
		</div>
	);
};
