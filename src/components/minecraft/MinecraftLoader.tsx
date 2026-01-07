import React, { useEffect, useState } from "react";


interface MinecraftLoaderProps {
  onComplete?: () => void;
}


const MinecraftBlock = () => (
    <img 
        src="/Enchanting_Table.webp" 
        alt="Minecraft Block"
    />
);

export const MinecraftLoader = ({ onComplete }: MinecraftLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const loadingTexts = [
    "Generating terrain...",
    "Loading chunks...",
    "Spawning mobs...",
    "Mining diamonds...",
    "Crafting pixels...",
  ];

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onComplete) setTimeout(onComplete, 800); // Small delay before unmount
          return 100;
        }
        // Random increment for realistic feel
        return Math.min(prev + Math.random() * 10, 100);
      });
    }, 200);

    // Rotate texts
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm text-foreground">
      <div className="flex flex-col items-center gap-8 animate-in fade-in zoom-in duration-500">
        {/* Animated Block Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
          <div className="animate-float">
            <MinecraftBlock/>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-64 md:w-80">
          <h2 className="font-minecraft text-xl md:text-2xl text-center text-primary animate-pulse">
            {loadingTexts[textIndex]}
          </h2>

          {/* Minecraft Style Progress Bar */}
          <div className="w-full h-4 sm:h-6 bg-stone-dark border-2 border-inventory-border relative shadow-inner">
            <div
              className="h-full bg-grass-top transition-all duration-300 ease-out border-r-2 border-grass-side relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/10 w-full h-full animate-shimmer" />
            </div>

            {/* Progress lines/notches */}
            <div className="absolute inset-0 flex justify-evenly pointer-events-none">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-0.5 h-full bg-inventory-border/30" />
              ))}
            </div>
          </div>

          <div className="font-minecraft text-xs text-muted-foreground">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
};
