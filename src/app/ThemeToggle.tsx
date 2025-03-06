"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verificar el estado del tema desde las cookies
    const savedTheme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*=\s*([^;]*).*$)|^.*$/, "$1");

    // Establecer el estado basado en la cookie, si no hay, asumir el valor del sistema
    const isDark =
      savedTheme === "dark" ||
      (savedTheme === "" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDarkMode(isDark);

    // Aplicar el tema al cargar la página
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";

    // Cambiar el tema en el <html> con transición
    document.documentElement.classList.add("transition-colors", "duration-500");
    document.documentElement.classList.toggle("dark", newTheme === "dark");

    // Guardar en cookies para recordar el tema entre sesiones
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`; // 1 año

    setIsDarkMode(newTheme === "dark");
  };

  return (
    <div className="flex items-center gap-2">
      <Sun className={`w-6 h-6 ${isDarkMode ? "text-gray-400" : "text-yellow-500"}`} />
      <div
        className={`w-12 h-6 flex items-center rounded-full cursor-pointer p-1 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
        onClick={toggleTheme}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkMode ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </div>
      <Moon className={`w-6 h-6 ${isDarkMode ? "text-yellow-500" : "text-gray-400"}`} />
    </div>
  );
}
