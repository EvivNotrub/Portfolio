import { PropTypes } from "prop-types";
import jobs from "../../../data/jobsMultiLang.json";
import "./resumeMajor.scss";
import ResumeArticle from "../../../components/resume/resumeArticle/resumeArticle";
import { useLanguage } from "../../../utils/contexts/reactContext/language/useLang";

function ResumeMajor({ className }) {
  //TODO: move to data and add it in resume page as well
  const textContent = {
    pageTitle: { fr: "CV", en: "Resume", de: "Lebenslauf" },
    majorTitle: {
      fr: "Expérience professionnelle",
      en: "Work Experience",
      de: "Berufserfahrung",
    },
    tertiary: { fr: "Tertiaire", en: "Tertiary Sector" },
    services: { fr: "Restauration et Services", en: "Catering and Services" },
  };
  const { language } = useLanguage();
  const tertiair = jobs.tertiaire;
  const tertiaryJobs = tertiair.groups;
  const servicesJobs = jobs.services.groups;
  return (
    <div className={(className && className) + " " + "catalog"}>
      <h2 className="catalog__title">{textContent.majorTitle[language]}</h2>
      <section className="catalog__section --tertiaire">
        <h3 className="catalog__section__title">{tertiair.name[language]}</h3>
        {tertiaryJobs.map((job) => (
          <ResumeArticle key={job.id} article={job} />
        ))}
      </section>
      <section className="catalog__section --services">
        <h3 className="catalog__section__title">
          {textContent.majorTitle[language]}
        </h3>
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
