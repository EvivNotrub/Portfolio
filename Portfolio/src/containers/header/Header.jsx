import Navigation from "../../components/navigations/navigation.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./header.scss";

function Header({ ...props }) {
  const { pPreviewRef, aboutRef, skillsRef } = props;
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
          {/* TODO: quelle balise ici ? H1?? pour referencement? */}
          <div className="myName --1">Werlé Barthélémy</div>
          <div className="myName --2">Werlé Barthélémy</div>
          <div className="myName --3">Werlé Barthélémy</div>
          <div className="myName --4">Werlé Barthélémy</div>
          {/* <div className="myName --5">Werlé Barthélémy</div> */}
        </Link>
      </div>
      <Navigation
        pPreviewRef={pPreviewRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
      />
    </header>
  );
}

Header.propTypes = {
  pPreviewRef: PropTypes.object,
  aboutRef: PropTypes.object,
  skillsRef: PropTypes.object,
};

export default Header;
