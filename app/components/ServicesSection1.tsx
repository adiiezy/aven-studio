"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Scalable, secure, and performance-driven platforms engineered for modern digital products.",
    icon: "dev",
  },
  {
    id: "02",
    title: "Web Design",
    description:
      "Thoughtful user experiences designed to blend aesthetics, usability, and product strategy.",
    icon: "design",
  },
];

export default function ServicesSection1() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative bg-black py-36 overflow-hidden">

      {/* Background ambient light */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[700px] bg-[radial-gradient(circle_at_center,var(--color-navy-bright),transparent_70%)] opacity-20 blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-sm tracking-[0.35em] text-[var(--color-navy-bright)] mb-6">
            SERVICES
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Crafting digital products
            <br />
            that stand out.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {services.map((service) => (
            <div
              key={service.id}
              onMouseMove={handleMove}
              className="
              group relative
              rounded-2xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-12
              overflow-hidden
              transition-all duration-500
              hover:-translate-y-3
              hover:border-[var(--color-navy-bright)]/50
              "
            >

              {/* Cursor light */}
              <div
                className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition"
                style={{
                  left: position.x - 200,
                  top: position.y - 200,
                  width: 400,
                  height: 400,
                  background:
                    "radial-gradient(circle,var(--color-navy-bright),transparent 70%)",
                  filter: "blur(120px)",
                }}
              />

              {/* Glass reflection */}
              <div
                className="
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                transition duration-500
                bg-gradient-to-br
                from-white/20
                via-white/5
                to-transparent
                "
              />

              <div className="relative z-10">

                {/* Number */}
                <div className="text-xs tracking-widest text-gray-500 mb-8">
                  {service.id}
                </div>

                {/* Icon container */}
                <div
                  className="
                  w-14 h-14
                  rounded-xl
                  flex items-center justify-center
                  bg-[var(--color-navy-dark)]
                  border border-[var(--color-navy-bright)]/30
                  mb-8
                  text-[var(--color-navy-bright)]
                  "
                >

                  {service.icon === "dev" && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M8 16L4 12L8 8M16 8L20 12L16 16"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}

                  {service.icon === "design" && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <circle cx="12" cy="12" r="3" fill="currentColor" />
                    </svg>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  {service.description}
                </p>

                {/* Action */}
                <div className="mt-10 flex items-center text-sm text-gray-400 group-hover:text-white transition">

                  Learn more

                  <svg
                    className="ml-3 transition-transform duration-300 group-hover:translate-x-2"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12H19M19 12L13 6M19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-24">
          <Link
            href="/about"
            className="text-neutral-200 text-sm flex items-center gap-3 group"
          >
            Discover the studio

            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              className="fill-none stroke-neutral-200 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M6.27 6.02L1.06 0.81L0.30 1.57L4.74 6.02L0.30 10.46L1.06 11.22L6.27 6.02Z"
                strokeWidth="1.5"
              />
            </svg>

          </Link>
        </div>

      </div>
    </section>
  );
}
