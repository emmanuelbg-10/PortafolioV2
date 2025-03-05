"use client"; // Marca este componente como un Client Component

import featuredProjects from "./data/projects";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [projects] = useState(featuredProjects);

  return (
    <section className="projects" id="projects">
      <h2 className="text-2xl font-semibold">Mis Proyectos</h2>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center p-0 mx-auto">
        {projects.map((proj) => (
          <div className="card" key={proj.id}>
            <h2 className="project-title">{proj.title}</h2>
            <div className="image-container">
              <a className="no-underline text-primary-color" href={proj.liveUrl}>
                <Image
                  src={proj.imageUrl}
                  alt="Captura del proyecto"
                  className="project-image"
                  width={600}
                  height={400}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
