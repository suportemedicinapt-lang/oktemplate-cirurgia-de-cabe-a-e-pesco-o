import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SpecialtiesSection } from "@/components/SpecialtiesSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SpecialtiesSection />
        <DifferentialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
