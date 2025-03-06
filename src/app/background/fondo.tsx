"use client";

import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls, Text } from "@react-three/drei";

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
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 10;
    const z = (Math.random() - 0.5) * 10;
    const value = Math.random() > 0.5 ? "0" : "1";
    setParticles((prev) => [
      ...prev,
      { id: particleId.current++, position: [x, y, z], value, createdAt: performance.now() },
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (particles.length < 40) {
        generateParticle();
      }
    }, Math.random() * 500 + 200);

    return () => clearInterval(interval);
  }, [particles.length]);

  useFrame(() => {
    const now = performance.now();
    setParticles((prev) => prev.filter((particle) => now - particle.createdAt < 2000));
  });

  const particleColor = document.documentElement.classList.contains("dark") ? "white" : "black";

  return (
    <>
      {particles.map((particle) => (
        <Text
          key={particle.id}
          position={particle.position}
          fontSize={0.25}
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

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

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
        <InteractiveStars />
        <DigitalParticles />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.1} />
      </Canvas>
    </div>
  );
};

export default InteractiveBackground;
