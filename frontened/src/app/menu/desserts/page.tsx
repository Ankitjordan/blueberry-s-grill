import React from "react";
import { MenuProductView } from "../components/menu-product-view";
import { MenuInfoRating } from "../components/menu-info-rating";
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
