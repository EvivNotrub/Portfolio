import { useOutletContext } from "react-router-dom";
import ProjectCard from "./projectCard.jsx";
import "./projectsPreview.scss";

function ProjectsPreview() {
  const outletClass = useOutletContext();

  return (
    <div
      data-testid="projectsPreview-testid"
      className={"projectPreview" + " " + outletClass}
    >
      <h2>Projets Preview</h2>
      <p>Projets Preview en cours de construction</p>
      <ProjectCard />
    </div>
  );
}

export default ProjectsPreview;
