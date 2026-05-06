import { MenuProductView } from "../../components/menu-product-view";
import { MenuInfoRating } from "../../components/menu-info-rating";
import { DESSERT_DATA } from "../data";

export default function BerryCreamWafflePage() {
  const item = DESSERT_DATA.find((item) => item.id === "berry-cream-waffle")!;
  return (
    <>
      <MenuProductView activeId="berry-cream-waffle" />
      <MenuInfoRating {...item} />
    </>
  );
}
