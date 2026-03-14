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

export default function ServicesSection() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-black flex justify-center">

      {/* Background glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none">
        <div className="w-[1100px] h-[700px] bg-[radial-gradient(circle_at_center,var(--color-navy-bright),transparent_70%)] opacity-20 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

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
                pointer-events-none
                "
              />

              {/* Navy glow */}
              <div
                className="
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                transition duration-500
                bg-[radial-gradient(circle_at_30%_20%,var(--color-navy-bright),transparent_70%)]
                blur-xl
                "
              />

              {/* Card Content */}
              <div className="relative z-10">

                <p className="text-xs text-gray-500 mb-4 tracking-wider">
                  {service.id}
                </p>

                {/* Icon */}
                <div className="mb-6 text-[var(--color-navy-bright)]">

                  {service.icon === "code" && (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
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
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
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
