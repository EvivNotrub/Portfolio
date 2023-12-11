import { useEffect, useState } from "react";
import projectsInfo from "../../data/projects.json";
import ProjectCard from "../../components/projectComponents/projectCard";
import "./portfolio.scss";
import ProjectFilters from "../../components/filters/projectFilters";
import Accordion from "../../components/accordion/Accordion";

function Portfolio() {
  const introText =
    "These projects are from the education program at Open Classrooms, each with a specific topic. They are meant to reflect reel life projects, some goals are set and an imaginary team provides info and material, like Figma designs. When a backend is used it is provided and we host it locally, we then base the front-end interactions on the endpoints available. No UI libraries for components are used throughout the entire cursus for maximum practice.";

  document.title = "Portfolio | My Work";
  const [activeFilter, setActiveFilter] = useState(["all"]);
  console.log("activeFilter", activeFilter);

  // TODO: Wrap in useEffect ?
  // TODO: condition if projects.openclassrooms is undefined ?
  const projects = projectsInfo.projects;
  const ocProjects = projects.filter(
    (project) => project.context === "openclassrooms",
  );
  const filteredProjects = ocProjects.filter((project) => {
    if (activeFilter.includes("all")) {
      return true;
    }
    let state = false;
    activeFilter.forEach((filter) => {
      if (project.filterCategory.includes(filter)) {
        state = true;
      }
    });
    return state;
  });

  useEffect(() => {
    console.log("securing activeFilter");
    activeFilter.length === 0 && setActiveFilter(["all"]);
  }, [activeFilter]);

  return (
    <main data-testid="portfolio-testid" className="works">
      <div className="works__banner">
        <h1 className="works__banner__title">My Work</h1>
      </div>
      <section className="projects">
        <div className="projects__header">
          <h2 className="projects__title">Open Classrooms Projects</h2>
          <div className="projects__intro">
            <Accordion title="Information" datum={introText}></Accordion>
          </div>
        </div>
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
