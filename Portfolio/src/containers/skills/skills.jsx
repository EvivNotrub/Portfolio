import { useOutletContext } from "react-router-dom";
import "./skills.scss";

function Skills() {
  const outletClass = useOutletContext();

  return (
    <div data-testid="skills-testid" className={"skills" + " " + outletClass}>
      <h2>Compétences et autres</h2>
      <p>Skills en cours de construction</p>
    </div>
  );
}

export default Skills;
