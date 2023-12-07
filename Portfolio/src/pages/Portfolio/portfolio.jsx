import projects from "../../data/projects.json";
import ProjectCard from "../../components/projectComponents/projectCard";
import "./portfolio.scss";
import ProjectFilters from "../../components/filters/projectFilters";

function Portfolio() {
  const ocProjects = projects.openclassrooms;
  return (
    <main data-testid="portfolio-testid" className="works">
      <div className="works__banner">
        <h1 className="works__banner__title">My Work</h1>
      </div>
      <section className="projects">
        <h2 className="projects__title">Open Classrooms Projects</h2>
        <div className="projects__filters">
          <ProjectFilters />
        </div>
        <div className="projects__portfolio">
          {ocProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
