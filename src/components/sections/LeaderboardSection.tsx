import { PixelCard } from "@/components/minecraft/PixelCard";
import { MinecraftBlock } from "@/components/minecraft/MinecraftBlock";

const leaderboardData = [
  { rank: 1, username: "DiamondKing", score: 15420, badge: "diamond" },
  { rank: 2, username: "GoldMiner", score: 12350, badge: "gold" },
  { rank: 3, username: "IronForge", score: 10200, badge: "iron" },
];

export const LeaderboardSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-dirt via-dirt-light to-stone overflow-hidden">
      {/* Dirt to stone transition */}
      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_8px,rgba(0,0,0,0.1)_8px,rgba(0,0,0,0.1)_16px),repeating-linear-gradient(90deg,transparent,transparent_8px,rgba(0,0,0,0.1)_8px,rgba(0,0,0,0.1)_16px)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-xl md:text-3xl font-minecraft text-ore-gold text-shadow-pixel text-center mb-12">
          LEADERBOARD
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <PixelCard variant="inventory">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b-4 border-inventory-border">
              <div className="text-xs font-minecraft text-ore-gold">RANK</div>
              <div className="text-xs font-minecraft text-ore-gold">PLAYER</div>
              <div className="text-xs font-minecraft text-ore-gold text-right">SCORE</div>
            </div>
            
            {/* Rows */}
            <div className="space-y-2">
              {leaderboardData.map((player) => (
                <div
                  key={player.rank}
                  className="grid grid-cols-3 gap-4 items-center p-3 bg-inventory-slot border-2 border-inventory-border shadow-[inset_2px_2px_0_rgba(0,0,0,0.3),inset_-2px_-2px_0_rgba(255,255,255,0.1)] hover:bg-stone transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <MinecraftBlock 
                      type={player.badge as "diamond" | "gold" | "iron" | "stone" | "coal"} 
                      size="sm" 
                    />
                    <span className="text-xs font-minecraft text-card-foreground">#{player.rank}</span>
                  </div>
                  <div className="text-xs font-minecraft text-card-foreground truncate">
                    {player.username}
                  </div>
                  <div className="text-xs font-minecraft text-ore-gold text-right">
                    {player.score.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
};
