import Navigation from "../../components/navigations/navigation.jsx";
// import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header data-testid="header-testid" className="main-header">
      <div className="main-header__logo">
        <Link className="main-header__logo__link" to="/">
          {/*TODO: logo? 
          <img
            src={logo}
            alt="logo Portfolio"
            className="main-logo__link__img"
          /> */}
          {/* TODO: quelle balise ici ? */}
          <div className="myName">Werlé Barthélémy</div>
        </Link>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
