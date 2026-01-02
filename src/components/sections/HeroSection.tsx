import { PixelButton } from "@/components/minecraft/PixelButton";

import grass3 from "@/assets/Grass_(item).webp";
// Import floating block images here
import oakLeaves from "@/assets/Oak_Leaves.webp";
import knowledgeBook from "@/assets/Knowledge_Book_JE2.webp";
import whiteGlazedTerracotta from "@/assets/White_Glazed_Terracotta_JE2_BE2.webp";
import wolfDungeons from "@/assets/Wolf_(Dungeons).webp";
import beeDungeons from "@/assets/Bee_(Dungeons).webp";
import alexBE from "@/assets/Alex_BE.webp";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundImage: 'url(/img2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {/* Floating ore blocks - hidden on very small screens, shown on sm and up */}
      <img
        src={oakLeaves}
        alt="oak leaves"
        className="hidden sm:block absolute top-[20%] left-[5%] sm:left-[15%] w-8 sm:w-12 md:w-16 animate-float"
        style={{ imageRendering: "pixelated" }}
      />
      <img
        src={knowledgeBook}
        alt="knowledge book"
        className="hidden sm:block absolute top-[25%] right-[5%] sm:right-[15%] w-8 sm:w-12 md:w-16 animate-float-delayed"
        style={{ imageRendering: "pixelated" }}
      />
      <img
        src={whiteGlazedTerracotta}
        alt="white glazed terracotta"
        className="hidden md:block absolute top-[40%] left-[3%] w-16 md:w-20 animate-float-slow"
        style={{ imageRendering: "pixelated" }}
      />
      <img
        src={wolfDungeons}
        alt="wolf"
        className="absolute top-[70%] sm:top-[60%] right-[3%] sm:right-[20%] w-16 sm:w-20 md:w-36 animate-float"
        style={{ imageRendering: "pixelated" }}
      />
      <img
        src={beeDungeons}
        alt="bee"
        className="absolute top-[32%] sm:top-[20%] left-[50%] -translate-x-1/2 w-10 sm:w-10 md:w-12 animate-float-delayed"
        style={{ imageRendering: "pixelated" }}
      />
      <img
        src={alexBE}
        alt="alex"
        className="hidden md:block absolute top-[40%] right-[8%] w-12 md:w-16 animate-float-slow"
        style={{ imageRendering: "pixelated" }}
      />
      <img
        src="/Villager.webp"
        alt="villager"
        className="absolute top-[50%] left-[3%] sm:left-[15%] -translate-y-1/2 w-16 sm:w-16 md:w-24 animate-float"
        style={{ imageRendering: "pixelated" }}
      />

      {/* Title content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 text-center pt-20 sm:pt-24">
        <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-minecraft text-ore-gold text-shadow-pixel mb-4 sm:mb-6 leading-tight p-0.5 sm:p-0">
          CODECRAFT 2.0
        </h1>
        <h2 className="text-xs sm:text-lg md:text-xl font-minecraft text-card-foreground text-shadow-pixel mb-4 sm:mb-6 pt-1 sm:pt-2 px-2">
          THREE-DAY CODING BOOTCAMP
        </h2>
        <p className="hidden sm:block text-sm md:text-lg font-minecraft text-white mb-8 sm:mb-12 max-w-xl md:max-w-2xl lg:max-w-3xl px-2 leading-relaxed">
          CodeCraft 2.0, a three-day coding bootcamp from Jan 6 to Jan 8, 2026,
          challenges aspiring coders. Implement your ideas, compete in
          challenges, and network with peers.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <PixelButton
            variant="grass"
            onClick={() =>
              (window.location.href = "https://dub.sh/codecraft2.0")
            }
          >
            Register Now
          </PixelButton>

          <PixelButton
            variant="stone"
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn More
          </PixelButton>
        </div>
      </div>

      {/* Bottom grass blocks */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-nowrap overflow-hidden items-end h-20 md:h-24">
        {Array.from({ length: 50 }).map((_, i) => {
          const grassTypes = [{ src: grass3 }];
          const randomGrass = grassTypes[Math.floor(Math.random() * 1)];
          return (
            <img
              key={i}
              src={randomGrass.src}
              alt="grass"
              className="h-full w-auto object-cover object-bottom"
              style={{
                imageRendering: "pixelated",
              }}
            />
          );
        })}
      </div>
    </section>
  );
};
