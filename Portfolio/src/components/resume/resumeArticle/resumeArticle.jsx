import { useState } from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { booleanSwitch } from "../../../utils/helpers/helpers.jsx";
import "./resumeArticle.scss";
import { useLanguage } from "../../../utils/contexts/reactContext/language/useLang.js";

function ResumeArticle({ article }) {
  const [hidden, setHidden] = useState(true);
  const { language } = useLanguage();
  const textContent = {
    fr: "à",
    en: "to",
    de: "bis",
  };
  return (
    <article className="line-of-work">
      <button
        onClick={() => booleanSwitch(hidden, setHidden)}
        className="line-of-work__header"
      >
        <h4 className="line-of-work__header__title">
          {article.name[language]}
        </h4>
        <div className="line-of-work__header__arrow">
          <FontAwesomeIcon
            className={!hidden ? "turn" : ""}
            icon="fa-solid fa-chevron-down"
          />
        </div>
      </button>
      {article.jobs.map((job) => (
        <div
          key={job.id}
          className={"line-of-work__article" + " " + (hidden ? "hide" : "")}
        >
          <h5 className="job-title">
            {job.title[language] + " "}
            <time dateTime={job.dates.start}>{job.dates.start}</time>{" "}
            {textContent[language] + " "}
            <time dateTime={job.dates.end}>{job.dates.end}</time>
          </h5>

          <div className="job-description">
            <ul>
              {job.description.map((desc) => (
                <li key={desc.id}>{desc.text[language]}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </article>
  );
}
//TODO: change : shapeOff for objects "fr" "en"
ResumeArticle.propTypes = {
  article: PropTypes.shape({
    name: PropTypes.object.isRequired,
    jobs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.object.isRequired,
        dates: PropTypes.shape({
          start: PropTypes.string.isRequired,
          end: PropTypes.string,
        }).isRequired,
        description: PropTypes.oneOfType([
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.object.isRequired,
          }),
          PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              text: PropTypes.object.isRequired,
            }),
          ),
        ]).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default ResumeArticle;
