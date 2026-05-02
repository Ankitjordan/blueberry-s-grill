import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  id: string;
  image: string;
  alt: string;
  badge: string;
  badgeColor: string;
  name: string;
  price: string;
  description: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "og-burger",
    image: "/images/foods/food_4.jpg",
    alt: "The OG Burger — triple-smashed wagyu patty on brioche bun",
    badge: "BEST SELLER",
    badgeColor: "bg-[#ff5500] text-white",
    name: "The OG Burger",
    price: "$14",
    description: "Triple-smashed wagyu beef, secret vibe sauce, pickles on brioche.",
  },
  {
    id: "electric-pepperoni",
    image: "/images/foods/food_5.jpg",
    alt: "Electric Pepperoni pizza with hot honey drizzle",
    badge: "SPICY",
    badgeColor: "bg-[#2d3bfe] text-white",
    name: "Electric Pepperoni",
    price: "$18",
    description: "Double pepperoni, hot honey drizzle, fermented dough.",
  },
  {
    id: "disco-sour",
    image: "/images/foods/food_7.jpg",
    alt: "Disco Sour cocktail with butterfly pea and gold dust",
    badge: "POPULAR",
    badgeColor: "bg-[#d4ff00] text-black",
    name: "Disco Sour",
    price: "$12",
    description: "Gin, butterfly pea, elderflower, and gold glitter edible dust.",
  },
];

export const ChefsFavorites: React.FC = () => {
  return (
    <section
      id="chefs-favorites"
      aria-labelledby="chefs-favorites-heading"
      className="w-full bg-[#fdfaf5] py-16 sm:py-20 px-6 sm:px-12 border-b-4 border-black"
    >
      {/* Section Header */}
      <div className="flex items-baseline justify-between mb-10 sm:mb-14">
        <h2
          id="chefs-favorites-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none"
        >
          CHEF&apos;S FAVORITES
        </h2>
        <Link
          href="#menu"
          className="hidden sm:inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase underline decoration-2 underline-offset-4 hover:text-[#ff5500] transition-colors duration-150"
        >
          SEE FULL MENU&nbsp;→
        </Link>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {MENU_ITEMS.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-10 sm:hidden text-center">
        <Link
          href="#menu"
          className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase underline decoration-2 underline-offset-4 hover:text-[#ff5500] transition-colors duration-150"
        >
          SEE FULL MENU&nbsp;→
        </Link>
      </div>
    </section>
  );
};

/* ── Card Sub-component ── */
interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <article
      className="group flex flex-col border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200 bg-white overflow-hidden"
    >
      {/* Image Wrapper */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Badge */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 text-[11px] font-black tracking-widest uppercase border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${item.badgeColor}`}
        >
          {item.badge}
        </span>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-grow p-5 border-t-2 border-black">
        {/* Name + Price row */}
        <div className="flex items-baseline justify-between mb-2 gap-2">
          <h3 className="text-lg font-bold leading-tight">{item.name}</h3>
          <span className="text-xl font-black italic font-serif text-[#2d3bfe] whitespace-nowrap">
            {item.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-snug">{item.description}</p>
      </div>
    </article>
  );
};
