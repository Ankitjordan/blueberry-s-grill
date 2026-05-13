"use client";
import { motion } from "motion/react";
import { ImageBackgroundZoom } from "./image-background-zoom";
import { DessertItem } from "../../desserts/data";
export function MenuIngredients({ ingredientImages }: DessertItem) {
  return (
    <>
      {" "}
      {ingredientImages && (
        <div className="space-y-16">
          {" "}
          <div className="flex items-center gap-8">
            {" "}
            <div className="h-px flex-1 bg-slate-200" />{" "}
            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#D4AF37]">
              {" "}
              Curated Ingredients{" "}
            </h2>{" "}
            <div className="h-px flex-1 bg-slate-200" />{" "}
          </div>{" "}
          <div className="flex gap-8">
            {" "}
            {ingredientImages!.map((img, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6 group"
              >
                {" "}
                <ImageBackgroundZoom src={img.src} alt={img.name}>
                  {" "}
                  <div className="absolute top-4 left-4">
                    {" "}
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[9px] font-black uppercase tracking-widest text-slate-900">
                      {" "}
                      0{i + 1}{" "}
                    </span>{" "}
                  </div>{" "}
                </ImageBackgroundZoom>{" "}
                <div className="space-y-3 px-2">
                  {" "}
                  <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-[#D4AF37] transition-colors">
                    {" "}
                    {img.name}{" "}
                  </h3>{" "}
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {" "}
                    {img.description}{" "}
                  </p>{" "}
                </div>{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </div>
      )}{" "}
    </>
  );
}
