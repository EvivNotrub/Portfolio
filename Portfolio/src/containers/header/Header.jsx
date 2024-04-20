import Navigation from "../../components/navigations/navigation.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLanguage } from "../../utils/contexts/reactContext/language/useLang.js";

import "./header.scss";

function Header({ ...props }) {
  const { pPreviewRef, aboutRef, skillsRef } = props;
  const { language, setLanguage, LANGUAGES } = useLanguage();

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
          <div className="myName">Werlé Barthélémy</div>
        </Link>
      </div>
      <div className="main-header__lang">
        {language ? <p>{language}</p> : null}
        {LANGUAGES ? (
          <select
            defaultValue={"fr"}
            className="main-header__lang__select"
            onFocus={(e) => {
              e.target.size = 2;
            }}
            onBlur={(e) => {
              e.target.size = 0;
            }}
            onChange={(e) => {
              setLanguage(e.target.value);
              console.log(e.target);
              e.target.size = 1;
              e.target.blur();
            }}
          >
            {LANGUAGES.map(({ code, label }) => (
              <option
                className="main-header__lang__select__opt"
                title={label}
                key={code}
                value={code}
              >
                {" " + label + " "}
              </option>
            ))}
          </select>
        ) : null}
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
