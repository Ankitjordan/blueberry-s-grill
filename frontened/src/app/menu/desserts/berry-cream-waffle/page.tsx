import { MenuInfoRating } from "../../features/product-view/menu-info-rating";
import { MenuProductView } from "../../features/product-view/menu-product-view";
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
