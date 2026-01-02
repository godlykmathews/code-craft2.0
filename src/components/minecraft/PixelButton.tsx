import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "stone" | "grass" | "wood" | "diamond";
}

const variantStyles = {
  stone: "bg-stone hover:bg-stone-dark text-card-foreground",
  grass: "bg-grass-top hover:bg-grass-side text-primary-foreground",
  wood: "bg-wood hover:bg-wood-light text-card-foreground",
  diamond: "bg-ore-diamond hover:bg-accent text-accent-foreground",
};

export const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant = "stone", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative px-4 py-2.5 sm:px-6 sm:py-3 text-[10px] sm:text-xs uppercase tracking-wider font-minecraft",
          "border-4 border-inventory-border",
          "shadow-[inset_2px_2px_0_rgba(255,255,255,0.4),inset_-2px_-2px_0_rgba(0,0,0,0.4),4px_4px_0_hsl(var(--inventory-border))]",
          "hover:shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),inset_-2px_-2px_0_rgba(0,0,0,0.5),2px_2px_0_hsl(var(--inventory-border))]",
          "active:shadow-[inset_-2px_-2px_0_rgba(255,255,255,0.3),inset_2px_2px_0_rgba(0,0,0,0.5)]",
          "active:translate-x-1 active:translate-y-1",
          "transition-all duration-100",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "w-full sm:w-auto",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PixelButton.displayName = "PixelButton";
