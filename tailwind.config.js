/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#9b9b9b",
        orange: "#FB644B",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
