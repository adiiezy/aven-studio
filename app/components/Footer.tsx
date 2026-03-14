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
            "VEGA is a Brussels-based law firm guiding clients through complex legal challenges.",
        imageUrl:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=640&fit=crop",
        tags: ["Branding", "UX/UI Design", "Web development"],
    },
    {
        id: "02",
        slug: "le-cenacle",
        title: "Le Cenacle",
        description:
            "Prestigious independent senior living residence founded in La Hulpe.",
        imageUrl:
            "https://images.unsplash.com/photo-1559027616-cd4628902d4a?w=800&h=640&fit=crop",
        tags: ["UX/UI Design", "Web development", "Photography"],
    },
    {
        id: "03",
        slug: "c-carre",
        title: "C-Carré",
        description:
            "Energy optimisation and EPC certifications company based in Brussels.",
        imageUrl:
            "https://images.unsplash.com/photo-1461749280684-ddefd3083d60?w=800&h=640&fit=crop",
        tags: ["Branding", "Print", "UX/UI Design"],
    },
    {
        id: "04",
        slug: "varroa-diagnostic",
        title: "Varroa Diagnostic",
        description:
            "Tool helping beekeepers fight the destructive Varroa parasite.",
        imageUrl:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=640&fit=crop",
        tags: ["Branding", "UX/UI Design", "Web development"],
    },
    {
        id: "05",
        slug: "holea",
        title: "Holea",
        description:
            "Hairdresser providing personalized services across Namur province.",
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
            { y: 80, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
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
                {/* <div
          className="relative w-full overflow-hidden rounded-xl bg-[#111] group"
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
            />
          </div>

       
          <div className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(0,102,204,0.45),rgba(0,0,128,0.35))]
            opacity-0
            group-hover:opacity-100
            transition duration-500
            backdrop-blur-[2px]
          " />

           
          <div className="
            absolute inset-0
            flex items-center justify-center
            opacity-0
            group-hover:opacity-100
            transition duration-500
            scale-90
            group-hover:scale-100
          ">
            <svg
              className="w-40 cursor-pointer"
              viewBox="0 0 372.78 59"
              fill="none"
            >
              <path
                className="fill-orange-500"
                transform="translate(43.78, 0)"
                d="M140.894 12.926C142.532 11.8583 145.036 11.1687 148.866 11.707C149.268 8.94428 146.922 6.47515 144.111 6.80882C140.619 7.22256 138.106 8.61506 136.355 10.3279C136.748 8.43266 138.025 6.19932 141.124 3.90371C139.428 1.67037 135.999 1.55915 134.248 3.75689C132.078 6.48405 131.298 9.22011 131.289 11.6492C130.206 10.0343 129.506 7.56068 130.052 3.78359C127.25 3.38764 124.746 5.70105 125.085 8.4727C125.504 11.9161 126.917 14.3941 128.654 16.1203C126.732 15.7333 124.462 14.4742 122.139 11.4179C119.874 13.0906 119.761 16.4718 121.985 18.1979C124.751 20.3378 127.526 21.1075 129.989 21.1208C128.351 22.1886 125.847 22.8737 122.012 22.3354C121.615 25.0892 123.939 27.5539 126.736 27.2425C130.842 26.7798 133.17 25.0181 134.532 23.6656C134.153 25.5742 132.881 27.8297 129.754 30.1432C131.469 32.3987 134.921 32.461 136.671 30.2366C138.95 27.3448 139.572 24.5554 139.563 22.3532C140.659 23.9681 141.381 26.4506 140.826 30.2633C143.655 30.6637 146.141 28.3013 145.785 25.5074C145.325 21.8727 143.759 19.4659 142.171 17.9177C144.106 18.2914 146.394 19.5459 148.74 22.629C151.005 20.9562 151.118 17.5751 148.894 15.8489C146.128 13.709 143.353 12.9394 140.89 12.9305L140.894 12.926Z"
              />
            </svg>
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
        </div> */}
                <div
                    className="relative w-full overflow-hidden rounded-xl bg-[#111] group"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Image */}
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

                    {/* Overlay */}
                    <div
                        className="
      absolute inset-0
      bg-blue-900/40
      opacity-0
      group-hover:opacity-100
      transition duration-400
    "
                    />

                    {/* Center SVG */}
                    <div
                        className="
      absolute inset-0
      flex items-center justify-center
      opacity-0
      group-hover:opacity-100
      transition duration-500
      scale-90
      group-hover:scale-100
      z-10
    "
                    >
                        <svg
                            className="w-40"
                            viewBox="0 0 372.78 59"
                            fill="none"
                        >
                            <path
                                className="fill-orange-500"
                                transform="translate(43.78, 0)"
                                d="M140.894 12.926C142.532 11.8583 145.036 11.1687 148.866 11.707C149.268 8.94428 146.922 6.47515 144.111 6.80882C140.619 7.22256 138.106 8.61506 136.355 10.3279C136.748 8.43266 138.025 6.19932 141.124 3.90371C139.428 1.67037 135.999 1.55915 134.248 3.75689C132.078 6.48405 131.298 9.22011 131.289 11.6492C130.206 10.0343 129.506 7.56068 130.052 3.78359C127.25 3.38764 124.746 5.70105 125.085 8.4727C125.504 11.9161 126.917 14.3941 128.654 16.1203C126.732 15.7333 124.462 14.4742 122.139 11.4179C119.874 13.0906 119.761 16.4718 121.985 18.1979C124.751 20.3378 127.526 21.1075 129.989 21.1208C128.351 22.1886 125.847 22.8737 122.012 22.3354C121.615 25.0892 123.939 27.5539 126.736 27.2425C130.842 26.7798 133.17 25.0181 134.532 23.6656C134.153 25.5742 132.881 27.8297 129.754 30.1432C131.469 32.3987 134.921 32.461 136.671 30.2366C138.95 27.3448 139.572 24.5554 139.563 22.3532C140.659 23.9681 141.381 26.4506 140.826 30.2633C143.655 30.6637 146.141 28.3013 145.785 25.5074C145.325 21.8727 143.759 19.4659 142.171 17.9177C144.106 18.2914 146.394 19.5459 148.74 22.629C151.005 20.9562 151.118 17.5751 148.894 15.8489C146.128 13.709 143.353 12.9394 140.89 12.9305L140.894 12.926Z"
                            />
                        </svg>
                    </div>

                    {/* Tags */}
                    <ul className="absolute bottom-0 left-0 z-20 p-4 lg:p-6 gap-2 flex flex-wrap-reverse pointer-events-none">
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
                    </p>
                </div>

                {/* Grid */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
