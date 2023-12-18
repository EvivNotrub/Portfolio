import PropTypes from "prop-types";
import "./scrollPage.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollPage = ({ path, ariaLabel }) => {
  return (
    <Link to={path} className="down" aria-label={ariaLabel}>
      <span className="down__arrow">
        <FontAwesomeIcon icon="fa-solid fa-arrow-down-long" />
      </span>
    </Link>
  );
};

ScrollPage.propTypes = {
  ariaLabel: PropTypes.string,
  path: PropTypes.string,
};

export default ScrollPage;
