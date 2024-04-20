import Accordion from "../../accordion/Accordion";
import { PropTypes } from "prop-types";
import "./resumeSkills.scss";
import { useLanguage } from "../../../utils/contexts/reactContext/language/useLang";

function ResumeSkills({ textContent }) {
  const { language } = useLanguage();

  return (
    <>
      <article className="essentials__article">
        <Accordion
          type="text-list"
          datum={textContent[0].content[language]}
          title={textContent[0].title[language]}
          header="h4"
        />
      </article>
      <article className="essentials__article">
        <Accordion
          type="text-list"
          datum={textContent[1].content[language]}
          title={textContent[1].title[language]}
          header="h4"
        />
      </article>
    </>
  );
}

ResumeSkills.propTypes = {
  textContent: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.object, content: PropTypes.object }),
  ),
};

export default ResumeSkills;
