import React from "react";

interface MarqueeTextProps {
  text: string;
}

export const MarqueeText: React.FC<MarqueeTextProps> = ({ text }) => {
  return (
    <div className="w-full bg-[#1a1a1a] text-white overflow-hidden py-3 sm:py-4 border-t-4 border-black relative flex items-center">
      <div className="flex animate-marquee whitespace-nowrap items-center font-bold tracking-[0.2em] text-sm sm:text-base lg:text-lg uppercase">
        <span className="mx-4 sm:mx-8">{text}</span>
        <span className="mx-4 sm:mx-8">{text}</span>
        <span className="mx-4 sm:mx-8">{text}</span>
        <span className="mx-4 sm:mx-8">{text}</span>
        <span className="mx-4 sm:mx-8">{text}</span>
        <span className="mx-4 sm:mx-8">{text}</span>
      </div>
    </div>
  );
};
