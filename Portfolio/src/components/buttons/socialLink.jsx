import { PropTypes } from "prop-types";
import "./socialLink.scss";

function SocialLink({ link, text, children, className }) {
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
  link: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SocialLink;
