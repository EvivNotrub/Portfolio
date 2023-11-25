import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header className="header-kasa">
      <Link className="logo-kasa__link" to="/">
        <img src={logo} alt="logo Kasa" className="logo-kasa__link__img" />
      </Link>
      <nav className="header-kasa__nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
