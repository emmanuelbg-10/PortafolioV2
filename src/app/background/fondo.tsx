"use client";

import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

type DigitalParticle = {
  id: number;
  position: [number, number, number];
  value: string; // "0" o "1"
  createdAt: number;
};

const DigitalParticles: React.FC = () => {
  const [particles, setParticles] = useState<DigitalParticle[]>([]);
  const particleId = useRef(0);

  // Función para generar una nueva partícula digital
  const generateParticle = () => {
    // Posición aleatoria en el espacio 3D
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 10;
    const z = (Math.random() - 0.5) * 10;

    // Crear una nueva partícula digital (0 o 1)
    const value = Math.random() > 0.5 ? "0" : "1";
    setParticles((prev) => [
      ...prev,
      { id: particleId.current++, position: [x, y, z], value, createdAt: performance.now() },
    ]);
  };

  // Generar partículas cada cierto tiempo aleatorio
  useEffect(() => {
    const interval = setInterval(() => {
      if (particles.length < 40) {
        // Limitar el número máximo de partículas
        generateParticle();
      }
    }, Math.random() * 500 + 200); // Intervalo aleatorio entre 200ms y 700ms

    return () => clearInterval(interval);
  }, [particles.length]);

  // Elimina las partículas que tengan más de 2 segundos de vida
  useFrame(() => {
    const now = performance.now();
    setParticles((prev) => prev.filter((particle) => now - particle.createdAt < 2000));
  });

  // Determinar el color de las partículas basado en la clase del elemento <html>
  const particleColor = document.documentElement.classList.contains("dark") ? "white" : "black";

  return (
    <>
      {particles.map((particle) => (
        <Text
          key={particle.id}
          position={particle.position}
          fontSize={0.5} // Tamaño más pequeño
          color={particleColor}
          anchorX="center"
          anchorY="middle"
        >
          {particle.value}
        </Text>
      ))}
    </>
  );
};

const InteractiveStars: React.FC = () => {
  return <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />;
};

const InteractiveBackground: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Verificar si el tema es oscuro al montar el componente y al cambiar el tema
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Verificar el tema al montar el componente
    checkDarkMode();

    // Observar cambios en la clase del elemento <html>
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // No renderizar nada si el tema no es oscuro
  if (!isDarkMode) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        {/* Fondo de estrellas */}
        <InteractiveStars />
        {/* Partículas digitales interactivas */}
        <DigitalParticles />
        {/* OrbitControls con rotación más lenta */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5} // Velocidad de rotación más lenta
        />
      </Canvas>
    </div>
  );
};

export default InteractiveBackground;
