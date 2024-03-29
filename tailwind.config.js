/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1224px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "520px" },
      // => @media (max-width: 1023px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
