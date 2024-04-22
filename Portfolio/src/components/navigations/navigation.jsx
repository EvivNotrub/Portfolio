import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";
import Mutton from "../buttons/mutton";
import LangSelect from "../select/langSelect";
import { useLanguage } from "../../utils/contexts/reactContext/language/useLang";
import textContent from "../../data/moreTextContent/navigation.json";
//TODO: need lazy loading for LangSelect?

// import PropTypes from "prop-types";
// function Navigation({ ...props }) {
// const { pPreviewRef, skillsRef, aboutRef, homeRef } = props;

function Navigation() {
  const [checked, setChecked] = useState(false);
  // on focus can be manged from line 8 to 13 in nav.scss
  const [isFocused, setIsFocused] = useState(false);
  const [subNav, setSubNav] = useState(false);
  const { language } = useLanguage();
  const { home, projects, resume, contact } = textContent[language];

  // const focusOnRef = (ref) => {
  //   ref.current.focus();
  // };
  const blur = () => {
    document.activeElement.blur();
  };
  const closeNav = () => {
    // focus is also managed in home.jsx using location.hash
    // line below: a simple alternative without focus:
    // document.activeElement.blur();

    setChecked(false);
    setIsFocused(false);
    setSubNav(false);
  };

  // closes the nav & sub-nav when the user clicks outside of the nav
  // stopPropagation on Home link and inside Mutton component
  //AND closes the nav & sub-nav when the user hits the ENTER key or the ESC key
  useEffect(() => {
    if (isFocused || checked || subNav) {
      window.addEventListener("click", closeNav);
      const closeWithKey = (e) => {
        if (e.keyCode === 13 || e.keyCode === 27) {
          closeNav();
        }
      };
      window.addEventListener("keydown", closeWithKey);
      return () => {
        window.removeEventListener("click", closeNav);
        window.removeEventListener("keydown", closeWithKey);
      };
    }
  }, [checked, isFocused, subNav]);

  return (
    <nav
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      data-testid="nav-testid"
      className="nav"
    >
      <Mutton
        addClass={"nav__mutton"}
        checked={checked}
        setChecked={setChecked}
      />
      <ul className={"nav__list" + " " + (checked || isFocused ? "show" : "")}>
        <li className="nav__list__item">
          <Link
            onClick={(e) => {
              e.stopPropagation();
            }}
            onFocus={() => setSubNav(true)}
            onBlur={() => setSubNav(false)}
          >
            {home.head}
          </Link>
          <nav
            data-testid="sub-nav-testid"
            className={"sub-nav" + " " + (subNav ? "show-sub" : "")}
            onFocus={() => setSubNav(true)}
            onBlur={() => setSubNav(false)}
          >
            <ul className="sub-nav__list">
              <li className="sub-nav__item">
                {/* TODO: update test for new item */}
                <Link
                  data-testid="welcomeLink"
                  to="/"
                  // onClick={() => focusOnRef(homeRef)} See home.jsx
                >
                  {home.subNav.welcome}
                </Link>
              </li>
              <li className="sub-nav__item">
                <Link
                  data-testid="aboutLink"
                  to="/#about"
                  // onClick={() => focusOnRef(aboutRef)} See home.jsx
                >
                  {home.subNav.about}
                </Link>
              </li>
              <li className="sub-nav__item">
                <Link
                  data-testid="skillsLink"
                  to="/#skills"
                  // onClick={() => focusOnRef(skillsRef)} See home.jsx
                >
                  {home.subNav.skills}
                </Link>
              </li>
              {/* <li className="sub-nav__item">
                <Link
                  data-testid="pPreviewLink"
                  to="/#projectsPreview"
                  onClick={() => focusOnRef(pPreviewRef)}
                >
                  Projets Preview
                </Link>
              </li> */}
            </ul>
          </nav>
        </li>
        <li className="nav__list__item">
          <Link to="/projects" onClick={blur}>
            {projects}
          </Link>
        </li>
        <li className="nav__list__item">
          <Link to="/resume" onClick={blur}>
            {resume}
          </Link>
        </li>
        <li className="nav__list__item">
          <Link to="/contact" onClick={blur}>
            {contact}
          </Link>
        </li>
        <li className="nav__list__item">
          <LangSelect
            className={"nav__list__item__lang"}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </li>
      </ul>
    </nav>
  );
}

// Navigation.propTypes = {
//   pPreviewRef: PropTypes.object,
//   homeRef: PropTypes.object,
//   skillsRef: PropTypes.object,
//   aboutRef: PropTypes.object,
// };

export default Navigation;
