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
                  ? "text-red-500 font-semibold"
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
              className="project-card relative group overflow-hidden rounded-xl cursor-pointer"
            >

              <div className="relative h-[420px] w-full overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500 z-10 pointer-events-none" />

                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition duration-500">

                  <svg
                    className="w-[160px] scale-90 group-hover:scale-100 transition duration-500"
                    viewBox="0 0 372.78 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >

                    <path
                      className="fill-orange-500"
                      transform="translate(43.78, 0)"
                      d="M140.894 12.926C142.532 11.8583 145.036 11.1687 148.866 11.707C149.268 8.94428 146.922 6.47515 144.111 6.80882C140.619 7.22256 138.106 8.61506 136.355 10.3279C136.748 8.43266 138.025 6.19932 141.124 3.90371C139.428 1.67037 135.999 1.55915 134.248 3.75689C132.078 6.48405 131.298 9.22011 131.289 11.6492C130.206 10.0343 129.506 7.56068 130.052 3.78359C127.25 3.38764 124.746 5.70105 125.085 8.4727C125.504 11.9161 126.917 14.3941 128.654 16.1203C126.732 15.7333 124.462 14.4742 122.139 11.4179C119.874 13.0906 119.761 16.4718 121.985 18.1979C124.751 20.3378 127.526 21.1075 129.989 21.1208C128.351 22.1886 125.847 22.8737 122.012 22.3354C121.615 25.0892 123.939 27.5539 126.736 27.2425C130.842 26.7798 133.17 25.0181 134.532 23.6656C134.153 25.5742 132.881 27.8297 129.754 30.1432C131.469 32.3987 134.921 32.461 136.671 30.2366C138.95 27.3448 139.572 24.5554 139.563 22.3532C140.659 23.9681 141.381 26.4506 140.826 30.2633C143.655 30.6637 146.141 28.3013 145.785 25.5074C145.325 21.8727 143.759 19.4659 142.171 17.9177C144.106 18.2914 146.394 19.5459 148.74 22.629C151.005 20.9562 151.118 17.5751 148.894 15.8489C146.128 13.709 143.353 12.9394 140.89 12.9305L140.894 12.926Z"
                    />

                  </svg>

                </div>

                <div className="absolute inset-0 flex items-end p-6 z-30">
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
