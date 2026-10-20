import Container from "../../components/Container";
import ContactForm from "./ContactForm";
import OfficeInfoCard from "./OfficeInfoCard";
import OnlineLinksCard from "./OnlineLinksCard";
import LocationCard from "./LocationCard";

function ContactSection() {
  return (
    <section className="py-16 lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <aside className="grid content-start gap-6">
          <OfficeInfoCard />
          <OnlineLinksCard />
          <LocationCard />
        </aside>
      </Container>
    </section>
  );
}

export default ContactSection;
