import { MenuProductView } from "../../components/menu-product-view";
import { MenuInfoRating } from "../../components/menu-info-rating";
import { DESSERT_DATA } from "../data";

export default function ChocolateBananaFrenchToastPage() {
  const item = DESSERT_DATA.find((item) => item.id === "chocolate-banana-french-toast")!;
  return (
    <>
      <MenuProductView activeId="chocolate-banana-french-toast" />
      <MenuInfoRating {...item} />
    </>
  );
}
