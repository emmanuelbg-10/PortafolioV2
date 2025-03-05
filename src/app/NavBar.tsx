"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import "./css/NavBar.css"; // Importamos los estilos externos

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Manejar la clase en <body> cuando se abre el menú
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  return (
    <nav className="navbar">
      {/* Botón de hamburguesa (solo en móviles) */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menú */}
      <ul className="menu">
        <li>
          <a href="#conocimientos">Conocimientos</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      {/* Botón de cambio de tema */}
      <div className="ml-auto md:ml-0">
        <ThemeToggle />
      </div>
    </nav>
  );
}
