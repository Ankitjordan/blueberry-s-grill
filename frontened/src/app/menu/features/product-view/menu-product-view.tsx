"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HeroEnhancedVideo } from "./hero-enhanced-video";
import { DESSERT_DATA } from "../../desserts/data";
import { useRouter } from "next/navigation";
import { useTransitionNavigation } from "@/components/transition-provider";
import {
  IoInformationCircleOutline,
  IoStar,
} from "react-icons/io5";
import { ImageBackgroundZoom } from "./image-background-zoom";

interface MenuProductViewProps {
  activeId: string;
}

export const MenuProductView = ({ activeId }: MenuProductViewProps) => {
  const router = useRouter();
  const { navigateWithTransition } = useTransitionNavigation();
  const currentItem =
    DESSERT_DATA.find((d) => d.id === activeId) || DESSERT_DATA[0];
  const currentIndex = DESSERT_DATA.findIndex((d) => d.id === activeId);
  const nextItem = DESSERT_DATA[(currentIndex + 1) % DESSERT_DATA.length];

  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <div className="flex flex-col gap-16 pb-32">
      <HeroEnhancedVideo src={currentItem.videoSrc} title={currentItem.name} />

      <div className="space-y-24">
        {/* Hero Info Section */}

        {/* Detailed Ingredients Section */}
      

      </div>
    </div>
  );
};
