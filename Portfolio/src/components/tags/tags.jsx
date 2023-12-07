import { PropTypes } from "prop-types";
import "./tags.scss";

function Tags({ tags, className, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className={"tags" + " " + className}>
      {tags.map((tag, index) => (
        <span key={Math.random() * (index + 10) + tag} className="tags__tag">
          {tag}
        </span>
      ))}
    </label>
  );
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  htmlFor: PropTypes.string,
};

export default Tags;
