"use client";

import { motion } from "motion/react";

export const MenuHeader = () => {
  return (
    <div className="mb-8 flex flex-col items-center text-center px-6 md:px-0">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-6xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter leading-[0.85] mb-8 text-slate-900"
      >
        DESSERT <span className="text-[#D4AF37] block md:inline">LEGACY</span>
      </motion.h1>
    </div>
  );
};
