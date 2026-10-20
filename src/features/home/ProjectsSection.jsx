import { Link } from "react-router";
import Divider from "../../components/Divider";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "ShopEase",
    description: "A full-featured e-commerce platform with product catalog, cart management, and Stripe payment integration.",
    image: "/images/project1Image.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "TaskFlow",
    description: "A drag-and-drop task manager with real-time collaboration, team workspaces, and deadline tracking.",
    image: "/images/project2Image.jpg",
    tags: ["React", "TypeScript", "Firebase"],
  },
  {
    title: "ChatSpace",
    description: "Real-time messaging platform with channels, direct messages, file sharing, and emoji reactions.",
    image: "/images/project3Image.jpg",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
  },
];

function ProjectsSection() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-334.5 mx-auto px-6 lg:px-29.25">
        <div className="text-center">
          <p className="font-semibold text-xs leading-4 tracking-[1.2px] uppercase text-[#FF5F22]">My Work</p>
          <h2 className="pt-3 font-bold text-3xl leading-9 text-[#101828] md:text-4xl md:leading-10">Featured Projects</h2>
          <p className="pt-4 mx-auto max-w-xl font-normal text-base leading-6.5 text-[#6A7282]">A selection of projects that showcase my skills across the full development stack.</p>
          <Divider />
        </div>
        <div className="pt-14 mx-auto max-w-5xl grid gap-7 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="pt-10 text-center">
          <Link to="/projects" className="inline-block rounded-lg bg-[#111111] py-3.5 px-7 font-semibold text-base leading-6 text-white transition-colors hover:bg-black">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
