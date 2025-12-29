import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { InternshipSection } from "@/components/InternshipSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ClubsAppSection } from "@/components/ClubsAppSection";
import { AnimeFansSection } from "@/components/AnimeFansSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingPixelObjects } from "@/components/FloatingPixelObjects";
import { MusicToggle } from "@/components/MusicToggle";
import { ParticleSystem } from "@/components/ParticleSystem";

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleExplore = () => {
    scrollToSection("about");
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden" data-testid="portfolio-page">
      {/* Particle System Background */}
      <ParticleSystem />

      {/* Floating Objects */}
      <FloatingPixelObjects />

      {/* Navigation */}
      <Navigation onNavigate={scrollToSection} />
      <MusicToggle />

      <main className="relative z-10">
        <HeroSection onExplore={handleExplore} />
        <AboutSection />
        <SkillsSection />
        <InternshipSection />
        <ProjectsSection />
        {/* <ClubsAppSection /> */}
        {/* <AnimeFansSection /> */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
