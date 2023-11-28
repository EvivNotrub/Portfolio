import { Link } from "react-router-dom";
import "./navigation.scss";

function Navigation() {
  return (
    <nav className="header-kasa__nav">
      <Link to="/">Accueil</Link>
      <a href="/#about">A propos</a>
      <a href="/#skills">Compétences</a>
      <a href="/#projectsPreview">Projets Preview</a>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/resume">CV</Link>
      <a href="/#contact">Contact</a>
    </nav>
  );
}

export default Navigation;
