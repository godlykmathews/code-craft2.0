import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        minecraft: ['"Press Start 2P"', "cursive"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Minecraft specific
        sky: {
          light: "hsl(var(--sky-light))",
          dark: "hsl(var(--sky-dark))",
        },
        cloud: "hsl(var(--cloud))",
        sun: "hsl(var(--sun))",
        grass: {
          top: "hsl(var(--grass-top))",
          side: "hsl(var(--grass-side))",
        },
        dirt: {
          DEFAULT: "hsl(var(--dirt))",
          light: "hsl(var(--dirt-light))",
        },
        stone: {
          DEFAULT: "hsl(var(--stone))",
          dark: "hsl(var(--stone-dark))",
        },
        cobble: "hsl(var(--cobble))",
        wood: {
          DEFAULT: "hsl(var(--wood))",
          light: "hsl(var(--wood-light))",
          plank: "hsl(var(--plank))",
        },
        ore: {
          coal: "hsl(var(--coal))",
          iron: "hsl(var(--iron))",
          gold: "hsl(var(--gold))",
          diamond: "hsl(var(--diamond))",
          emerald: "hsl(var(--emerald))",
          redstone: "hsl(var(--redstone))",
        },
        inventory: {
          bg: "hsl(var(--inventory-bg))",
          slot: "hsl(var(--inventory-slot))",
          border: "hsl(var(--inventory-border))",
        },
        hotbar: "hsl(var(--hotbar))",
        torch: {
          glow: "hsl(var(--torch-glow))",
          ambient: "hsl(var(--torch-ambient))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "var(--radius)",
        sm: "var(--radius)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "torch-flicker": {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
          "75%": { opacity: "0.6" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        "torch-flicker": "torch-flicker 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
