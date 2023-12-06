import Accordion from "../../components/accordion/Accordion";
// import LabeledImage from "../../components/tech/labeledImage";
import "./skills.scss";
import skills from "../../data/skillsIcons.json";

function Skills() {
  return (
    <div data-testid="skills-testid" className="skills">
      <h2>Skills and Knowledge</h2>
      <div className="skills__container">
        <Accordion
          title="Main skills"
          type={"LabeledImages"}
          datum={skills.mainSkills}
        ></Accordion>
      </div>
    </div>
  );
}

export default Skills;
