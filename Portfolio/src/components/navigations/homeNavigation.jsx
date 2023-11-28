import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./homeNavigation.scss";

function HomeNavigation({ setChecked }) {
  // TODO: treat as a modal ?? => usePortal
  // TODO: close when clicked outside !
  return (
    <>
      <nav onClick={() => setChecked(false)} className="home-nav">
        <ul>
          <li>
            <Link to="/about">A propos</Link>
          </li>
          <li>
            <Link to="/skills">Compétences</Link>
          </li>
          <li>
            <Link to="/projectsPreview">Projets Preview</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

HomeNavigation.propTypes = {
  setChecked: PropTypes.func,
};

export default HomeNavigation;
