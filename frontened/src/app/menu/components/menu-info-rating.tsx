"use client";

import { motion } from "motion/react";
import { IoStar } from "react-icons/io5";
import { DessertItem } from "../desserts/data";

export function MenuInfoRating({ name, rating, tags }: DessertItem) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 px-2 relative">
      {/* Left: Name */}
      <div className="flex-1 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37] block mb-4 opacity-70">
            Signature Selection
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-white">
            {name.split(" ").map((word, i) => (
              <span key={i} className="block last:text-[#D4AF37]">
                {word}
              </span>
            ))}
          </h1>
        </motion.div>
      </div>

      {/* Right: Rating & Tags */}
      {(rating || tags) && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="lg:pt-24 space-y-8 lg:text-right flex flex-col lg:items-end"
        >
          {rating && (
            <div className="flex flex-col lg:items-end gap-2">
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <IoStar
                    key={i}
                    size={20}
                    className={
                      i < Math.floor(rating!) ? "fill-current" : "opacity-30"
                    }
                  />
                ))}
              </div>
              <span className="text-4xl font-black text-white">
                {rating}{" "}
                <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                  / 5.0
                </span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Average Guest Rating
              </span>
            </div>
          )}

          {tags && (
            <div className="flex flex-wrap lg:justify-end gap-3">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
