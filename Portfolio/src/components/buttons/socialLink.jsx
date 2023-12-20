import { PropTypes } from "prop-types";
import "./socialLink.scss";
import { Link } from "react-router-dom";

function SocialLink({ link, text, children, className, ReactRouter }) {
  if (ReactRouter)
    return (
      <Link
        className={"social-link" + (className ? " " + className : "")}
        to={link}
      >
        {children}
        <span className="social-link__text">{text}</span>
      </Link>
    );

  return (
    <a
      className={"social-link" + (className ? " " + className : "")}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="social-link__text">{text}</span>
    </a>
  );
}

SocialLink.propTypes = {
  ReactRouter: PropTypes.bool,
  link: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SocialLink;
