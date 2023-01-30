/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      colors: {
        neutral: {
          "Almost-White": "hsl(0, 0%, 98%)",
          "Medium-Gray": "hsl(0, 0%, 41%)",
          "Almost-Black": "hsl(0, 0%, 8%)",
        },
      },
    },
  },
  plugins: [],
};
