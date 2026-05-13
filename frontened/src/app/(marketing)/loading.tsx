import React from "react";

export default function MarketingLoading() {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center min-h-[60vh] gap-6 z-50 relative">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:-0.3s]" />
        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:-0.15s]" />
        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce" />
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37]/60">
        Curating Experience...
      </span>
    </div>
  );
}
