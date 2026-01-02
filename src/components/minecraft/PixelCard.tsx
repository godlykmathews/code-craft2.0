import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PixelCardProps {
  children: ReactNode;
  variant?: "wood" | "stone" | "dirt" | "inventory";
  className?: string;
}

const variantStyles = {
  wood: "bg-wood-plank border-wood",
  stone: "bg-stone border-stone-dark",
  dirt: "bg-dirt border-dirt-light",
  inventory: "bg-inventory-bg border-inventory-border",
};

export const PixelCard = ({ children, variant = "wood", className }: PixelCardProps) => {
  return (
    <div
      className={cn(
        "relative p-4 sm:p-6 border-4",
        "shadow-[inset_3px_3px_0_rgba(255,255,255,0.2),inset_-3px_-3px_0_rgba(0,0,0,0.3),6px_6px_0_rgba(0,0,0,0.4)]",
        variantStyles[variant],
        className
      )}
    >
      {/* Pixel texture */}
      <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(0,0,0,0.1)_4px,rgba(0,0,0,0.1)_8px),repeating-linear-gradient(90deg,transparent,transparent_4px,rgba(0,0,0,0.1)_4px,rgba(0,0,0,0.1)_8px)] pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
