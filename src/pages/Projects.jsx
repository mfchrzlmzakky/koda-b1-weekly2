import PageHeader from "../components/PageHeader";
import ProjectsGrid from "../features/projects/ProjectsGrid";

function Projects() {
  return (
    <>
      <PageHeader label="Portfolio" title="My Projects" description="A collection of work that demonstrates my skills across the full development stack." />
      <ProjectsGrid />
    </>
  );
}

export default Projects;
