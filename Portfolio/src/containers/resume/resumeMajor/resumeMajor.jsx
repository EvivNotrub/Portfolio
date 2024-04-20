import { PropTypes } from "prop-types";
import jobs from "../../../data/jobsMultiLang.json";
import "./resumeMajor.scss";
import ResumeArticle from "../../../components/resume/resumeArticle/resumeArticle";
import { useLanguage } from "../../../utils/contexts/reactContext/language/useLang";

function ResumeMajor({ className, textContent }) {
  //TODO: move to data and add it in resume page as well

  const { language } = useLanguage();
  const tertiair = jobs.tertiaire;
  const tertiaryJobs = tertiair.groups;
  const services = jobs.services;
  const servicesJobs = services.groups;
  return (
    <div className={(className && className) + " " + "catalog"}>
      <h2 className="catalog__title">{textContent.title[language]}</h2>
      <section className="catalog__section --tertiaire">
        <h3 className="catalog__section__title">{tertiair.name[language]}</h3>
        {tertiaryJobs.map((job) => (
          <ResumeArticle key={job.id} article={job} />
        ))}
      </section>
      <section className="catalog__section --services">
        <h3 className="catalog__section__title">{services.name[language]}</h3>
        {servicesJobs.map((job) => (
          <ResumeArticle key={job.id} article={job} />
        ))}
      </section>
    </div>
  );
}

ResumeMajor.propTypes = {
  className: PropTypes.string,
  textContent: PropTypes.object,
};

export default ResumeMajor;
