import { MenuProductView } from "../../components/menu-product-view";
import { MenuInfoRating } from "../../components/menu-info-rating";
import { DESSERT_DATA } from "../data";

export default function PancakePage() {
  const item = DESSERT_DATA.find((item) => item.id === "pancake")!;
  return (
    <>
      <MenuProductView activeId="pancake" />
      <MenuInfoRating {...item} />
    </>
  );
}
