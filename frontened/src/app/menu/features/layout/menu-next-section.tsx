"use client";

import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { DirectionalButton } from "@/components/ui/DirectionalButton";
import { useTransitionNavigation } from "@/components/transition-provider";

interface MenuNextSectionProps {
  description?: string;
  nextItemName: string;
  nextItemHref: string;
}

export const MenuNextSection = ({
  description,
  nextItemName,
  nextItemHref,
}: MenuNextSectionProps) => {
  const { navigateWithTransition } = useTransitionNavigation();

  return (
    <div className="flex flex-col items-center justify-center pt-12">
      {description && (
        <div className="mb-12 text-center max-w-2xl">
          <p className="text-slate-500 text-lg leading-relaxed italic">
            "{description}"
          </p>
        </div>
      )}

      <DirectionalButton
        variant="primary"
        onClick={() => navigateWithTransition(nextItemHref, nextItemName)}
        className="group flex items-center gap-4 py-5 px-12 min-w-[280px]"
      >
        <div className="flex flex-col items-start text-left">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 mb-0.5">
            Experience Next
          </span>
          <span className="text-lg font-black uppercase tracking-tighter">
            {nextItemName}
          </span>
        </div>
        <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors ml-auto">
          <IoChevronForward size={20} />
        </div>
      </DirectionalButton>
    </div>
  );
};
