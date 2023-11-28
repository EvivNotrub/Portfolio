import Navigation from "../../components/navigation/navigation.jsx";
import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header className="main-header">
      <div className="main-logo">
        <Link className="main-logo__link" to="/">
          <img
            src={logo}
            alt="logo Portfolio"
            className="main-logo__link__img"
          />
          <div className="myName">Werlé Barthélémy</div>
        </Link>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
