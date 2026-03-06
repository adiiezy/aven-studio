import Image from "next/image";

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
    <section className="relative w-full py-32 overflow-hidden bg-black">

      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,#ff0000_0%,#7a0000_40%,transparent_70%)] blur-[120px] opacity-70" />
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
              {/* hover glow */}
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
      </div>
    </section>
  );
}
