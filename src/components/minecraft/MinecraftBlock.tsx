import { cn } from "@/lib/utils";

interface MinecraftBlockProps {
  type:
    | "grass"
    | "dirt"
    | "stone"
    | "wood"
    | "diamond"
    | "gold"
    | "coal"
    | "iron"
    | "emerald"
    | "redstone";
  size?: "sm" | "md" | "lg";
  className?: string;
  animated?: boolean;
}

const blockStyles = {
  grass:
    "bg-grass-top border-t-4 border-t-grass-top border-x-dirt border-b-dirt bg-gradient-to-b from-grass-top via-grass-side to-dirt",
  dirt: "bg-dirt",
  stone: "bg-stone",
  wood: "bg-wood",
  diamond: "bg-ore-diamond",
  gold: "bg-ore-gold",
  coal: "bg-ore-coal",
  iron: "bg-ore-iron",
};

const sizeStyles = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

export const MinecraftBlock = ({
  type,
  size = "md",
  className,
  animated,
}: MinecraftBlockProps) => {
  return (
    <div
      className={cn(
        "relative",
        sizeStyles[size],
        blockStyles[type],
        "border-2 border-inventory-border",
        "shadow-[inset_2px_2px_0_rgba(255,255,255,0.3),inset_-2px_-2px_0_rgba(0,0,0,0.3)]",
        animated && "animate-float",
        className
      )}
      style={{ imageRendering: "pixelated" }}
    >
      {/* Pixel texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px),repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]" />
    </div>
  );
};
