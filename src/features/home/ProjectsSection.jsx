import Divider from "../../components/Divider";
import Badge from "../../components/Badge";

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
            <div className="rounded-xl border-[0.77px] md:border-[1.08px] border-[#F3F4F6] bg-[#FFFFFF] shadow-sm">
              <div className="bg-[#F3F4F6] w-full">
                <img src="/images/project1Image.jpg" alt="Project 1" className="rounded-t-xl h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg leading-7 tracking-normal text-[#101828]">ShopEase</h3>
                <p className="pt-2 font-normal text-sm leading-[22.75px] tracking-normal text-[#6A7282]">A full-featured e-commerce platform with product catalog, cart management, and Stripe payment integration.</p>
                <div className="pt-4 flex flex-wrap gap-2">
                  <Badge leading={4} title={"React"} />
                  <Badge leading={4} title={"Node.js"} />
                  <Badge leading={4} title={"MongoDB"} />
                  <Badge leading={4} title={"Stripe"} />
                </div>
              </div>
            </div>
            <div className="rounded-xl border-[0.77px] md:border-[1.08px] border-[#F3F4F6] bg-[#FFFFFF] shadow-sm">
              <div className="bg-[#F3F4F6] h- w-full">
                <img src="/images/project2Image.jpg" alt="Project 1" className="rounded-t-xl h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg leading-7 tracking-normal text-[#101828]">TaskFlow</h3>
                <p className="pt-2 font-normal text-sm leading-[22.75px] tracking-normal text-[#6A7282]">A drag-and-drop task manager with real-time collaboration, team workspaces, and deadline tracking.</p>
                <div className="pt-4 flex flex-wrap gap-2">
                  <Badge leading={4} title={"React"} />
                  <Badge leading={4} title={"TypeScript"} />
                  <Badge leading={4} title={"Firebase"} />
                </div>
              </div>
            </div>
            <div className="rounded-xl border-[0.77px] md:border-[1.08px] border-[#F3F4F6] bg-[#FFFFFF] shadow-sm">
              <div className="bg-[#F3F4F6] h- w-full">
                <img src="/images/project3Image.jpg" alt="Project 1" className="rounded-t-xl h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg leading-7 tracking-normal text-[#101828]">ChatSpace</h3>
                <p className="pt-2 font-normal text-sm leading-[22.75px] tracking-normal text-[#6A7282]">Real-time messaging platform with channels, direct messages, file sharing, and emoji reactions.</p>
                <div className="pt-4 flex flex-wrap gap-2">
                  <Badge leading={4} title={"React"} />
                  <Badge leading={4} title={"Socket.io"} />
                  <Badge leading={4} title={"Express"} />
                  <Badge leading={4} title={"MongoDB"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 text-center">
          <button className="rounded-lg bg-[#111111] font-semibold text-base leading-6 tracking-normal text-white py-3.5 px-7">View All Projects</button>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
