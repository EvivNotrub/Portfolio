import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import backgroundImage from "../../assets/images/frame.jpg";
import About from "../../containers/about/about";
import ProjectsPreview from "../../containers/projects/projectsPreview";
import Skills from "../../containers/skills/skills";
import "./home.scss";
import Welcome from "../../containers/welcome/welcome";
import ScrollPage from "../../components/buttons/scrollPage";

function Home({ pPreviewRef, aboutRef, skillsRef }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      console.log(location);
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main data-testid="home-testid" className="home__main">
      <div className="home__main__background">
        <img
          className="home__main__background__img"
          src={backgroundImage}
          alt="Jigar Panchal's 3d abstract art from Unsplash"
        />
      </div>
      {/* TODO: implement hide class on scroll ?
          TODO: layout for smartphone landscape mode*/}
      <section
        id="welcome"
        className={
          "greet home__main__section" + " " + (location.hash && "hide")
        }
      >
        <Welcome />
        <ScrollPage path="/#about" />
      </section>
      <section
        id="about"
        className="about-section home__main__section"
        ref={aboutRef}
        tabIndex="-1"
      >
        <About />
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
        id="skills"
        className="knowledge home__main__section"
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