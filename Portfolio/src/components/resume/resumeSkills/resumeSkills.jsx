import Accordion from "../../accordion/Accordion";
import { PropTypes } from "prop-types";
import "./resumeSkills.scss";
import { useLanguage } from "../../../utils/contexts/reactContext/language/useLang";

function ResumeSkills({ textContent }) {
  const { language } = useLanguage();

  return (
    <>
      {textContent.map((section) => (
        <article className="essentials__article" key={section.id}>
          <Accordion
            type="text-list"
            title={section.title[language]}
            header="h4"
            datum={section.content[language]}
          />
        </article>
      ))}
    </>
  );
}

ResumeSkills.propTypes = {
  textContent: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.object, content: PropTypes.object }),
  ),
};

export default ResumeSkills;
