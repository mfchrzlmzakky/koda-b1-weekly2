import Container from "../../components/Container";
import ExperienceHeading from "./ExperienceHeading";
import CertificationCard from "./CertificationCard";
import { certifications } from "../../utils/experience";

function CertificationsSection() {
  return (
    <section className="py-10 md:py-12">
      <Container>
        <ExperienceHeading label="Credentials" title="Certifications" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertificationCard key={cert.code} {...cert} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CertificationsSection;
