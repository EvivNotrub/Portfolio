import { Link } from "react-router-dom";
import "./navigation.scss";

function Navigation() {
  return (
    <nav className="header-kasa__nav">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
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
          </ul>
        </li>

        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/resume">CV</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
