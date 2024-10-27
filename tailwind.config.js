/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "discord-dark": "#36393f",
        "discord-darker": "#2f3136",
        "discord-light": "#40444b",
        "discord-hover": "rgba(79, 84, 92, 0.16)",
        "discord-text": "#dcddde",
        "discord-channel": "#8e9297",
        "discord-selected": "#4f545c",
      },
      animation: {
        "bounce-subtle": "bounce 1s infinite",
        "pulse-subtle": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.2s ease-in-out",
        "slide-in": "slideIn 0.2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
