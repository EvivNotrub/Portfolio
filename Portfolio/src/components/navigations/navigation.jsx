import { Link } from "react-router-dom";
import "./navigation.scss";
import Mutton from "../buttons/mutton";

function Navigation() {
  return (
    <nav data-testid="nav-testid" className="nav">
      <ul className="nav__list">
        <li className="nav__list__item">
          <Link to="/">Accueil</Link>
          <div data-testid="sub-nav-testid" className="sub-nav">
            <ul className="sub-nav__list">
              <li className="sub-nav__item">
                <Link data-testid="aboutLink" to="/about">
                  A propos
                </Link>
              </li>
              <li className="sub-nav__item">
                <Link to="/skills">Compétences</Link>
              </li>
              <li className="sub-nav__item">
                <Link to="/projectsPreview">Projets Preview</Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav__list__item">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav__list__item">
          <Link to="/resume">CV</Link>
        </li>
        <li className="nav__list__item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Mutton />
    </nav>
  );
}

export default Navigation;
