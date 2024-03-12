import { useState, useEffect } from "react";
import { getWindowSize } from "../../utils/helpers/helpers";
import Accordion from "../../components/accordion/Accordion";
// import LabeledImage from "../../components/tech/labeledImage";
import "./skills.scss";
import skills from "../../data/skillsIcons.json";

function Skills() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isExpanded, setIsExpanded] = useState(false);
  const knowledge = [
    "Accessibility",
    "SEO",
    "Performance Optimisation",
    "Debugging",
    "Version Controle",
    "Unit Testing",
  ];

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
      <h2 className="skills__title">Skills and Knowledge</h2>
      <div className="skills__container">
        <Accordion
          title="Main skills"
          type={"LabeledImages"}
          datum={skills.mainSkills}
          className="skills__container__main-skills"
          expanded={true}
        ></Accordion>
        <Accordion
          title="Knowledge"
          type={"text-list"}
          datum={knowledge}
          className="skills__container__other-skills"
          expanded={isExpanded}
        ></Accordion>
        <Accordion
          title="Used Technologies"
          type={"LabeledImages"}
          datum={skills.usedTech}
          className="skills__container__other-skills"
          expanded={isExpanded}
        ></Accordion>
      </div>
    </div>
  );
}

export default Skills;
