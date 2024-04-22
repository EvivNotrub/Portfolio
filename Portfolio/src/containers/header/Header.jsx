import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../../components/navigations/navigation.jsx";
import PropTypes from "prop-types";
import "./header.scss";
import { useLanguage } from "../../utils/contexts/reactContext/language/useLang.js";
import ScrollPage from "../../components/buttons/scrollPage.jsx";

function Header({ ...props }) {
  const { pPreviewRef, aboutRef, skillsRef } = props;
  const firstVisit = window.sessionStorage.getItem("firstVisit") || "true";
  const { language } = useLanguage();
  const textContent = {
    fr: {
      backHome: "Retour à l'accueil",
      backProjects: "Retour au Portfolio",
    },
    en: { backHome: "Back to home page", backProjects: "Back to Portfolio" },
  };
  // Below we compare the path to display the "back to projects" button or not:
  const location = useLocation();
  const path = location.pathname;
  const [arrowBack, setArrowBack] = useState(false);
  useEffect(() => {
    if (path.includes("/projects/")) {
      setArrowBack(true);
    } else {
      setArrowBack(false);
    }
  }, [path]);
  return (
    <header data-testid="header-testid" className="main-header">
      <div className="main-header__logo">
        {arrowBack ? (
          <ScrollPage
            path="/projects"
            ariaLabel={textContent[language].backProjects}
          />
        ) : (
          <Link
            className="main-header__logo__link"
            to="/"
            title={textContent[language].backHome}
            aria-label={textContent[language].backHome}
          >
            {/*TODO: logo? 
        <img
          src={logo}
          alt="logo Portfolio"
          className="main-logo__link__img"
        /> */}
            {/* TODO: quelle balise ici ? H1?? pour referencement? */}
            <div
              className={"myName" + (firstVisit === "true" ? " --animate" : "")}
            >
              Werlé Barthélémy
            </div>
          </Link>
        )}
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
