import Container from "../../components/Container";
import ExperienceHeading from "./ExperienceHeading";
import AwardCard from "./AwardCard";
import { awards } from "../../utils/experience";

function AwardsSection() {
  return (
    <section className="pt-10 pb-20 md:pt-12">
      <Container>
        <ExperienceHeading label="Recognition" title="Awards & Honors" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {awards.map((award) => (
            <AwardCard key={award.title} {...award} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default AwardsSection;
