"use client";

import featuredProjects from "./data/projects";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects] = useState(featuredProjects);
  const [loading, setLoading] = useState(true);

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
            aria-label={`Ver proyecto: ${proj.title}`}
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-center mb-2">{proj.title}</h3>
              <motion.div
                className="relative w-full max-w-[600px] aspect-[6/3] cursor-pointer mx-auto overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                style={{
                  border: "4px solid var(--background-div)",
                  backgroundColor: "var(--background-div)",
                }} // Añadir bordes del mismo color que el fondo
              >
                {/* Front Side */}
                <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden flex items-center justify-center">
                  <Image
                    src={proj.imageUrl}
                    alt={`Captura de pantalla de ${proj.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 opacity-100 hover:opacity-0"
                    onLoadingComplete={() => setLoading(false)}
                  />
                  {!loading && <p className="text-sm text-center">{proj.description}</p>}
                </div>
              </motion.div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
