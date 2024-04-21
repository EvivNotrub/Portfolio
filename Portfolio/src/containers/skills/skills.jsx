import { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { getWindowSize } from "../../utils/helpers/helpers";
import Accordion from "../../components/accordion/Accordion";
// import LabeledImage from "../../components/tech/labeledImage";
import "./skills.scss";
import skills from "../../data/skillsIcons.json";
import { useLanguage } from "../../utils/contexts/reactContext/language/useLang";

const Skills = memo(function Skills({ textContent }) {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    windowSize.innerWidth < 768 ? setIsExpanded(false) : setIsExpanded(true);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return (
    <div data-testid="skills-testid" className="skills">
      <h2 className="skills__title">{textContent.title[language]}</h2>
      <div className="skills__container">
        <Accordion
          title={textContent.mainSkills.title[language]}
          type={"LabeledImages"}
          datum={skills.mainSkills}
          className="skills__container__main-skills"
          expanded={true}
        ></Accordion>
        <Accordion
          title={textContent.knowledge.title[language]}
          type={"text-list"}
          datum={textContent.knowledge.content[language]}
          className="skills__container__other-skills"
          expanded={isExpanded}
        ></Accordion>
        <Accordion
          title={textContent.used.title[language]}
          type={"LabeledImages"}
          datum={skills.usedTech}
          className="skills__container__other-skills"
          expanded={isExpanded}
        ></Accordion>
      </div>
    </div>
  );
});
//TODO: describe the props
Skills.propTypes = {
  textContent: PropTypes.object.isRequired,
};

export default Skills;
