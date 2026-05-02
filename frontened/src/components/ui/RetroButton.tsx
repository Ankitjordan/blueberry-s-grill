import React from "react";

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  children: React.ReactNode;
}

const VARIANTS = {
  primary: "bg-[#ff5500] text-white",
  secondary: "bg-white text-black",
  accent: "bg-[#d4ff00] text-black",
};

export const RetroButton: React.FC<RetroButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-6 py-3 font-bold uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
