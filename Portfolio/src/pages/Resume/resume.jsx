import Essentials from "../../containers/resume/ResumeEssentials/essentials";
import ResumeMajor from "../../containers/resume/resumeMajor/resumeMajor";
import { useLanguage } from "../../utils/contexts/reactContext/language/useLang";
import "./resume.scss";

// TODO: language switcher /!\ 2nd language attribute here
function Resume() {
  const { language } = useLanguage();

  //TODO: wrap in useEffect or useCallback?
  function changeTitle(language) {
    switch (language) {
      case "fr":
        return "CV";
      case "en":
        return "Resume";
      case "de":
        return "Lebenslauf";
      default:
        return "CV";
    }
  }
  const title = changeTitle(language);
  document.title = title + " - Werlé Barthélémy";
  return (
    <main lang="fr" data-testid="resume-testid" className="resume__main">
      <div className="resume__main__banner" data-after-content={title}>
        <h1 className="resume__main__banner__title">{title}</h1>
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
