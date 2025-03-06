"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import "./css/NavBar.css"; // Importamos los estilos externos

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Manejar la clase en <body> cuando se abre el menú
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  // Manejar el cambio de sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <a href="#conocimientos" className={activeSection === "conocimientos" ? "active" : ""}>
            Conocimientos
          </a>
        </li>
        <li>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
            Proyectos
          </a>
        </li>
        <li>
          <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
            Contacto
          </a>
        </li>
      </ul>

      {/* Botón de cambio de tema */}
      <div className="ml-auto md:ml-0">
        <ThemeToggle />
      </div>
    </nav>
  );
}
