import Image from "next/image";
import Link from "next/link";

const services = [
    {
        id: "01",
        title: "Web Development",
        description:
            "Performance, security, scalability. A website built to last.",
        image:
            "https://admin.akis.studio/assets/fa3d3cf0-08a7-4f53-bb9b-265d3bcec247/fa3d3cf0-08a7-4f53-bb9b-265d3bcec247.png",
    },
    {
        id: "02",
        title: "Web Design",
        description:
            "UX, UI, prototypes. Interfaces designed around real user needs.",
        image:
            "https://admin.akis.studio/assets/a213cc52-ebef-43ba-9a79-d4b733395d77/a213cc52-ebef-43ba-9a79-d4b733395d77.png",
    },
];

export default function ServicesSection() {
    return (
        <section className="relative w-full py-32  overflow-hidden bg-black">

            {/* <div className="absolute inset-0 flex justify-center pointer-events-none -top-[150px]">
        <div className="w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,#ff0000_0%,#7a0000_40%,transparent_70%)] blur-[120px] opacity-70" />
      </div> */}

            <div className="absolute left-1/2 top-0 -translate-x-1/2  pointer-events-none">
                <img
                    src="/diamant.png"
                    alt=""
                    className="w-[1400px] max-w-none opacity-70 blur-[140px]"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <p className="text-sm text-red-500 mb-4 tracking-widest">
                        SERVICES
                    </p>

                    <h2 className="text-4xl md:text-5xl font-semibold text-white">
                        From strategy to launch.
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-10 flex justify-between items-end overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_left,#ff0000_0%,#800000_30%,transparent_70%)]" />

                            <div className="relative z-10 max-w-[260px]">
                                <p className="text-xs text-gray-400 mb-3">{service.id}</p>

                                <h3 className="text-2xl font-semibold text-white mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-gray-400">
                                    {service.description}
                                </p>
                            </div>

                            <div className="relative z-10">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </div>
                    ))}

                </div>
                <div
                    className="flex justify-end lg:justify-center mt-8 mb-12"
                    data-animate="item"
                >
                    <Link
                        href="/en/about"
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
        </section>
    );
}
