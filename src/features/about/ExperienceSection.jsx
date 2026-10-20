import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";
import ExperienceCard from "./ExperienceCard";
import { experience } from "../../utils/about";

function ExperienceSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader label="Career" title="Work Experience" />
        <div className="mx-auto mt-14 max-w-4xl grid gap-6">
          {experience.map((job) => (
            <ExperienceCard key={job.role} {...job} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ExperienceSection;
