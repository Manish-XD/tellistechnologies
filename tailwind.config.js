/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryGreen: "#023A15",
      },
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
        montserrat: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
