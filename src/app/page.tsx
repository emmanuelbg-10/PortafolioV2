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
          <Projects />
        </article>
      </main>
      <footer className="text-center py-4">© {new Date().getFullYear()} Portafolio Emmanuel</footer>
    </div>
  );
}
