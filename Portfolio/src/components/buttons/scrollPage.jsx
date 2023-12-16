import PropTypes from "prop-types";
import "./scrollPage.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

const ScrollPage = ({ path }) => {
  return (
    <Link to={path} className="down">
      <span className="down__arrow">
        <FontAwesomeIcon icon={faArrowDownLong} />
      </span>
    </Link>
  );
};

ScrollPage.propTypes = {
  path: PropTypes.string,
};

export default ScrollPage;
