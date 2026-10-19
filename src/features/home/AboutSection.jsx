import Divider from "../../components/Divider";
import AboutCard from "./AboutCard";

function AboutSection() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-6xl px-6">
        <div className="">
          <p className="font-semibold text-xs leading-4 tracking-[1.2px] uppercase text-[#FF5F22] text-center">Who I Am</p>
          <h1 className="pt-3 font-bold text-3xl leading-9 tracking-normal text-[#101828] text-center">A Little About Me</h1>
          <p className="pt-4 font-normal text-base leading-6.5 text-[#6A7282] text-center">I'm passionate about writing clean, maintainable code and crafting experiences that users genuinely enjoy.</p>
          <Divider />
        </div>
        <div className="pt-14">
          <div className="grid gap-6">
            <AboutCard title={"Problem Solver"} description={"I enjoy breaking down complex challenges into simple, elegant solutions that scale well over time."} />
            <AboutCard title={"Team Player"} description={"Experienced collaborating with designers, product managers, and engineers in agile environments."} />
            <AboutCard title={"Lifelong Learner"} description={"Always exploring new tools and technologies. Currently deepening my cloud architecture and DevOps skills."} />
          </div>
        </div>
        <div className="pt-10 text-center">
          <a href="/about" className="font-semibold text-sm leading-5 tracking-normal text-[#111111]">
            Learn more about me →
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
