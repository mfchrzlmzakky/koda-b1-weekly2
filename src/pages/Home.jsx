import AboutSection from "../features/home/AboutSection";
import ContactSection from "../features/home/ContactSection";
import HeroSection from "../features/home/HeroSection";
import ProjectsSection from "../features/home/ProjectsSection";
import SkillsSection from "../features/home/SkillsSection";
import TestiSection from "../features/home/TestiSection";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TestiSection />
      <ContactSection />
    </>
  );
}

export default Home;
