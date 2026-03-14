import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ServicesSection1 from "./components/ServicesSection1";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ServicesSection1 />
      <ProjectsSection />
      <TestimonialsSection />
      <FAQ />
      <CTASection
        heading="Ready to have an image that matches your ambition?"
        ctaText="Start now"
        ctaLink="/contact"
        image="/bg_cta.SDXiTeDA.webp"
      />
      <Footer/>
    </main>
  );
}
