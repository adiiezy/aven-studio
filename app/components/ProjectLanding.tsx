"use client"

import { useState, useMemo, useLayoutEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { Flip } from "gsap/all"

gsap.registerPlugin(Flip)

type Category = "All" | "Design" | "Development" | "Marketing"

type Project = {
  id: number
  title: string
  category: Category
  image: string
}

const categories: Category[] = ["All", "Design", "Development", "Marketing"]

const projects: Project[] = Array.from({ length: 20 }).map((_, i) => {
  const cats: Category[] = ["Design", "Development", "Marketing"]
  return {
    id: i + 1,
    title: `Project ${i + 1}`,
    category: cats[i % 3],
    image: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80&sig=${i}`
  }
})

export default function OurWork() {
  const [active, setActive] = useState<Category>("All")
  const [visible, setVisible] = useState(6)

  const container = useRef<HTMLDivElement>(null)

  const filtered = useMemo(() => {
    if (active === "All") return projects
    return projects.filter(p => p.category === active)
  }, [active])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const state = Flip.getState(".project-card")

      Flip.from(state, {
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05
      })
    }, container)

    return () => ctx.revert()
  }, [filtered, visible])

  return (
    <section className="relative w-full py-40 overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <Image
          src="/projectBG.webp"
          alt="background"
          fill
          priority
          className="object-cover object-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-red-500 uppercase tracking-widest text-sm">
              Portfolio
            </p>
            <h2 className="text-5xl font-semibold text-white">
              Our Work
            </h2>
          </div>
        </div>

        <div className="flex gap-8 mb-12 border-b border-white/20 pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat)
                setVisible(6)
              }}
              className={`relative text-lg transition-all ${
                active === cat
                  ? "text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {cat}

              {active === cat && (
                <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-red-500" />
              )}
            </button>
          ))}
        </div>

        <div
          ref={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {filtered.slice(0, visible).map(project => (
            <div
              key={project.id}
              className="project-card relative group overflow-hidden rounded-xl"
            >
              <div className="relative h-[420px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                <div>
                  <p className="text-sm text-red-400">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length > visible && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setVisible(v => v + 6)}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
