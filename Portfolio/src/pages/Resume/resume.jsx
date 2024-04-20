import Essentials from "../../containers/resume/ResumeEssentials/essentials";
import ResumeMajor from "../../containers/resume/resumeMajor/resumeMajor";
import { useLanguage } from "../../utils/contexts/reactContext/language/useLang";
import "./resume.scss";
import textContent from "../../data/pagesTextContent/resumePage.json";

// TODO: language switcher /!\ 2nd language attribute here
function Resume() {
  const { language } = useLanguage();

  const title = textContent.pageTitle[language] || "CV";
  document.title = title + " - Werlé Barthélémy";
  return (
    <main lang="fr" data-testid="resume-testid" className="resume__main">
      <div className="resume__main__banner" data-after-content={title}>
        <h1 className="resume__main__banner__title">{title}</h1>
      </div>
      <div className="resume__main__container">
        <aside className="resume__main__container__aside">
          <Essentials textContent={textContent.resumeEssentials} />
        </aside>
        <div className="resume__main__container__major">
          <ResumeMajor
            className={"resume__main__container__major"}
            textContent={textContent.resumeMajor}
          />
        </div>
      </div>
    </main>
  );
}

export default Resume;
