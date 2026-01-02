import { MinecraftBlock } from "@/components/minecraft/MinecraftBlock";

export const FooterSection = () => {
  return (
    <footer className="relative py-10 sm:py-16 overflow-hidden">
      {/* Footer background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/footer-bg.png')",
          imageRendering: "pixelated",
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo blocks */}
          <div className="flex gap-1 mb-4 sm:mb-6">
            <MinecraftBlock type="grass" size="sm" />
            <MinecraftBlock type="stone" size="sm" />
            <MinecraftBlock type="diamond" size="sm" />
            <MinecraftBlock type="gold" size="sm" />
            <MinecraftBlock type="grass" size="sm" />
          </div>

          <h3 className="text-base sm:text-lg font-minecraft text-ore-gold text-shadow-pixel mb-3 sm:mb-4">
            CODE CRAFT 2.0
          </h3>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <a
              href="#"
              className="text-[10px] sm:text-xs font-minecraft text-muted-foreground hover:text-ore-diamond transition-colors py-2"
            >
              Discord
            </a>
            <a
              href="#"
              className="text-[10px] sm:text-xs font-minecraft text-muted-foreground hover:text-ore-diamond transition-colors py-2"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-[10px] sm:text-xs font-minecraft text-muted-foreground hover:text-ore-diamond transition-colors py-2"
            >
              YouTube
            </a>
            <a
              href="#"
              className="text-[10px] sm:text-xs font-minecraft text-muted-foreground hover:text-ore-diamond transition-colors py-2"
            >
              Contact
            </a>
          </div>

          <div className="w-full max-w-xs sm:max-w-md h-1 bg-inventory-border mb-4 sm:mb-6">
            <div className="h-full bg-gradient-to-r from-transparent via-ore-diamond to-transparent opacity-50" />
          </div>

          <p className="text-[10px] sm:text-xs font-minecraft text-muted-foreground text-center px-4">
            © 2026 CodeCraft. Powered by Team CodeCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
