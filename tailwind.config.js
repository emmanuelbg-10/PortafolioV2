/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Modo oscuro basado en clases
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Archivos donde se usará Tailwind
  theme: {
    extend: {
      colors: {
        'background-light': 'var(--background-color)',
        'text-light': 'var(--text-color)',
        'background-dark': 'var(--background-color)',
        'text-dark': 'var(--text-color)',
      },
    }, // Extiende el tema de Tailwind si es necesario
  },
  plugins: [], // Plugins adicionales de Tailwind
};