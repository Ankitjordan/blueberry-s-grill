import { MenuProductView } from "../../components/menu-product-view";
import { MenuInfoRating } from "../../components/menu-info-rating";
import { DESSERT_DATA } from "../data";
import { MenuIngredients } from "../../components/menu-ingredients";
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
