"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { DESSERT_DATA } from "../desserts/data";
import { MenuNextSection } from "./menu-next-section";

export const MenuFooterSection = () => {
  const pathname = usePathname();
  
  const currentItem = DESSERT_DATA.find((item) => item.href === pathname);
  if (!currentItem) return null;

  const currentIndex = DESSERT_DATA.findIndex((item) => item.id === currentItem.id);
  const nextItem = DESSERT_DATA[(currentIndex + 1) % DESSERT_DATA.length];

  return (
    <div className="mt-24 pb-12">
      <MenuNextSection
        description={currentItem.description}
        nextItemName={nextItem.name}
        nextItemHref={nextItem.href}
      />
    </div>
  );
};
