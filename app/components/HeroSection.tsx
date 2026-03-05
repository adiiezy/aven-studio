"use client";

import { useEffect, useRef } from "react";

type Position = {
  x: number;
  y: number;
};

export default function HeroSection() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  const mouse = useRef<Position>({ x: 70, y: 50 });
  const current = useRef<Position>({ x: 70, y: 50 });

  useEffect(() => {
    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.05;
      current.current.y += (mouse.current.y - current.current.y) * 0.05;

      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(circle at ${current.current.x}% ${current.current.y}%, rgba(255,120,0,0.9), rgba(255,40,0,0.7), transparent 60%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouse.current.x = ((e.clientX - rect.left) / rect.width) * 100;
    mouse.current.y = ((e.clientY - rect.top) / rect.height) * 100;
  };

  return (
    <section
      onMouseMove={handleMove}
      className="relative w-full min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Glow Trail */}
      <div
        ref={glowRef}
        className="absolute right-0 top-0 h-full w-[60%] pointer-events-none"
        style={{
          filter: "blur(70px)",
          background:
            "radial-gradient(circle at 70% 50%, rgba(255,120,0,0.9), rgba(255,40,0,0.7), transparent 60%)",
        }}
      />

      <div className="absolute inset-0 opacity-[0.08] bg-[url('/noise.png')] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 flex items-center min-h-screen px-8 lg:px-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-4xl lg:text-7xl font-semibold leading-[1.05]">
            A brand that keeps up with your ambition.
          </h1>
        </div>
      </div>

      <div className="absolute bottom-24 right-24 max-w-md text-neutral-300">
        <p className="text-lg">
          Branding & web agency based in Brussels. We create visual identities
          and websites that truly reflect who you are.
        </p>
      </div>
    </section>
  );
}
