import { PropTypes } from "prop-types";
import jobs from "../../../data/jobs2.json";
import "./resumeMajor.scss";
import ResumeArticle from "../../../components/resume/resumeArticle/resumeArticle";

function ResumeMajor({ className }) {
  const tertiaryJobs = jobs.tertiaire.groups;
  console.log(tertiaryJobs);
  const servicesJobs = jobs.services.groups;
  console.log(servicesJobs);
  return (
    <div className={(className && className) + " " + "catalog"}>
      <h2>Expérience professionnelle</h2>
      <section className="catalog__section --tertiaire">
        <h3 className="catalog__section__title">Tertiaire</h3>
        {tertiaryJobs.map((job) => (
          <ResumeArticle key={job.id} article={job} />
        ))}
      </section>
      <section className="catalog__section --services">
        <h3 className="catalog__section__title">Restauration et Services</h3>
        {servicesJobs.map((job) => (
          <ResumeArticle key={job.id} article={job} />
        ))}
      </section>
    </div>
  );
}

ResumeMajor.propTypes = {
  className: PropTypes.string,
};

export default ResumeMajor;
