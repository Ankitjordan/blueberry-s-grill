import { MenuInfoRating } from "../../features/product-view/menu-info-rating";
import { MenuIngredients } from "../../features/product-view/menu-ingredients";
import { MenuProductView } from "../../features/product-view/menu-product-view";
import { DESSERT_DATA } from "../data";
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
