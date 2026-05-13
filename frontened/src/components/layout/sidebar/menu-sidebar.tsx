"use client";

import { motion, AnimatePresence } from "motion/react";
import { IoClose } from "react-icons/io5";

import React, { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

interface MenuSidebarProps {
  title?: string;
  items?: string[];
  activeItem?: string;
  onItemClick?: (item: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const MenuSidebar = ({ 
  title = "Menu Navigation", 
  items = [], 
  activeItem,
  onItemClick,
  isOpen,
  onClose
}: MenuSidebarProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />
          
          {/* Sidebar Panel */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 md:top-[73px] left-0 w-full sm:w-80 bg-background border-r border-slate-200 h-full md:h-[calc(100vh-73px)] z-[9999] shadow-[20px_0_50px_rgba(0,0,0,0.05)] overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Header inside sidebar (especially for mobile) */}
              <div className="flex items-center justify-between p-8 border-b border-slate-200">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">
                  {title}
                </h3>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900"
                >
                  <IoClose size={20} />
                </button>
              </div>

              <nav className="flex-1 py-6 px-2">
                <div className="space-y-1">
                  {items.map((item) => {
                    const isActive = activeItem === item;
                    return (
                      <button
                        key={item}
                        onClick={() => {
                          onItemClick?.(item);
                          // We might want to close on click for mobile, but let's see
                        }}
                        className={`group relative w-full py-4 px-6 text-left text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-xl ${
                          isActive ? "text-[#D4AF37] bg-slate-100" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="sidebar-active-indicator"
                            className="absolute inset-y-3 left-0 w-1 bg-[#D4AF37] rounded-full"
                          />
                        )}
                        <span className="relative z-10">{item}</span>
                      </button>
                    );
                  })}
                </div>
              </nav>

              {/* Bottom Decoration */}
              <div className="p-8 border-t border-white/5 opacity-30 select-none pointer-events-none">
                <span className="text-[40px] font-black uppercase tracking-tighter block leading-none">
                  MENU
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                  Blueberry&apos;s Grill
                </span>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
