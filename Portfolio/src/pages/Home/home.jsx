import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BackgroundImg from "../../components/backgroundImage/backgroundImg.jsx";
import About from "../../containers/about/about";
// import ProjectsPreview from "../../containers/projects/projectsPreview";
import Skills from "../../containers/skills/skills";
import "./home.scss";
import Welcome from "../../containers/welcome/welcome";
import ScrollPage from "../../components/buttons/scrollPage";
import Loader from "../../components/loader/loader";

// function Home({ pPreviewRef, aboutRef, skillsRef }) {
/* Component manges the states needed to trigger and time CSS 
animations and avoid having them every time you visit the page. */
function Home({ aboutRef, skillsRef, homeRef }) {
  /* firstVisit: reflects the first visit per session.
  Controls the welcome + img animation
   */
  const [firstVisit, setFirstVisit] = useState(() => {
    const visitStamp = window.sessionStorage.getItem("firstVisit") || "true";
    return visitStamp;
  });
  /* loading: reflects the loading state of the image in the background
  and controls the welcome animation + scrollIntoview delay. It is set to false 
  by ImgWithFallback*/
  const [loading, setLoading] = useState(true);
  //welcomeLoaded: controls the img animation class to match the welcome animation
  const [welcomeLoaded, setWelcomeLoaded] = useState(false);
  const location = useLocation();

  // focus on ref after a delay in order to avoid trying focus on ref before it is rendered:
  function focusOnRef(ref) {
    setTimeout(() => {
      ref.current.focus();
    }, 1000);
  }

  useEffect(() => {
    if (firstVisit) {
      const timeout = setTimeout(() => {
        window.sessionStorage.setItem("firstVisit", false);
        setFirstVisit("false");
      }, 1800);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [firstVisit]);

  /*This useEffect prevents the code below to be executed every time Home renders */
  useEffect(() => {
    if (firstVisit === "true" || loading) {
      return;
    }
    const id = location.hash.slice(1);
    if (id === "about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      focusOnRef(aboutRef);
    } else if (id === "skills") {
      skillsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      focusOnRef(skillsRef);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      // TODO: focus on homeRef but it makes sub nav disapear after few seconds when clicking on Home...should not happen!!
      // focusOnRef(homeRef);
    }
  }, [aboutRef, firstVisit, homeRef, loading, location, skillsRef]);

  return (
    <main data-testid="home-testid" className="home__main">
      <BackgroundImg
        firstVisit={firstVisit}
        setLoading={setLoading}
        welcomeLoaded={welcomeLoaded}
        className="home__main__background"
      />
      {/* TODO: implement hide class on scroll ?
          TODO: layout for smartphone landscape mode*/}
      <section
        id="welcome"
        className={
          "greet home__main__section" + " " + (location.hash && "hide")
        }
        ref={homeRef}
        tabIndex="-1"
      >
        <>
          {(firstVisit === "true" || loading) && <Loader />}
          <Welcome
            welcomeLoaded={welcomeLoaded}
            setWelcomeLoaded={setWelcomeLoaded}
            loading={loading}
            firstVisit={firstVisit}
          />
          <ScrollPage path="/#about" ariaLabel="next section: About" />
        </>
      </section>
      <section
        id="about"
        className="about-section home__main__section"
        ref={aboutRef}
        tabIndex="-1"
      >
        <About />
      </section>
      {/* <section
        id="projectsPreview"
        className="projects home__main__section"
        ref={pPreviewRef}
        tabIndex="-1"
      >
        <ProjectsPreview />
      </section> */}
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
  // pPreviewRef: PropTypes.object,
  homeRef: PropTypes.object,
  aboutRef: PropTypes.object,
  skillsRef: PropTypes.object,
};

export default Home;
