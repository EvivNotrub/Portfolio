import { useState } from "react";
import projects from "../../data/projects.json";
import ProjectCard from "../../components/projectComponents/projectCard";
import "./portfolio.scss";
import ProjectFilters from "../../components/filters/projectFilters";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  console.log("activeFilter", activeFilter);
  const ocProjects = projects.openclassrooms;

  const filteredProjects = ocProjects.filter((project) => {
    if (activeFilter === "all") {
      return true;
    }
    return project.filterCategory.includes(activeFilter);
  });

  return (
    <main data-testid="portfolio-testid" className="works">
      <div className="works__banner">
        <h1 className="works__banner__title">My Work</h1>
      </div>
      <section className="projects">
        <h2 className="projects__title">Open Classrooms Projects</h2>
        <div className="projects__filters">
          <ProjectFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>
        <div className="projects__portfolio">
          {filteredProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
