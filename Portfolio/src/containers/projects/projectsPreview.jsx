import ProjectSlider from "../../components/projectComponents/projectSlider";
import "./projectsPreview.scss";

function ProjectsPreview() {
  return (
    <div data-testid="projectsPreview-testid" className="projectPreview">
      <h2>Projets Preview</h2>
      <p>Projets Preview en cours de construction</p>
      <ProjectSlider />
    </div>
  );
}

export default ProjectsPreview;
