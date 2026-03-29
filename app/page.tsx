import Navbar from "./components/Navbar";
import HeroSection from "./home/sections/HeroSection";
import AboutSection from "./home/sections/AboutSection";
import ServicesSection from "./home/sections/ServicesSection";
import HerbsSection from "./home/sections/HerbsSection";
import TestimonialsSection from "./home/sections/TestimonialsSection";
import ApproachSection from "./home/sections/ApproachSection";
import ContactSection from "./home/sections/ContactSection";
import Footer from "./components/Footer";

export const metadata = {
  title: "5M Wellness Center — Stronger & Better",
  description:
    "5M Wellness Center combines ancient herbal wisdom with modern naturopathic science. Treat the root cause — not just the symptoms.",
};

export default function Home() {
  return (
    // grain class adds a subtle film-grain texture overlay (defined in globals.css)
    <main className="grain">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HerbsSection />
      <TestimonialsSection />
      <ApproachSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
