import { useState } from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { booleanSwitch } from "../../../utils/helpers/helpers.jsx";
import "./resumeArticle.scss";

function ResumeArticle({ article }) {
  const [hidden, setHidden] = useState(true);
  return (
    <article className="line-of-work">
      <button
        onClick={() => booleanSwitch(hidden, setHidden)}
        className="line-of-work__header"
      >
        <h4 className="line-of-work__header__title">{article.name}</h4>
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
            {job.title + " "}
            <time dateTime={job.dates.start}>{job.dates.start}</time> à{" "}
            <time dateTime={job.dates.end}>{job.dates.end}</time>
          </h5>

          <div className="job-description">
            <ul>
              {job.description.map((desc) => (
                <li key={desc.id}>{desc.text}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </article>
  );
}

ResumeArticle.propTypes = {
  article: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jobs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        dates: PropTypes.shape({
          start: PropTypes.string.isRequired,
          end: PropTypes.string,
        }).isRequired,
        description: PropTypes.oneOfType([
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
          }),
          PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              text: PropTypes.string.isRequired,
            }),
          ),
        ]).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default ResumeArticle;
