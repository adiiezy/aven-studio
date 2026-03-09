"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-animate='item']", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-[1400px] mx-auto px-8 pt-20 pb-32 lg:grid grid-cols-12 relative z-10 bg-transparent"
    >
      <p
        className="text-orange-500 mb-4 col-start-1 col-end-13 "
        data-animate="item"
      >
        About
      </p>

      <div className="mt-20 lg:mt-0 col-start-1 col-end-6">
        <h2
          className="text-4xl lg:text-4xl font-semibold text-white"
          data-animate="item"
        >
          An approach built on one belief.
        </h2>

        <div
          className="flex justify-end lg:justify-start mt-8 mb-12"
          data-animate="item"
        >
          <Link
            href="/about"
            className="w-fit text-neutral-200 py-3 pr-3 text-sm inline-flex items-center gap-3 transition-colors duration-300 group"
          >
            Discover the studio

            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="fill-none stroke-neutral-200 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.27092 6.01913L1.06893 0.817139L0.306641 1.57943L4.74965 6.02245L0.306771 10.4653L1.06907 11.2276L6.2739 6.02279L6.27058 6.01947L6.27092 6.01913Z"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div
        className="lg:mb-0 col-start-9 -col-end-1 text-neutral-300 leading-relaxed"
        data-animate="item"
      >
        <p>
          AKIS.STUDIO was founded on a simple idea: your image should reflect
          who you actually are. That's been our driving force since day one,
          and it shapes every project we take on.
        </p>
      </div>
    </section>
  );
}
