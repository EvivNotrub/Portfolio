import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import backgroundImage from "../../assets/images/frame.jpg";
import About from "../../containers/about/about";
import ProjectsPreview from "../../containers/projects/projectsPreview";
import Skills from "../../containers/skills/skills";
import "./home.scss";

function Home({ pPreviewRef, aboutRef, skillsRef }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main className="home__main">
      <div className="home__main__background">
        <img
          className="home__main__background__img"
          src={backgroundImage}
          alt=""
        />
      </div>

      <section id="welcome" className="welcome home__main__section">
        {/* TODO: add alt*/}
        <h1 data-testid="home-testid" className="welcome__title">
          Welcome to the jungle
        </h1>
        <p className="welcome__message">
          Accueil en cours de construction
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nemo
          a sunt et in voluptate magni libero. Dicta, in dolores quos ratione
          magnam, enim eos quaerat quasi necessitatibus magni nam?
        </p>
      </section>
      <section
        id="projectsPreview"
        className="projects home__main__section"
        ref={pPreviewRef}
        tabIndex="-1"
      >
        <ProjectsPreview />
      </section>
      <section
        id="about"
        className="about home__main__section"
        ref={aboutRef}
        tabIndex="-1"
      >
        <About />
      </section>
      <section
        id="skills"
        className="skills home__main__section"
        ref={skillsRef}
        tabIndex="-1"
      >
        <Skills />
      </section>
    </main>
  );
}

Home.propTypes = {
  pPreviewRef: PropTypes.object,
  aboutRef: PropTypes.object,
  skillsRef: PropTypes.object,
};

export default Home;
