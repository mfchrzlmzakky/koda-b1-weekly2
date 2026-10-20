import Container from "../../components/Container";
import Pill from "../../components/Pill";
import SectionHeader from "../../components/SectionHeader";
import { interests } from "../../utils/about";

function InterestsSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader label="Personal" title="Interests & Hobbies" description="A few things I'm passionate about beyond the keyboard." />
        <div className="mx-auto mt-14 max-w-4xl flex flex-wrap justify-center gap-3">
          {interests.map((item) => (
            <Pill key={item} size="lg">
              {item}
            </Pill>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default InterestsSection;
