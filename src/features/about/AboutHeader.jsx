import Container from "../../components/Container";

function AboutHeader() {
  return (
    <section className="bg-[#F9FAFB] py-12 md:py-16">
      <Container className="text-center">
        <p className="font-semibold text-xs leading-4 tracking-[1.2px] uppercase text-[#FF5F22]">Get to know me</p>
        <h1 className="pt-3 font-extrabold text-4xl leading-tight text-[#101828] md:text-5xl">About Alex</h1>
        <p className="pt-4 mx-auto max-w-xl font-normal text-base leading-6.5 text-[#6A7282]">A passionate developer who loves building things that make a real difference.</p>
      </Container>
    </section>
  );
}

export default AboutHeader;
