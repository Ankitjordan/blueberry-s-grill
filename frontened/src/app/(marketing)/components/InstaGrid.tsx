import React from "react";
import Image from "next/image";

interface GridImage {
  src: string;
  alt: string;
}

const GRID_IMAGES: GridImage[] = [
  { src: "/images/foods/food_2.jpg",  alt: "Blueberry's Grill signature dish" },
  { src: "/images/foods/food_6.jpg",  alt: "Craft cocktail from Blueberry's bar" },
  { src: "/images/foods/food_10.jpg", alt: "Chef special at Blueberry's Grill" },
  { src: "/images/foods/food_8.jpg",  alt: "Blueberry's Grill interior dining experience" },
];

export const InstaGrid: React.FC = () => {
  return (
    <section
      id="insta-grid"
      aria-labelledby="insta-grid-heading"
      className="w-full bg-[#fdfaf5] py-14 sm:py-20 px-6 sm:px-12 border-b-4 border-black"
    >
      {/* Handle */}
      <h2
        id="insta-grid-heading"
        className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-center mb-10 sm:mb-14 uppercase"
      >
        @BLUEBERRYS.GRILL
      </h2>

      {/* 4-column photo strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-black overflow-hidden">
        {GRID_IMAGES.map((img, i) => (
          <GridPhoto key={img.src} image={img} index={i} />
        ))}
      </div>
    </section>
  );
};

/* ── Photo tile sub-component ── */
interface GridPhotoProps {
  image: GridImage;
  index: number;
}

const GridPhoto: React.FC<GridPhotoProps> = ({ image, index }) => {
  return (
    <div
      className={`
        group relative aspect-square overflow-hidden
        ${index !== 0 ? "border-l-2 border-black" : ""}
      `}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover object-center scale-100 group-hover:scale-105 grayscale group-hover:grayscale-0 transition-all duration-500 ease-out"
      />

      {/* Subtle dark overlay that fades on hover */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
    </div>
  );
};
