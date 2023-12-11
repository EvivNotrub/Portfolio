import Essentials from "../../containers/resume/ResumeEssentials/essentials";
import ResumeMajor from "../../containers/resume/resumeMajor/resumeMajor";
import "./resume.scss";

function Resume() {
  document.title = "CV - Resume - Lebenslauf";

  return (
    <main data-testid="resume-testid" className="resume__main">
      <div className="resume__banner">
        <h1 className="resume__main__title">CV</h1>
      </div>
      <div className="resume__main__container">
        <aside className="resume__aside">
          <Essentials className={"resume__aside"} />
        </aside>
        <div className="resume__major">
          <ResumeMajor className={"resume__major"} />
        </div>
      </div>
    </main>
  );
}

export default Resume;
