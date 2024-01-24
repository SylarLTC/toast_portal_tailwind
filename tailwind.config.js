const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        progressBar: "progressBar 3s linear forwards",
      },
      keyframes: {
        progressBar: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities }) {
      addUtilities({
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      });
      addComponents({
        ".btn": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "196px",
          height: "30px",
          borderRadius: "8px",
          cursor: "pointer",
        },
        ".btn-success": {
          color: "white",
          backgroundColor: "#22c55e",
        },
        ".btn-info": {
          color: "white",
          backgroundColor: "#3b82f6",
        },
        ".btn-warning": {
          color: "white",
          backgroundColor: "#f97316",
        },
        ".btn-error": {
          color: "white",
          backgroundColor: "#ef4444",
        },
      });
    }),
  ],
};
