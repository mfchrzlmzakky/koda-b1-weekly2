import Divider from "../../components/Divider";

function ProjectsSection() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-6xl px-6">
        <div>
          <p className="font-semibold text-xs leading-4 tracking-[1.2px] text-center uppercase text-[#FF5F22]">My Work</p>
          <h2 className="pt-3 font-bold text-3xl leading-9 tracking-normal text-center text-[#101828]">Featured Projects</h2>
          <p className="pt-4 font-normal text-base leading-6.5 tracking-normal text-center text-[#6A7282]">A selection of projects that showcase my skills across the full development stack.</p>
          <Divider />
        </div>
        <div className="pt-14">
          <div className="grid gap-7">
            <div className="rounded-xl border-[0.77px] border-[#F3F4F6] bg-[#FFFFFF] shadow-sm">
              <div className="bg-[#F3F4F6]">
                <img src="/images/project1Image.png" alt="Project 1" className="rounded-xl" />
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default ProjectsSection;
