import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <HeroSection />
      <AboutSection />
      <ServicesSection/>
    </main>
  );
}
