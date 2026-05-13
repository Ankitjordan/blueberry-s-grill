"use client";

import { motion } from "motion/react";
import { IoStar } from "react-icons/io5";
import { DessertItem } from "../../desserts/data";

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
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-slate-900">
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
          className="lg:pt-20 space-y-10 lg:text-right flex flex-col lg:items-end w-full lg:w-auto"
        >
          {rating && (
            <div className="flex flex-col lg:items-end gap-3">
              <div className="flex items-center gap-1.5 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <IoStar
                    key={i}
                    size={24}
                    className={
                      i < Math.floor(rating!) ? "fill-current" : "opacity-20 text-slate-900"
                    }
                  />
                ))}
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-7xl md:text-8xl font-black text-slate-900 leading-none">
                  {rating.toFixed(1)}
                </span>
                <span className="text-xl text-slate-400 uppercase tracking-[0.2em] font-bold">
                  / 5.0
                </span>
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">
                Average Guest Rating
              </span>
            </div>
          )}

          {tags && (
            <div className="flex flex-wrap lg:justify-end gap-3 pt-4">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-6 py-2.5 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 hover:border-[#D4AF37]/50 hover:text-slate-900 transition-all duration-300 bg-slate-50"
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
