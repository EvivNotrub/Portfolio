import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Education from "../../../components/resume/education/education";
import Extras from "../../../components/resume/extras/extras";
import ResumeSkills from "../../../components/resume/resumeSkills/resumeSkills";
import "./essentials.scss";
import { getWindowSize } from "../../../utils/helpers/helpers";
import { booleanSwitch } from "../../../utils/helpers/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "../../../utils/contexts/reactContext/language/useLang";

function Essentials({ textContent }) {
  const [hidden, setHidden] = useState(true);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const { language } = useLanguage();
  console.log("textContent", textContent, language);

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
        <h3 className="part-title">
          {textContent.resumeSkills.title[language]}
        </h3>
        <div className="essentials__part__articles">
          <ResumeSkills textContent={textContent.resumeSkills.sections} />
        </div>
      </section>
      <section className="essentials__part --diplome">
        <h3 className="part-title">{textContent.education.title[language]}</h3>
        <div className="essentials__part__articles">
          <Education textContent={textContent.education.sections} />
        </div>
      </section>
      <section className="essentials__part --extra-pro">
        <h3 className="part-title --toggle">
          {textContent.extras.title[language]}
          <button
            aria-label="Show more"
            onClick={() => booleanSwitch(hidden, setHidden)}
          >
            <FontAwesomeIcon
              className={!hidden ? "turn" : ""}
              icon="fa-solid fa-chevron-down"
            />
          </button>
        </h3>
        <div
          className={
            "essentials__part__articles" + " " + (hidden ? "hide" : "")
          }
        >
          <Extras textContent={textContent.extras.sections} />
        </div>
      </section>
    </div>
  );
}

Essentials.propTypes = {
  textContent: PropTypes.object.isRequired,
};

export default Essentials;
