import { cn } from "@/lib/utils";

interface CloudProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Cloud = ({ className, size = "md" }: CloudProps) => {
  const sizeClasses = {
    sm: "w-24 h-8",
    md: "w-40 h-12",
    lg: "w-56 h-16",
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      {/* Cloud made of blocks */}
      <div className="absolute inset-0 flex items-end">
        <div className="flex">
          <div className="w-4 h-4 bg-cloud border border-cloud/80 shadow-[inset_1px_1px_0_rgba(255,255,255,0.5)]" />
          <div className="w-4 h-8 bg-cloud border border-cloud/80 shadow-[inset_1px_1px_0_rgba(255,255,255,0.5)]" />
          <div className="w-4 h-12 bg-cloud border border-cloud/80 shadow-[inset_1px_1px_0_rgba(255,255,255,0.5)]" />
          <div className="w-4 h-8 bg-cloud border border-cloud/80 shadow-[inset_1px_1px_0_rgba(255,255,255,0.5)]" />
          <div className="w-4 h-12 bg-cloud border border-cloud/80 shadow-[inset_1px_1px_0_rgba(255,255,255,0.5)]" />
          <div className="w-4 h-8 bg-cloud border border-cloud/80 shadow-[inset_1px_1px_0_rgba(255,255,255,0.5)]" />
          <div className="w-4 h-4 bg-cloud border border-cloud/80 shadow-[inset_1px_1px_0_rgba(255,255,255,0.5)]" />
        </div>
      </div>
    </div>
  );
};
