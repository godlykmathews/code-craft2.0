import { PixelCard } from "@/components/minecraft/PixelCard";
import { useEffect, useState } from "react";

interface LeaderboardEntry {
  Rank: string;
  Player: string;
  College: string;
  ID: string;
}

export const LeaderboardSection = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1Cwjpdb_K8PPmP2GNqMgHGp0dNmX5_tHDo45ciuEy7mU/Leader%20Board"
    )
      .then((res) => res.json())
      .then((data) => {
        setLeaderboardData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching leaderboard:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-dirt via-dirt-light to-stone overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_8px,rgba(0,0,0,0.1)_8px,rgba(0,0,0,0.1)_16px),repeating-linear-gradient(90deg,transparent,transparent_8px,rgba(0,0,0,0.1)_8px,rgba(0,0,0,0.1)_16px)]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-xl md:text-3xl font-minecraft text-ore-gold text-shadow-pixel text-center mb-12">
          LEADERBOARD
        </h2>

        <div className="max-w-8xl mx-auto">
          <PixelCard variant="inventory">
            {/* Header (hidden on mobile) */}
            <div className="hidden sm:grid grid-cols-[60px_1.5fr_2fr_100px] gap-4 mb-4 pb-4 border-b-4 border-inventory-border">
              <div className="text-xs font-minecraft text-ore-gold">RANK</div>
              <div className="text-xs font-minecraft text-ore-gold">PLAYER</div>
              <div className="text-xs font-minecraft text-ore-gold">
                COLLEGE
              </div>
              <div className="text-xs font-minecraft text-ore-gold text-right">
                ID
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-2">
              {loading ? (
                <div className="text-center py-8 text-xs font-minecraft text-card-foreground">
                  Loading leaderboard...
                </div>
              ) : leaderboardData.length === 0 ? (
                <div className="text-center py-8 text-xs font-minecraft text-card-foreground">
                  No data available
                </div>
              ) : (
                leaderboardData.map((player) => (
                  <div
                    key={player.ID}
                    className="bg-inventory-slot border-2 border-inventory-border
                    shadow-[inset_2px_2px_0_rgba(0,0,0,0.3),inset_-2px_-2px_0_rgba(255,255,255,0.1)]
                    hover:bg-stone transition-colors p-3"
                  >
                    {/* Desktop / Tablet */}
                    <div className="hidden sm:grid grid-cols-[60px_1.5fr_2fr_100px] gap-4 items-center">
                      <div className="text-xs font-minecraft text-card-foreground">
                        #{player.Rank}
                      </div>

                      <div
                        className="text-xs font-minecraft text-card-foreground truncate"
                        title={player.Player}
                      >
                        {player.Player}
                      </div>

                      <div
                        className="text-xs font-minecraft text-card-foreground truncate"
                        title={player.College}
                      >
                        {player.College}
                      </div>

                      <div className="text-xs font-minecraft text-ore-gold text-right">
                        {player.ID}
                      </div>
                    </div>

                    {/* Mobile */}
                    <div className="sm:hidden space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-minecraft text-card-foreground">
                          Rank #{player.Rank}
                        </span>
                        <span className="text-xs font-minecraft text-ore-gold">
                          {player.ID}
                        </span>
                      </div>

                      <div className="text-xs font-minecraft text-card-foreground font-bold truncate">
                        {player.Player}
                      </div>

                      <div className="text-xs font-minecraft text-card-foreground opacity-70 truncate">
                        {player.College}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
};
