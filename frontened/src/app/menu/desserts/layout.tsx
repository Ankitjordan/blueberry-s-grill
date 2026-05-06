import React from "react";

import { MenuHeader } from "../components/menu-header";
import { MenuNavigation } from "../components/menu-navigation";
import { MenuFooterSection } from "../components/menu-footer-section";

export default function DessertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-[#D4AF37] selection:text-black">
      <main className="flex-1 pt-20 pb-24 relative overflow-hidden z-20">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1700px] mx-auto px-0 md:px-12 relative z-10">
          <MenuHeader />

          <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            <MenuNavigation />
            <div className="flex-1 min-h-[600px] px-6 md:px-0 relative flex flex-col">
              <div className="flex-1">
                {children}
              </div>
              <MenuFooterSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
