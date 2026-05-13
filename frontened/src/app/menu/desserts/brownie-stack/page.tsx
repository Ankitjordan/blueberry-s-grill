import { MenuProductView } from "../../features/product-view/menu-product-view";
import { MenuInfoRating } from "../../features/product-view/menu-info-rating";
import { DESSERT_DATA } from "../data";
import { MenuIngredients } from "../../features/product-view/menu-ingredients";
export default function BrownieStackPage() {
  return (
    <>
      <MenuProductView activeId="brownie-stack" />
      <MenuInfoRating
        {...DESSERT_DATA.find((item) => item.id === "brownie-stack")!}
      />
      <MenuIngredients
        {...DESSERT_DATA.find((item) => item.id === "brownie-stack")!}
      />
    </>
  );
}
