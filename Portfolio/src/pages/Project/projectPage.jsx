import { useParams } from "react-router-dom";
import "./projectPage.scss";

function ProjectPage() {
  const { projectID } = useParams();
  return (
    <div data-testid="projectpage-testid" className="about">
      <h1>Project {projectID}</h1>
      <p>En cours de construction</p>
    </div>
  );
}

export default ProjectPage;
