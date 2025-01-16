/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        200: "#101214",
        500: "#FFC929",
        100: "#272416",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        marquee: "marquee 100s linear infinite",
        marquee2: "marquee2 100s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      typography: {
        css: {
          color: "white",
          "ul > li::marker": {
            color: "white",
          },
          "ol > li::marker": {
            color: "white",
          },
          li: {
            marginTop: "0.25rem",
            marginBottom: "0.25rem",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
