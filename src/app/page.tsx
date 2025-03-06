import NavBar from "./NavBar";
import Projects from "./Projects";
import Presentation from "./Presentation";
import "./globals.css";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <NavBar />
      </header>
      <main className="content ">
        <article>
          <Presentation />
          <div className="oblique-border"></div>
          <Projects />
        </article>
      </main>
      <footer className="text-center py-4">
        © {new Date().getFullYear()} Portafolio Emmanuel. Todos los derechos reservados
        <div className="m-2">
          <a
            href="https://github.com/emmanuelbg-10"
            className="mr-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mi perfil de Github
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuelbg10/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mi perfil de Linkedin
          </a>
        </div>
      </footer>
    </div>
  );
}
