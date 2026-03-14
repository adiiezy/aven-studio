"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: "01",
    slug: "website-redesign-lawfirm-vega",
    title: "VEGA",
    description:
      "VEGA is a Brussels-based law firm. The firm brings together strategic insight and decisive action to guide clients through their most complex legal challenges.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=640&fit=crop",
    tags: ["Branding", "UX/UI Design", "Web development"],
  },
  {
    id: "02",
    slug: "le-cenacle",
    title: "Le Cenacle",
    description:
      "Le Cénacle, founded in 2016 in La Hulpe, has established itself as a prestigious independent senior living residence.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=640&fit=crop",
    tags: ["UX/UI Design", "Web development", "Photography"],
  },
  {
    id: "03",
    slug: "c-carre",
    title: "C-Carré",
    description:
      "C-Carré PEB specialises in building energy optimisation and EPC certifications.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=640&fit=crop",
    tags: ["Branding", "Print", "UX/UI Design"],
  },
  {
    id: "04",
    slug: "varroa-diagnostic",
    title: "Varroa Diagnostic",
    description:
      "Varroa Diagnostic helps beekeepers treat varroa destructor threatening bee colonies.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=640&fit=crop",
    tags: ["Branding", "UX/UI Design", "Web development"],
  },
  {
    id: "05",
    slug: "holea",
    title: "Holea",
    description:
      "Holea is a hairdresser in the Namur province offering personalized services.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=640&fit=crop",
    tags: ["Branding", "UX/UI Design", "Web development"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLLIElement>(null);

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, {
      scale: 1.08,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <li
      ref={cardRef}
      className="group relative bg-radial-[at_-10%_0%] from-black/30 via-black/40 to-black/50 backdrop-blur-md rounded-[10px] border border-white/10 w-full max-w-[360px] xl:max-w-[585px] overflow-hidden"
    >
      <Link href={`/projects/${project.slug}`} title={project.title}>
        <div
          className="relative w-full overflow-hidden rounded-xl bg-[#111]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={imageRef} className="w-full h-full will-change-transform">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={800}
              height={640}
              className="w-full h-full object-cover aspect-[5/4]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <ul className="absolute bottom-0 left-0 z-10 p-4 lg:p-6 gap-2 flex flex-wrap-reverse pointer-events-none">
            {project.tags.map((tag, idx) => (
              <li
                key={idx}
                className="text-[10px] lg:text-xs py-1.5 px-3 bg-black/40 border border-white/10 backdrop-blur-md rounded-full font-medium text-white/90"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 pb-12 px-2">
          <h3 className="text-xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-black">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
          <div>
            <h2 className="text-orange-500 font-mono tracking-widest uppercase text-sm mb-4">
              Portfolio
            </h2>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Recent Projects
            </h1>
          </div>

          <p className="text-gray-400 max-w-md text-sm lg:text-base leading-relaxed">
            We support brands in creating unique and memorable experiences.
            Browse our projects and dive into our world.
          </p>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* CTA card */}
          <li className="list-none">
            <div className="aspect-[5/4] bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl flex flex-col items-center justify-center p-12 text-center group">
              <h4 className="text-2xl font-bold text-white mb-4">
                Got a project in mind?
              </h4>
              <p className="text-gray-400 text-sm mb-8">
                Free 30 minute consultation for your next big idea.
              </p>

              <Link
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Let&apos;s talk
              </Link>
            </div>
          </li>
        </ul>

        {/* Footer link */}
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="text-gray-300 hover:text-white py-3 px-6 text-sm inline-flex items-center gap-3 transition-colors duration-300 group font-medium"
          >
            All projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
