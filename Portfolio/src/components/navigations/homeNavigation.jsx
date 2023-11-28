import { Link } from "react-router-dom";
import "./homeNavigation.scss";

function HomeNavigation() {
  return (
    <>
      <nav className="home-nav">
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

export default HomeNavigation;
