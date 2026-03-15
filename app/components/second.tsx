import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "High-performance websites engineered for scalability, security, and long-term growth.",
    icon: "code",
  },
  {
    id: "02",
    title: "Web Design",
    description:
      "User-centered design that blends aesthetics and usability to create memorable experiences.",
    icon: "design",
  },
];

export default function ServicesSection2() {

  // 🔧 Adjust SVG brightness here
  const svgBrightness = 0.4;

  return (
    <section className="relative w-full min-h-[700px] py-32 overflow-hidden bg-black flex justify-center items-center">

      {/* SVG BACKGROUND */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ filter: `brightness(${svgBrightness})` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 680 680"
          className="w-[900px] max-w-none opacity-70"
        >
          <defs>
            <radialGradient id="core2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
              <stop offset="6%" stopColor="#cce4ff" stopOpacity="1"/>
              <stop offset="18%" stopColor="#4499ff" stopOpacity="1"/>
              <stop offset="40%" stopColor="#0044cc" stopOpacity="0.9"/>
              <stop offset="70%" stopColor="#001055" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
            </radialGradient>

            <filter id="bh"><feGaussianBlur stdDeviation="22"/></filter>
            <filter id="bm"><feGaussianBlur stdDeviation="10"/></filter>
            <filter id="bs"><feGaussianBlur stdDeviation="5"/></filter>
          </defs>

          <rect width="680" height="680" fill="#00000f"/>

          <polygon points="340,0 680,340 340,680 0,340" fill="#0033bb" opacity="0.22" filter="url(#bh)"/>
          <polygon points="340,0 680,340 340,680 0,340" fill="#0044cc" opacity="0.18" filter="url(#bm)"/>

          <polygon points="340,340 200,180 340,0 480,180" fill="#2266ff" opacity="0.6" filter="url(#bh)"/>
          <polygon points="340,340 270,200 340,10 410,200" fill="#55aaff" opacity="0.65" filter="url(#bm)"/>
          <polygon points="340,340 310,240 340,30 370,240" fill="#aad4ff" opacity="0.75" filter="url(#bs)"/>
          <polygon points="340,340 332,300 340,60 348,300" fill="#ffffff" opacity="0.85" filter="url(#bs)"/>

          <polygon points="340,340 200,500 340,680 480,500" fill="#2266ff" opacity="0.6" filter="url(#bh)"/>
          <polygon points="340,340 270,480 340,670 410,480" fill="#55aaff" opacity="0.65" filter="url(#bm)"/>
          <polygon points="340,340 310,440 340,650 370,440" fill="#aad4ff" opacity="0.75" filter="url(#bs)"/>
          <polygon points="340,340 332,380 340,620 348,380" fill="#ffffff" opacity="0.85" filter="url(#bs)"/>

          <polygon points="340,340 180,200 0,340 180,480" fill="#1a55ee" opacity="0.55" filter="url(#bh)"/>
          <polygon points="340,340 200,270 10,340 200,410" fill="#4488ff" opacity="0.6" filter="url(#bm)"/>
          <polygon points="340,340 240,310 40,340 240,370" fill="#99ccff" opacity="0.7" filter="url(#bs)"/>
          <polygon points="340,340 290,332 80,340 290,348" fill="#ffffff" opacity="0.8" filter="url(#bs)"/>

          <polygon points="340,340 500,200 680,340 500,480" fill="#1a55ee" opacity="0.55" filter="url(#bh)"/>
          <polygon points="340,340 480,270 670,340 480,410" fill="#4488ff" opacity="0.6" filter="url(#bm)"/>
          <polygon points="340,340 440,310 640,340 440,370" fill="#99ccff" opacity="0.7" filter="url(#bs)"/>
          <polygon points="340,340 390,332 600,340 390,348" fill="#ffffff" opacity="0.8" filter="url(#bs)"/>

          <circle cx="340" cy="340" r="220" fill="url(#core2)" filter="url(#bh)" opacity="1"/>
          <circle cx="340" cy="340" r="130" fill="url(#core2)" filter="url(#bm)" opacity="1"/>
          <circle cx="340" cy="340" r="70" fill="#1155ee" filter="url(#bm)" opacity="0.95"/>
          <circle cx="340" cy="340" r="35" fill="#4488ff" filter="url(#bs)" opacity="1"/>
          <circle cx="340" cy="340" r="14" fill="#bbddff" opacity="1"/>
          <circle cx="340" cy="340" r="5" fill="#ffffff" opacity="1"/>
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-[var(--color-navy-bright)] mb-4 tracking-[0.25em]">
            SERVICES
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            From strategy to launch.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service) => (
            <div
              key={service.id}
              className="
              group relative rounded-2xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-lg
              p-10
              flex flex-col justify-between
              overflow-hidden
              transition-all duration-500
              hover:-translate-y-2
              hover:bg-white/[0.07]
              hover:backdrop-blur-2xl
              hover:border-[var(--color-navy-bright)]/40
              "
            >

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
                pointer-events-none
                "
              />

              <div className="relative z-10">

                <p className="text-xs text-gray-500 mb-4 tracking-wider">
                  {service.id}
                </p>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Link
            href="/about"
            className="text-neutral-200 py-3 text-sm inline-flex items-center gap-3 transition-colors duration-300 group"
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
