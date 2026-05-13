"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MenuSidebar } from "@/components/layout/sidebar/menu-sidebar";
import { HeroEnhancedVideo } from "./hero-enhanced-video";

export const MenuView = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Nutella Waffle");

  return (
    <>
      {/* Sidebar Toggle Button */}
      {!isSidebarOpen && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setIsSidebarOpen(true)}
          className="fixed left-6 md:left-12 top-[100px] z-[45] flex items-center gap-4 bg-white/80 backdrop-blur-md border border-slate-200 py-3 px-5 rounded-full hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl group"
        >
          <div className="flex flex-col gap-1.5">
            <div className="w-5 h-0.5 bg-[#D4AF37]" />
            <div className="w-3 h-0.5 bg-[#D4AF37] group-hover:w-5 transition-all duration-300" />
            <div className="w-5 h-0.5 bg-[#D4AF37]" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-900 transition-colors">
            Menu
          </span>
        </motion.button>
      )}

      {/* Navigation Sidebar Drawer */}
      <MenuSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        title="DESSERT SELECTIONS"
        items={[
          "Nutella Waffle",
          "Brownie Stack",
          "Blueberry Pancakes",
          "Ice Cream Sundae",
          "Chocolate Lava Cake",
          "Classic Apple Crumble",
          "New York Cheesecake",
        ]}
        activeItem={activeItem}
        onItemClick={(item) => {
          setActiveItem(item);
          setIsSidebarOpen(false);
        }}
      />

      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* Main Content Area */}
        <div className="flex-1 min-h-[600px] px-6 md:px-0 relative">
          <AnimatePresence mode="wait">
            {activeItem === "Nutella Waffle" && (
              <motion.div
                key="nutella-waffle-video"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: "circOut" }}
              >
                <HeroEnhancedVideo src="/videos/desserts/Dish_rotating_on_plate_202605052244.mp4" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
