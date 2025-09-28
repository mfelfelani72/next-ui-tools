/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern:
        /^(bg|text|border|ring)-(red|blue|green|yellow|purple|pink|indigo|gray)-(100|200|300|400|500|600|700|800|900)$/,
    },
    {
      pattern:
        /^(from|to)-(red|blue|green|yellow|purple|pink|indigo|gray)-(500|600|700)$/,
    },
    "bg-gradient-to-r",
    "bg-gradient-to-l",
    "bg-gradient-to-t",
    "bg-gradient-to-b",
    "border-2",
    "border-4",
    "shadow-lg",
    "shadow-xl",
    "shadow-2xl",
    "shadow-inner",
    "rounded-full",
    "rounded-lg",
    "rounded-xl",
    "scale-95",
    "scale-105",
    "scale-110",
    "rotate-12",
    "-rotate-12",
    "translate-y-1",
    "brightness-90",
    "brightness-110",
    "animate-pulse",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
