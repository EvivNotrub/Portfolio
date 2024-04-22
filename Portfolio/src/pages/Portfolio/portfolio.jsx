import { useEffect, useState } from "react";
import { useLanguage } from "../../utils/contexts/reactContext/language/useLang";
import projectsInfo from "../../data/projects.json";
import textContent from "../../data/pagesTextContent/portfolioPage.json";
import ProjectCard from "../../components/projectComponents/projectCard";
import "./portfolio.scss";
import ProjectFilters from "../../components/filters/projectFilters";
import Accordion from "../../components/accordion/Accordion";
import { getWindowSize } from "../../utils/helpers/helpers";

function Portfolio() {
  const { language } = useLanguage();
  const title = textContent.pageTitle[language];

  document.title = "Portfolio | " + title;
  const [activeFilter, setActiveFilter] = useState(["all"]);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    //TODO:  USE MEDIA QUERIES INSTEAD IN CSS

    window.addEventListener("resize", handleWindowResize);
    windowSize.innerWidth < 768 ? setIsExpanded(false) : setIsExpanded(true);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

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
    activeFilter.length === 0 && setActiveFilter(["all"]);
  }, [activeFilter]);

  return (
    <main data-testid="portfolio-testid" className="works">
      <div className="works__banner" data-after-content={textContent.banner}>
        <h1 className="works__banner__title">{title}</h1>
      </div>
      <section className="projects">
        <div className="projects__header">
          <h2 className="projects__title">{textContent.OCTitle[language]}</h2>
          <div className="projects__intro">
            <Accordion
              title={textContent.information.title[language]}
              datum={textContent.information.introText[language]}
              expanded={isExpanded}
            ></Accordion>
          </div>
        </div>
        <div className="projects__filters">
          <ProjectFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            textContent={textContent.filters}
          />
        </div>
        <div className="projects__portfolio">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              project={project}
              key={project.id}
              index={index}
              textContent={textContent.cards[language]}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
