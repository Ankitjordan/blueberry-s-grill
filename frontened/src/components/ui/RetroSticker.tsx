import React from "react";

interface RetroStickerProps {
  children: React.ReactNode;
  variant?: "pill" | "circle";
  className?: string;
  rotation?: string;
}

const VARIANTS = {
  pill: "px-4 py-1 bg-white text-black text-sm font-bold border-2 border-black rounded-full",
  circle: "w-24 h-24 sm:w-32 sm:h-32 bg-[#2d3bfe] text-white font-bold border-2 border-black rounded-full flex items-center justify-center text-center p-2 text-sm sm:text-base leading-tight",
};

export const RetroSticker: React.FC<RetroStickerProps> = ({
  children,
  variant = "pill",
  className = "",
  rotation = "rotate-0",
}) => {
  return (
    <div
      className={`absolute shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 ${VARIANTS[variant]} ${rotation} ${className}`}
    >
      {children}
    </div>
  );
};
