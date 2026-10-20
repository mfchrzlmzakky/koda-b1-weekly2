import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";
import SkillBar from "./SkillBar";
import { proficiency } from "../../utils/about";

function ProficiencySection() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <Container>
        <SectionHeader label="Skills" title="Technical Proficiency" />
        <div className="mx-auto mt-14 max-w-4xl grid gap-y-7 gap-x-12 lg:grid-cols-2">
          {proficiency.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProficiencySection;
