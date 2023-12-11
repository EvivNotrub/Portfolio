import { useEffect, useState } from "react";
import Education from "../../../components/resume/education/education";
import Extras from "../../../components/resume/extras/extras";
import ResumeSkills from "../../../components/resume/resumeSkills/resumeSkills";
import "./essentials.scss";
import arrow from "../../../assets/images/arrow.png";
import { getWindowSize } from "../../../utils/helpers/helpers";
import { booleanSwitch } from "../../../utils/helpers/helpers";

function Essentials() {
  const [hidden, setHidden] = useState(true);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    windowSize.innerWidth < 768 ? setHidden(true) : setHidden(false);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

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
          <button onClick={() => booleanSwitch(hidden, setHidden)}>
            <img className={!hidden ? "turn" : ""} src={arrow} alt="arrow" />
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
