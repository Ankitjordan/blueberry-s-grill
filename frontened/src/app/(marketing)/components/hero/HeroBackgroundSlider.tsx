"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const HERO_IMAGES = [
  "/images/blueberrysgrill_hero/blueberrysgrill.png",
  "/images/blueberrysgrill_hero/Blueberry’s Grill – North Myrtle Beach.jpg",
];

function HeroBackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-stone-900 overflow-hidden">
      {HERO_IMAGES.map((src, index) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={{
            opacity: index === 0 ? 1 : 0,
            scale: 1,
          }}
          animate={{
            opacity: currentIndex === index ? 1 : 0,
            scale: currentIndex === index ? 1.02 : 1,
          }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 6, ease: "linear" }
          }}
        >
          <Image
            src={src}
            alt={`Hero Background ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={true}
            quality={100}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default HeroBackgroundSlider;
