import Container from "./Container";

function PageHeader({ label, title, description }) {
  return (
    <section className="bg-[#F9FAFB] py-12 md:py-16">
      <Container className="text-center">
        <p className="font-semibold text-xs leading-4 tracking-[1.2px] uppercase text-[#FF5F22]">{label}</p>
        <h1 className="pt-3 font-extrabold text-4xl leading-tight text-[#101828] md:text-5xl">{title}</h1>
        <p className="pt-4 mx-auto max-w-2xl font-normal text-base leading-6.5 text-[#6A7282]">{description}</p>
      </Container>
    </section>
  );
}

export default PageHeader;
