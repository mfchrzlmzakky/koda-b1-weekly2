import PageHeader from "../components/PageHeader";
import ContactSection from "../features/contact/ContactSection";

function Contact() {
  return (
    <>
      <PageHeader label="Get in touch" title="Contact Me" description="Have a project in mind or just want to say hello? Fill out the form and I'll get back to you within 24 hours." />
      <ContactSection />
    </>
  );
}

export default Contact;
