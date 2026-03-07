import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <HeroSection />
      <AboutSection />
      <ServicesSection/>
      <ProjectsSection/>
    </main>
  );
}
