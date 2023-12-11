import { PropTypes } from "prop-types";
import Education from "../../../components/resume/education/education";
import Extras from "../../../components/resume/extras/extras";
import ResumeSkills from "../../../components/resume/resumeSkills/resumeSkills";
import "./essentials.scss";

function Essentials({ className }) {
  return (
    <div className={(className && className) + " " + "essentials"}>
      <section className={"essentials__section --kompetenz"}>
        <h3 className="essentials__subtitle">Compétences</h3>
        <ResumeSkills />
      </section>
      <section className="essentials__section --diplome">
        <h3 className="essentials__subtitle">Dilplômes / Education</h3>
        <Education />
      </section>
      <section className="essentials__section --extra-pro">
        <h3 className="essentials__subtitle">Extra-professionnel</h3>
        <Extras />
      </section>
    </div>
  );
}

Essentials.propTypes = {
  className: PropTypes.string,
};

export default Essentials;
