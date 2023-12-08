import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../../data/projects.json";
import "./projectPage.scss";
import Loader from "../../components/loader/loader";
import Slider from "../../containers/slider/slider";

function ProjectPage() {
  const { projectID } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // const [isFullscreen, setIsFullscreen] = useState(false);
  // const classFullscreen = isFullscreen ? ' --fullscreen' : ' --normalview';

  // TODO: find better title
  //TODO: change header for this page: not name but Project or something
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
      console.log("project", project);
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
        <div>
          <Slider />
          <h1>{project.name}</h1>
        </div>
      </main>
    );
  }
}

export default ProjectPage;
