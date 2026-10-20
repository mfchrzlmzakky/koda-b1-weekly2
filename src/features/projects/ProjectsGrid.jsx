import { useState } from "react";
import Container from "../../components/Container";
import FilterTabs from "./FilterTabs";
import ProjectDetailCard from "./ProjectDetailCard";
import { allProjects, projectCategories } from "../../utils/projectsPage";

function ProjectsGrid() {
  const [active, setActive] = useState("All");
  const visibleProjects = active === "All" ? allProjects : allProjects.filter((project) => project.category === active);
  return (
    <section className="py-16">
      <Container>
        <FilterTabs categories={projectCategories} active={active} onChange={setActive} />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectDetailCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsGrid;
