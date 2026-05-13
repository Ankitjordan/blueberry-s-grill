export interface DessertItem {
	id: string;
	name: string;
	href: string;
	videoSrc: string;
	ingredients: string[];
	rating?: number;
	tags?: string[];
	description?: string;
	ingredientImages?: { name: string; src: string; description: string }[];
}

export const DESSERT_DATA: DessertItem[] = [
	{
		id: "nutella-waffle",
		name: "Nutella Waffle",
		href: "/menu/desserts",
		videoSrc: "/videos/desserts/Dish_rotating_on_plate_202605052244.mp4",
		rating: 4.8,
		tags: ["Best Seller", "Signature", "Classic"],
		ingredients: [
			"Premium Nutella",
			"Hand-crafted Belgian Waffle",
			"Organic Strawberries",
			"Chantilly Cream",
			"Gold-dusted Powdered Sugar",
		],
	},
	{
		id: "brownie-stack",
		name: "Brownie Stack",
		href: "/menu/desserts/brownie-stack",
		videoSrc: "/videos/desserts/brownie-stack.mp4",
		rating: 4.9,
		tags: ["Best Seller", "Signature", "Decadent"],
		description:
			"A towering masterpiece of rich, fudgy chocolate layers, artisanal vanilla bean ice cream, and handcrafted sauces. Every element is meticulously sourced and prepared to create a multi-dimensional dessert experience that defines indulgence.",
		ingredients: [
			"70% Dark Chocolate Brownies",
			"Tahitian Vanilla Bean Ice Cream",
			"Artisanal Hot Fudge",
			"Salted Caramel Drizzle",
			"Roasted Walnuts",
		],
		ingredientImages: [
			{
				name: "70% Dark Chocolate",
				src: "/images/desserts/brownie-stack/eggs.png",
				description:
					"We use exclusively 70% cacao dark chocolate, tempered to perfection to create the dense, fudgy core of our signature brownies.",
			},
			{
				name: "Tahitian Vanilla",
				src: "/images/desserts/brownie-stack/vanilla-icecream.png",
				description:
					"Our ice cream is churned daily using Tahitian vanilla beans, offering a floral and complex aroma that perfectly balances the rich chocolate.",
			},
			{
				name: "Farm Fresh Butter",
				src: "/images/desserts/brownie-stack/butter.png",
				description:
					"High-fat European-style butter ensures a velvety texture and rich flavor profile in every layer of the stack.",
			},
			{
				name: "Artisanal Berry Sauce",
				src: "/images/desserts/brownie-stack/berry-sauce.png",
				description:
					"A bright, acidic berry reduction provides the necessary contrast to the deep, dark chocolate notes.",
			},
		],
	},
	{
		id: "berry-cream-waffle",
		name: "Berry Cream Waffle",
		href: "/menu/desserts/berry-cream-waffle",
		videoSrc: "/videos/desserts/Berry-Cream-Waffle.mp4",
		rating: 4.7,
		tags: ["Signature", "Fresh", "Classic"],
		ingredients: [
			"Fresh Wild Berries",
			"Velvety Mascarpone Cream",
			"Crisp Belgian Waffle",
			"Organic Honey Drizzle",
			"Mint Garnish",
		],
		description:
			"A refreshing and vibrant waffle experience topped with a mountain of fresh berries and silken cream.",
	},
	{
		id: "chocolate-banana-french-toast",
		name: "Chocolate Banana French Toast",
		href: "/menu/desserts/chocolate-banana-french-toast",
		videoSrc: "/videos/desserts/Chocolate-Banana-French-Toast.mp4",
		rating: 4.8,
		tags: ["Best Seller", "Signature", "Gourmet"],
		ingredients: [
			"Brioche Bread",
			"Caramelized Bananas",
			"Dark Chocolate Shavings",
			"Maple Bourbon Syrup",
			"Toasted Pecans",
		],
		description:
			"Indulgent thick-cut brioche French toast layered with rich chocolate and sweet caramelized bananas.",
	},
	{
		id: "pancake",
		name: "Pancake",
		href: "/menu/desserts/pancake",
		videoSrc: "/videos/desserts/pancake.mp4",
		rating: 4.6,
		tags: ["Classic", "Breakfast Favorite", "Signature"],
		ingredients: [
			"Fluffy Buttermilk Batter",
			"Clarified Butter",
			"Pure Vermont Maple Syrup",
			"Whipped Sea Salt Butter",
			"Seasonal Berry Compote",
		],
		description:
			"Classic, perfectly fluffy buttermilk pancakes served with premium maple syrup and artisanal butter.",
	},
];
