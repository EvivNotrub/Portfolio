import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../../data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./projectPage.scss";
import Loader from "../../components/loader/loader";
import Slideshow from "../../containers/slider/Slideshow";
import LinkList from "../../components/linkList/linkList";
import SocialLink from "../../components/buttons/socialLink";
import Accordion from "../../components/accordion/Accordion";
import { getWindowSize } from "../../utils/helpers/helpers";

function ProjectPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const classFullscreen = isFullscreen ? " --fullscreen" : " --normalview";
  const { projectID } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    windowSize.innerWidth < 768 ? setIsExpanded(false) : setIsExpanded(true);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  // TODO: find better title
  //TODO: change header for this page: not name but Project or something
  //TODO: adapt page for future non-OC projects
  useEffect(() => {
    if (project) {
      document.title = "Project: " + project.name;
      return;
    }
    document.title = "My Work";
  }, [project]);

  useEffect(() => {
    if (projects) {
      const project = projects.projects.find(
        (project) => project.id === projectID,
      );
      if (!project) {
        setError(new Error("No Project found"));
        setLoading(false);
        return;
      }
      setProject(project);
      setLoading(false);
    }
  }, [projectID]);

  useEffect(() => {
    if (error) {
      const timout = setTimeout(() => {
        navigate("/projects");
      }, 5000);
      return () => {
        clearTimeout(timout);
      };
    }
  }, [error, navigate]);

  if (isLoading) {
    return (
      <main className="project-loading">
        <Loader />
      </main>
    );
  }
  if (error) {
    return (
      <main className="project-page-error">
        {/* TODO: more  */}
        <section>
          <h1>Error</h1>
          <p>{error.message}</p>
          <p>Page will redirect to Portfolio page.</p>
        </section>
      </main>
    );
  }
  if (project) {
    return (
      <main data-testid="projectpage-testid" className="project-info">
        <section className="project-info__major">
          <div className="project-info__major__slide">
            <Slideshow
              pictures={project.pictures}
              classFullscreen={classFullscreen}
              setIsFullscreen={setIsFullscreen}
              isFullscreen={isFullscreen}
            />
          </div>
          <div className="project-info__major__description">
            <h1
              className={"project-info__major__title" + " " + classFullscreen}
            >
              {project.name}
            </h1>
            <div
              className={"project-info__major__links" + " " + classFullscreen}
            >
              <LinkList>
                {project.links.github && (
                  <SocialLink link={project.links.github} text="GitHub">
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                  </SocialLink>
                )}
                {project.links.demo && (
                  <SocialLink link={project.links.demo} text="GitHub Pages">
                    <FontAwesomeIcon icon="fa-solid fa-globe" />
                  </SocialLink>
                )}
              </LinkList>
            </div>
          </div>
        </section>
        <section className={"project-info__details" + " " + classFullscreen}>
          <article className="project-info__details__summary">
            <h2 className="project-info__details__summary__title">
              In a nutshell:
            </h2>
            <p>{project.summary.EN}</p>
            <h3>Aim:</h3>
            <p>{project.aim.EN}</p>
          </article>
          <Accordion
            title="Full Description"
            datum={project.description.EN}
            className="project-info__details__description"
            expanded={isExpanded}
          ></Accordion>
        </section>
      </main>
    );
  }
}

export default ProjectPage;
