import Education from "../../../components/resume/education/education";
import Extras from "../../../components/resume/extras/extras";
import ResumeSkills from "../../../components/resume/resumeSkills/resumeSkills";
import "./essentials.scss";

function Essentials() {
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
        <h3 className="part-title">Extra-professionnel</h3>
        <div className="essentials__part__articles">
          <Extras />
        </div>
      </section>
    </div>
  );
}

export default Essentials;
