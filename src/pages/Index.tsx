import Navigation from "@/components/Navigation";
import MatrixBackground from "@/components/MatrixBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CTFAchievementsSection from "@/components/CTFAchievementsSection";
import CTFSection from "@/components/CTFSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <MatrixBackground />
      <div className="scanline-overlay" />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CTFAchievementsSection />
        <CTFSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
