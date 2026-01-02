import { MinecraftBlock } from "@/components/minecraft/MinecraftBlock";

const timelineData = [
  {
    year: "Dec 31",
    title: "Portal Opens",
    description: "Enter the Nether. Registrations begin.",
    blockType: "wood" as const,
  },
  {
    year: "Jan 6-8",
    title: "The Nether Run",
    description: "Three days of intense building and survival.",
    blockType: "stone" as const,
  },
  {
    year: "Jan 10",
    title: "Final Drop",
    description: "Throw your final build into the lava.",
    blockType: "gold" as const,
  },
  {
    year: "Jan 15",
    title: "Legends Rise",
    description: "Victors emerge from the fire.",
    blockType: "diamond" as const,
  },
];

export const TimelineSection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-stone via-stone-dark to-cobble overflow-hidden">
      {/* Stone texture */}
      <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-lg sm:text-xl md:text-3xl font-minecraft text-ore-gold text-shadow-pixel text-center mb-10 sm:mb-16">
          TIMELINE
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            {/* Vertical line made of blocks */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-4 bg-inventory-border hidden md:block" />

            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center mb-8 sm:mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left"
                  } text-center md:text-inherit`}
                >
                  <div className="bg-wood-plank border-4 border-wood p-3 sm:p-4 shadow-[inset_2px_2px_0_rgba(255,255,255,0.2),inset_-2px_-2px_0_rgba(0,0,0,0.3),4px_4px_0_rgba(0,0,0,0.4)]">
                    <span className="text-base sm:text-lg font-minecraft text-ore-gold">
                      {item.year}
                    </span>
                    <h3 className="text-xs sm:text-sm font-minecraft text-card-foreground mt-2">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-minecraft text-muted-foreground mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center block */}
                <div className="md:w-2/12 flex justify-center my-3 sm:my-4 md:my-0">
                  <div className="relative z-10">
                    <MinecraftBlock type={item.blockType} size="lg" animated />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
