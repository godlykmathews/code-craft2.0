import { PixelCard } from "@/components/minecraft/PixelCard";

const collaborators = [
  { name: "IEDC BOOTCAMP CEC", skin: "/iedccec.webp" },
  { name: "IEDC CEK", skin: "/iedccek.webp" },
  { name: "IEDC GEC", skin: "/iedc-gect.jpeg" },
  { name: "IEDC VISAT", skin: "/visatiedc.jpeg" },
  { name: "FOCES CEC", skin: "/foces.webp" },
  { name: "IEDC RIT", skin: "/iedcrit.png" },
];

export const CollabSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-cobble via-stone-dark to-hotbar overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-xl md:text-3xl font-minecraft text-ore-gold text-shadow-pixel text-center mb-12">
          COLLABORATORS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {collaborators.map((collab) => (
            <PixelCard
              key={collab.name}
              variant="inventory"
              className="text-center bg-white hover:-translate-y-1 transition-transform"
            >
              {/* Clean logo area */}
              <div className="mx-auto mb-4 flex items-center justify-center bg-white">
                <img
                  src={collab.skin}
                  alt={collab.name}
                  className="w-28 h-28 md:w-60 md:h-40 object-contain"
                />
              </div>

              <h3 className="text-xs font-minecraft text-ore-gold leading-tight">
                {collab.name}
              </h3>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
};
