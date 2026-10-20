import Container from "../../components/Container";
import Pill from "../../components/Pill";
import { aboutParagraphs, aboutTags } from "../../utils/about";

function AboutIntro() {
  return (
    <section className="py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex justify-center">
          <img src="/images/heroImage.jpg" alt="Alex Carter" className="aspect-square w-72 rounded-2xl object-cover shadow-xl lg:w-80" />
        </div>
        <div>
          <h2 className="font-bold text-2xl leading-8 text-[#101828]">Building the web, one line at a time.</h2>
          <div className="pt-4 grid gap-4 font-normal text-base leading-7 text-[#6A7282]">
            {aboutParagraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <div className="pt-6 flex flex-wrap gap-3">
            {aboutTags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutIntro;
