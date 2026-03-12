"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const testimonials = [
  { logo: "https://admin.akis.studio/assets/1.svg", text: "AKIS.STUDIO delivered outstanding branding and web development support for our company.", name: "Antoine GOWIE", company: "OrangeBleu" },
  { logo: "https://admin.akis.studio/assets/2.svg", text: "The team is creative, dependable and always focused on delivering great results.", name: "Alain CREYELMAN", company: "PAM IMMO DEM" },
  { logo: "https://admin.akis.studio/assets/3.svg", text: "Working with AKIS was smooth and highly professional from start to finish.", name: "Sarah Collins", company: "Mailstro" },
  { logo: "https://admin.akis.studio/assets/4.svg", text: "Their design and development expertise helped us launch a strong digital presence.", name: "Thomas Weber", company: "Taxi Mobility" },
  { logo: "https://admin.akis.studio/assets/5.svg", text: "A reliable partner for branding, UX design and scalable web solutions.", name: "Lucas Bernard", company: "Floorball Corner" },
  { logo: "https://admin.akis.studio/assets/6.svg", text: "They consistently deliver beautiful design combined with solid development.", name: "Emma Laurent", company: "Seleva" },
  { logo: "https://admin.akis.studio/assets/7.svg", text: "Great collaboration and excellent communication throughout the project.", name: "Nathan Brooks", company: "Market Europe" },
  { logo: "https://admin.akis.studio/assets/8.svg", text: "Our platform redesign was handled perfectly by the AKIS team.", name: "Sophia Martin", company: "OrangeBleu" },
  { logo: "https://admin.akis.studio/assets/9.svg", text: "They brought creative thinking and technical expertise to every step.", name: "David Clark", company: "Mailstro" },
  { logo: "https://admin.akis.studio/assets/10.svg", text: "We highly recommend AKIS.STUDIO for branding and modern web development.", name: "Laura Gomez", company: "Seleva" }
];

const clientLogos = Array.from({ length: 20 }, (_, i) => ({
  src: `https://admin.akis.studio/assets/${i + 1}.svg`,
}));

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-black overflow-hidden">

      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <p className="text-orange-400 text-sm">Testimonies</p>

        <h2 className="text-4xl md:text-5xl font-semibold text-white mt-4">
          What our clients say
        </h2>

        <p className="text-zinc-400 text-sm mt-4">
          Trusted by companies worldwide for design and development.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1.2}
        centeredSlides
        loop
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 1.6 },
          1024: { slidesPerView: 2.2 },
        }}
        className="px-[15vw]"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="border border-zinc-800 bg-zinc-900/40 backdrop-blur-lg rounded-xl p-8 min-h-[260px] flex flex-col justify-between">
              <div className="h-12 flex items-center">
                <Image src={item.logo} alt={item.company} width={150} height={40} className="object-contain" />
              </div>

              <p className="text-zinc-300 text-sm mt-6 leading-relaxed">
                {item.text}
              </p>

              <div className="mt-8">
                <p className="text-white text-sm font-medium">{item.name}</p>
                <p className="text-zinc-500 text-xs">{item.company}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-20">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={60}
          slidesPerView={2}
          loop
          speed={700}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 5 },
          }}
          className="w-full px-6"
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Image
                src={logo.src}
                alt="client"
                width={120}
                height={60}
                className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}
