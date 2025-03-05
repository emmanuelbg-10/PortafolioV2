/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Modo oscuro basado en clases
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Archivos donde se usará Tailwind
  theme: {
    extend: {}, // Extiende el tema de Tailwind si es necesario
  },
  plugins: [], // Plugins adicionales de Tailwind
};