import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";
import Mutton from "../buttons/mutton";

function Navigation() {
  const [checked, setChecked] = useState(false);
  // on focus can be manged from line 8 to 13 in nav.scss
  const [isFocused, setIsFocused] = useState(false);
  const [subNav, setSubNav] = useState(false);

  // closes the nav & sub-nav when the user clicks outside of the nav
  // stopPropagation on Home link and inside Mutton component
  useEffect(() => {
    const closeNav = () => {
      setChecked(false);
      setIsFocused(false);
      setSubNav(false);
    };
    window.addEventListener("click", closeNav);
    return () => {
      window.removeEventListener("click", closeNav);
    };
  }, []);

  // closes the nav & sub-nav when the user hits the ENTER key or the ESC key
  useEffect(() => {
    const closeNav = (e) => {
      if (e.keyCode === 13 || e.keyCode === 27) {
        setChecked(false);
        setIsFocused(false);
        setSubNav(false);
      }
    };
    window.addEventListener("keydown", closeNav);
    return () => {
      window.removeEventListener("keydown", closeNav);
    };
  }, []);

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
            to="/"
            onClick={(e) => e.stopPropagation()}
            onFocus={() => setSubNav(true)}
            onBlur={() => setSubNav(false)}
          >
            Accueil
          </Link>
          <nav
            data-testid="sub-nav-testid"
            className={"sub-nav" + " " + (subNav ? "show-sub" : "")}
            onFocus={() => setSubNav(true)}
            onBlur={() => setSubNav(false)}
          >
            <ul className="sub-nav__list">
              <li className="sub-nav__item">
                <Link data-testid="aboutLink" to="/#about">
                  A propos
                </Link>
              </li>
              <li className="sub-nav__item">
                <Link to="/#skills">Compétences</Link>
              </li>
              <li className="sub-nav__item">
                <Link to="/#projectsPreview">Projets Preview</Link>
              </li>
            </ul>
          </nav>
        </li>
        <li className="nav__list__item">
          <Link to="/projects">Mes Projets</Link>
        </li>
        <li className="nav__list__item">
          <Link to="/resume">CV</Link>
        </li>
        <li className="nav__list__item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
