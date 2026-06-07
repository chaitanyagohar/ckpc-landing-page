import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Extracted directly from the CKPC Logo
        ckpc: {
          yellow: "#FBB03B",   // The bright top of the sunburst
          orange: "#E35205",   // The deep orange at the bottom
          charcoal: "#141414", // The exact grey of the "ckpc" text
        }
      },
    },
  },
  plugins: [],
};
export default config;