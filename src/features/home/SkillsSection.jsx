import Badge from "../../components/Badge";
import Divider from "../../components/Divider";
import { skills } from "../../utils/skills";

function SkillsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-334.5 mx-auto px-6 lg:px-29.25">
        <div className="text-center">
          <p className="font-semibold text-xs leading-4 tracking-[1.2px] uppercase text-[#FF5F22]">Technical Skills</p>
          <h2 className="pt-3 font-bold text-3xl leading-9 text-[#101828] md:text-4xl md:leading-10">What I Work With</h2>
          <p className="pt-4 mx-auto max-w-xl font-normal text-base leading-6.5 text-[#6A7282]">A snapshot of the tools and technologies I use to build modern web applications.</p>
          <Divider />
        </div>
        <div className="pt-14 flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <Badge key={skill} leading={5} title={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
