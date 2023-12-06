import Accordion from "../../components/accordion/Accordion";
// import LabeledImage from "../../components/tech/labeledImage";
import "./skills.scss";
import skills from "../../data/skillsIcons.json";

function Skills() {
  const knowledge = [
    "Accessibility",
    "SEO",
    "Performance Optimisation",
    "Debugging",
    "Version Controle",
    "Unit Testing",
  ];

  return (
    <div data-testid="skills-testid" className="skills">
      <h2 className="skills__title">Skills and Knowledge</h2>
      <div className="skills__container">
        <Accordion
          title="Main skills"
          type={"LabeledImages"}
          datum={skills.mainSkills}
          className="skills__container__main-skills"
        ></Accordion>
        <Accordion
          title="Knowledge"
          type={"text-list"}
          datum={knowledge}
          className="skills__container__other-skills"
        ></Accordion>
        <Accordion
          title="Used Technologies"
          type={"LabeledImages"}
          datum={skills.usedTech}
          className="skills__container__other-skills"
        ></Accordion>
      </div>
    </div>
  );
}

export default Skills;
