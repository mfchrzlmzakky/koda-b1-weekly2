import { Link } from "react-router";
import Divider from "../../components/Divider";
import AboutCard from "./AboutCard";

const aboutCards = [
  {
    title: "Problem Solver",
    description: "I enjoy breaking down complex challenges into simple, elegant solutions that scale well over time.",
  },
  {
    title: "Team Player",
    description: "Experienced collaborating with designers, product managers, and engineers in agile environments.",
  },
  {
    title: "Lifelong Learner",
    description: "Always exploring new tools and technologies. Currently deepening my cloud architecture and DevOps skills.",
  },
];

function AboutSection() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-334.5 mx-auto px-6 lg:px-29.25">
        <div className="text-center">
          <p className="font-semibold text-xs leading-4 tracking-[1.2px] uppercase text-[#FF5F22]">Who I Am</p>
          <h2 className="pt-3 font-bold text-3xl leading-9 text-[#101828] md:text-4xl md:leading-10">A Little About Me</h2>
          <p className="pt-4 mx-auto max-w-xl font-normal text-base leading-6.5 text-[#6A7282]">I'm passionate about writing clean, maintainable code and crafting experiences that users genuinely enjoy.</p>
          <Divider />
        </div>
        <div className="pt-14 mx-auto max-w-5xl grid gap-6 lg:grid-cols-3">
          {aboutCards.map((card) => (
            <AboutCard key={card.title} title={card.title} description={card.description} />
          ))}
        </div>
        <div className="pt-10 text-center">
          <Link to="/about" className="font-semibold text-sm leading-5 text-[#111111] transition-opacity hover:opacity-70">
            Learn more about me →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
