import PropTypes from "prop-types";
import "./scrollPage.scss";
import { Link } from "react-router-dom";

const ScrollPage = ({ path }) => {
  return (
    <Link to={path} className="down">
      <span className="down__arrow material-symbols-outlined">
        arrow_downward
      </span>
    </Link>
  );
};

ScrollPage.propTypes = {
  path: PropTypes.string,
};

export default ScrollPage;
