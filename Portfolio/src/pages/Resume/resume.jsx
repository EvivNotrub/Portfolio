import Essentials from "../../containers/resume/ResumeEssentials/essentials";
import ResumeMajor from "../../containers/resume/resumeMajor/resumeMajor";
import "./resume.scss";

function Resume() {
  document.title = "CV - Resume - Lebenslauf";

  return (
    <main data-testid="resume-testid" className="resume__main">
      <div className="resume__main__banner">
        <h1 className="resume__main__banner__title">CV</h1>
      </div>
      <div className="resume__main__container">
        <aside className="resume__main__container__aside">
          <Essentials />
        </aside>
        <div className="resume__main__container__major">
          <ResumeMajor className={"resume__main__container__major"} />
        </div>
      </div>
    </main>
  );
}

export default Resume;
