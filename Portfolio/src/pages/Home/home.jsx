import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import backgroundImage from "../../assets/images/1x2/1x2.webp";
import About from "../../containers/about/about";
// import ProjectsPreview from "../../containers/projects/projectsPreview";
import Skills from "../../containers/skills/skills";
import "./home.scss";
import Welcome from "../../containers/welcome/welcome";
import ScrollPage from "../../components/buttons/scrollPage";
import Loader from "../../components/loader/loader";

// function Home({ pPreviewRef, aboutRef, skillsRef }) {
function Home({ aboutRef, skillsRef, homeRef }) {
  const visitStamp = window.sessionStorage.getItem("firstVisit") || "true";
  const [firstVisit, setFirstVisit] = useState(visitStamp);
  const [loading, setLoading] = useState(true);
  const [bgImgSrc, bgImgSrcSet] = useState(
    "https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/1x2/1x2.webp",
  );
  const location = useLocation();

  // here we have a function that focus on ref after a delay:

  function focusOnRef(ref) {
    setTimeout(() => {
      ref.current.focus();
    }, 1000);
  }

  useEffect(() => {
    async function fetchImage() {
      const response = await fetch(
        "https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/1x2/1x2.webp",
      );
      if (response.ok) {
        setLoading(false);
        return;
      }
      setLoading(false);
      bgImgSrcSet(backgroundImage);
    }

    fetchImage();
  }, []);

  useEffect(() => {
    if (firstVisit) {
      const timeout = setTimeout(() => {
        window.sessionStorage.setItem("firstVisit", false);
        setFirstVisit("false");
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [firstVisit]);

  useEffect(() => {
    if (firstVisit === "true" || loading) return;

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

  if (firstVisit === "true" || loading)
    return (
      <main>
        <Loader />
      </main>
    );

  return (
    <main data-testid="home-testid" className="home__main">
      <div className="home__main__background">
        <img
          className="home__main__background__img"
          src={bgImgSrc}
          sizes="100vw"
          srcSet="https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/1x2/1x2-300.webp 300w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/1x2/1x2-448.webp 448w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/1x2/1x2-650.webp 650w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/1x2/1x2-860.webp 860w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/1x2/1x2-1030.webp 1030w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/1x2/1x2-1180.webp 1180w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/1x2/1x2-1310.webp 1310w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/1x2/1x2-1430.webp 1430w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/1x2/1x2-1540.webp 1540w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/1x2/1x2-1650.webp 1650w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/1x2/1x2-1740.webp 1740w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/1x2/1x2-1830.webp 1830w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/1x2/1x2.webp 1920w,"
          alt="Jigar Panchal's 3d abstract art from Unsplash"
          loading="eager"
        />
      </div>
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
        <Welcome />
        <ScrollPage path="/#about" ariaLabel="next section: About" />
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
