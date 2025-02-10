import AboutSection from "./homeSection/AboutSection";
import ServicesSection from "./homeSection/ServicesSection";
import WorksSection from "./homeSection/WorksSection";
import NewsSection from "./homeSection/NewsSection";
import ContactSection from "./homeSection/ContactSection";
import HeroSection from "./homeSection/HeroSection";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <NewsSection />
      <ContactSection />
    </div>
  );
}
