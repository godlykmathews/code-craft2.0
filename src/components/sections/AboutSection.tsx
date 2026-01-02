import { PixelCard } from "@/components/minecraft/PixelCard";
import { MinecraftBlock } from "@/components/minecraft/MinecraftBlock";

export const AboutSection = () => {
  return (
    <section
      id="#about"
      className="relative py-20 bg-gradient-to-b from-grass-top via-grass-side to-dirt overflow-hidden"
    >
      {/* Grass texture top */}
      <div className="absolute top-0 left-0 right-0 h-8 flex">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="w-4 bg-grass-top border-x border-inventory-border/30"
            style={{ height: 16 + Math.random() * 16 }}
          />
        ))}
      </div>

      {/* Decorative blocks */}
      <div className="absolute left-4 top-1/4">
        <MinecraftBlock type="grass" size="lg" />
      </div>
      <div className="absolute right-8 top-1/3">
        <MinecraftBlock type="dirt" size="md" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-xl md:text-3xl font-minecraft text-ore-gold text-shadow-pixel text-center mb-12">
          ABOUT
        </h2>

        <div className="max-w-4xl mx-auto mb-8">
          <PixelCard variant="wood">
            <p className="text-sm font-minecraft text-card-foreground leading-relaxed">
              CodeCraft is a unique opportunity for aspiring coders across
              Kerala to learn, create, and compete through a focused three-day
              online event held from January 6 to January 8, 2026, scheduled
              daily from 7:30 PM to 8:30 PM. Hosted on Python Library Joy, the
              program introduces participants to the creative world of Python
              Turtle graphics, enabling them to transform code into visually
              engaging designs. Under the guidance of Felvin Joseph A F,
              participants will gain hands-on experience by building creative
              visual outputs while strengthening their Python fundamentals.
              CodeCraft is conducted in collaboration with IEDC BOOTCAMP CEC,
              IEDC CEK, IEDC GEC, IEDC VISAT, FOCES CEC, and IEDC RIT, ensuring
              a strong technical and community-driven learning environment.
            </p>
          </PixelCard>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PixelCard variant="wood">
            <h3 className="text-sm md:text-base font-minecraft text-ore-gold mb-4">
              What You'll Learn
            </h3>
            <p className="text-sm font-minecraft text-card-foreground leading-relaxed">
              Participants will apply their skills through structured coding
              challenges, encouraging logical thinking and creativity. Gain
              hands-on experience with Python Turtle graphics and transform code
              into visually engaging designs.
            </p>
          </PixelCard>

          <PixelCard variant="wood">
            <h3 className="text-sm md:text-base font-minecraft text-ore-gold mb-4">
              Network & Collaborate
            </h3>
            <p className="text-sm font-minecraft text-card-foreground leading-relaxed">
              CodeCraft serves as a platform for interaction and networking with
              fellow aspiring coders across Kerala, fostering collaboration and
              peer learning in a competitive yet supportive setting.
            </p>
          </PixelCard>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <PixelCard variant="stone">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="text-center">
                <div className="text-xl font-minecraft text-ore-diamond">
                  3 Days
                </div>
                <div className="text-xs font-minecraft text-muted-foreground mt-1">
                  Jan 6-8
                </div>
              </div>
              <div className="w-px h-12 bg-inventory-border" />
              <div className="text-center">
                <div className="text-xl font-minecraft text-ore-gold">
                  7:30-8:30 PM
                </div>
                <div className="text-xs font-minecraft text-muted-foreground mt-1">
                  Daily
                </div>
              </div>
              <div className="w-px h-12 bg-inventory-border" />
              <div className="text-center">
                <div className="text-xl font-minecraft text-ore-emerald">
                  Online
                </div>
                <div className="text-xs font-minecraft text-muted-foreground mt-1">
                  Kerala
                </div>
              </div>
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
};
