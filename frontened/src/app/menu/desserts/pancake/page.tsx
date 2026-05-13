import { MenuInfoRating } from "../../features/product-view/menu-info-rating";
import { MenuProductView } from "../../features/product-view/menu-product-view";
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
