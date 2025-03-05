"use client";

import featuredProjects from "./data/projects";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects] = useState(featuredProjects);

  return (
    <section className="projects px-6 py-10" id="projects">
      <h2 className="text-2xl font-semibold text-center mb-6">Mis Proyectos</h2>
      <hr className="my-2 border-gray-300 dark:border-gray-600" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
        {projects.map((proj) => (
          <a
            key={proj.id}
            className="no-underline text-primary-color"
            href={proj.liveUrl}
            aria-label={`Ver proyecto: ${proj.title}`} // Mejora de accesibilidad
          >
            <h3 className="text-lg font-semibold text-center mb-2">{proj.title}</h3>{" "}
            {/* Título más claro */}
            <div className="relative w-full max-w-[600px] aspect-[6/4] [perspective:1200px] cursor-pointer mx-auto overflow-hidden rounded-lg">
              <motion.div
                className="relative w-full h-full transition-transform [transform-style:preserve-3d]"
                whileHover={{ rotateY: 180 }}
              >
                {/* Front Side */}
                <div
                  className="card absolute w-full h-full shadow-lg rounded-lg flex flex-col items-center justify-center p-6 [backface-visibility:hidden]"
                  style={{ backgroundColor: "var(--background-div)", color: "var(--text-color)" }}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-lg">
                    {/* Imagen de fondo que no se ve afectada por el padding */}
                    <Image
                      src={proj.imageUrl}
                      alt={`Captura de pantalla de ${proj.title}`}
                      layout="fill" // Esto asegura que la imagen ocupe todo el espacio disponible
                      objectFit="cover" // Esto asegura que la imagen cubra todo el espacio sin distorsionarse
                      className="rounded-lg"
                    />
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full shadow-lg rounded-lg flex items-center justify-center p-4 text-center bg-amber-500 dark:bg-gray-700 [transform:rotateY(180deg)] [backface-visibility:hidden]"
                  style={{ backgroundColor: "var(--background-div)", color: "var(--text-color)" }}
                >
                  <p>{proj.description}</p>
                </div>
              </motion.div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
