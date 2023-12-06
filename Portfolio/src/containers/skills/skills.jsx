import Accordion from "../../components/accordion/Accordion";
import "./skills.scss";

function Skills() {
  return (
    <div data-testid="skills-testid" className="skills">
      <h2>Compétences et autres</h2>
      <div className="skills__container">
        <Accordion title="Langages" datum="HTML, CSS, JavaScript, PHP" />
      </div>
    </div>
  );
}

export default Skills;
