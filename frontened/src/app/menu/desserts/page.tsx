import React from "react";
import { MenuProductView } from "../features/product-view/menu-product-view";
import { MenuInfoRating } from "../features/product-view/menu-info-rating";
import { DESSERT_DATA } from "./data";
export default function DessertsRootPage() {
  return (
    <>
      <MenuProductView activeId="nutella-waffle" />
      <MenuInfoRating
        {...DESSERT_DATA.find((item) => item.id === "nutella-waffle")!}
      />
    </>
  );
}
