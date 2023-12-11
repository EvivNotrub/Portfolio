import { useState } from "react";
import Education from "../../../components/resume/education/education";
import Extras from "../../../components/resume/extras/extras";
import ResumeSkills from "../../../components/resume/resumeSkills/resumeSkills";
import "./essentials.scss";
import arrow from "../../../../public/images/icons/arrow.png";

function Essentials() {
  const [hidden, setHidden] = useState(true);

  function toggleHidden() {
    setHidden(!hidden);
  }

  return (
    <div className="essentials">
      {/* <h2 className="essentials__title">En Bref</h2> */}
      <section className="essentials__part --kompetenz">
        <h3 className="part-title">Compétences</h3>
        <div className="essentials__part__articles">
          <ResumeSkills />
        </div>
      </section>
      <section className="essentials__part --diplome">
        <h3 className="part-title">Dilplômes / Education</h3>
        <div className="essentials__part__articles">
          <Education />
        </div>
      </section>
      <section className="essentials__part --extra-pro">
        <h3 className="part-title --toggle">
          Extra-professionnel
          <button onClick={toggleHidden}>
            <img src={arrow} alt="arrow" />
          </button>
        </h3>
        <div
          className={
            "essentials__part__articles" + " " + (hidden ? "hide" : "")
          }
        >
          <Extras />
        </div>
      </section>
    </div>
  );
}

export default Essentials;
