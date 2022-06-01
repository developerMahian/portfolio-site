module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: { center: true },
    extend: {
      keyframes: {
        bouncePing: {
          "0%, 100%": {
            transform: "scale(1.3) translateY(-50%)",
            opacity: 0,
          },
          "50%": {
            transform: "scale(1) translateY(0)",
            opacity: 1,
          },
        },
        scalePing: {
          "0%, 100%": {
            transform: "scale(1.2)",
            opacity: 0,
          },
          "50%": {
            transform: "scale(0.8)",
            opacity: 1,
          },
        },
      },
      animation: {
        bouncePing: "bouncePing 1.35s ease-in-out infinite",
        scalePing: "scalePing 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-debug-screens")],
};
