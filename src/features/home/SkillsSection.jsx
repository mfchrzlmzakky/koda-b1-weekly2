import Badge from "../../components/Badge";
import Divider from "../../components/Divider";
import { skills } from "../../utils/skills";

function SkillsSection() {
  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="max-w-6xl px-6">
        <div>
          <p className="font-semibold text-xs leading-4 tracking-[1.2px] text-center uppercase text-[#FF5F22]">Technical Skills</p>
          <h2 className="pt-3 font-bold text-3xl leading-9 tracking-normal text-center text-[#101828]">What I Work With</h2>
          <p className="pt-4 font-normal text-base leading-6.5 tracking-normal text-center text-[#6A7282]">A snapshot of the tools and technologies I use to build modern web applications.</p>
          <Divider />
        </div>
        <div className="pt-14 flex flex-wrap justify-center gap-3">
          {skills.map((n) => (
            <Badge leading={5} title={n} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
