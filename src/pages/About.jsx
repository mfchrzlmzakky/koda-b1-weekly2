import AboutHeader from "../features/about/AboutHeader";
import AboutIntro from "../features/about/AboutIntro";
import EducationSection from "../features/about/EducationSection";
import ExperienceSection from "../features/about/ExperienceSection";
import ProficiencySection from "../features/about/ProficiencySection";
import InterestsSection from "../features/about/InterestsSection";

function About() {
  return (
    <>
      <AboutHeader />
      <AboutIntro />
      <EducationSection />
      <ExperienceSection />
      <ProficiencySection />
      <InterestsSection />
    </>
  );
}

export default About;
