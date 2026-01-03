import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "Timeline", href: "#timeline" },
  { label: "Collab", href: "#collab" },
  { label: "FAQ", href: "#faq" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Tree branch */}
      <div className="relative bg-[url('/textures/oak_log.png')] bg-repeat-x">
        {/* uneven branch bottom */}
        <div className="absolute bottom-[-10px] left-0 right-0 h-3 bg-[url('/textures/branch-edge.png')] bg-repeat-x" />

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="MC WORLD"
                className="h-16 drop-shadow-[0_2px_0_#000]"
              />
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-end gap-4">
              {navItems.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-xs font-minecraft",
                    "bg-[linear-gradient(to_bottom,#5C4033,#B8937A,#3D2A20)]",
                    "text-white border-2 border-[#2e5a2e]",
                    "shadow-md transition-all duration-200",
                    "hover:-translate-y-1 hover:rotate-[-1deg] hover:shadow-lg",
                    i % 2 === 0 ? "mb-1" : "mb-3" // hanging variation
                  )}
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  {item.label}

                  {/* hanging string */}
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-[#2b1d12]" />
                </a>
              ))}
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-12 h-12 bg-[url('/textures/oak_planks.png')] flex items-center justify-center border-2 border-[#2b1d12] rounded"
            >
              <div className="flex flex-col items-center justify-center space-y-1.5">
                <div
                  className={cn(
                    "w-6 h-0.5 bg-black transition-all duration-300",
                    isOpen && "rotate-45 translate-y-2"
                  )}
                />
                <div
                  className={cn(
                    "w-6 h-0.5 bg-black transition-all duration-300",
                    isOpen && "opacity-0"
                  )}
                />
                <div
                  className={cn(
                    "w-6 h-0.5 bg-black transition-all duration-300",
                    isOpen && "-rotate-45 -translate-y-2"
                  )}
                />
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300",
              isOpen ? "max-h-[500px] pb-4" : "max-h-0"
            )}
          >
            <div className="mt-3 bg-green-200 p-3 rounded-lg shadow-[inset_2px_2px_0_rgba(0,0,0,0.3)] border-4 border-green-400">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-4 text-sm font-minecraft text-grey-200 hover:bg-green-300/30 rounded-md active:bg-green-400/40 transition-colors"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" , textDecoration: "underline"}}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
