import { Link } from "react-router-dom";
import "./navigation.scss";

function Navigation() {
  return (
    <nav className="header-kasa__nav">
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projets</Link>
    </nav>
  );
}

export default Navigation;
