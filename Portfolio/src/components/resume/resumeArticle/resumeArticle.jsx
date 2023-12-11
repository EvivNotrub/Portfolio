import { PropTypes } from "prop-types";
import "./resumeArticle.scss";

function ResumeArticle({ article }) {
  return (
    <article className="catalog__section__group">
      <h4 className="catalog__section__group__title">{article.title}</h4>
      {article.jobs.map((job) => (
        <div key={job.id} className="catalog__section__group__article">
          <h5 className="job-title">
            {job.title + " "}
            <time dateTime={job.dates.start}>{job.dates.start}</time> à{" "}
            <time dateTime={job.dates.end}>{job.dates.end}</time>
          </h5>
          <p className="job-description">
            <ul>
              {job.description.map((desc) => (
                <li key={desc.id}>{desc.text}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </article>
  );
}

ResumeArticle.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
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
