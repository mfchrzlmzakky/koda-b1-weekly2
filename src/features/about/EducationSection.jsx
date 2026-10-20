import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";
import EducationCard from "./EducationCard";
import { education } from "../../utils/about";

function EducationSection() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <Container>
        <SectionHeader label="Education" title="Academic Background" />
        <div className="relative mx-auto mt-14 max-w-4xl">
          <span className="absolute left-4 top-1 bottom-1 w-px bg-[#D1D5DC]" />
          <div className="grid gap-6">
            {education.map((item) => (
              <EducationCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default EducationSection;
