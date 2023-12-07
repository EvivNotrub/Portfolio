import projects from "../../data/projects.json";
import ProjectCard from "../../components/projectComponents/projectCard";
import "./portfolio.scss";

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
          <button className="projects__filters__filter">All</button>
          <button className="projects__filters__filter">React</button>
          <button className="projects__filters__filter">Redux</button>
          <button className="projects__filters__filter">JavaScript</button>
          <button className="projects__filters__filter">Sass</button>
          <button className="projects__filters__filter">HTML-CSS</button>
          <button className="projects__filters__filter">Optimisation</button>
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
