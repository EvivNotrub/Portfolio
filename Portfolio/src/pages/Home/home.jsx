import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import About from "../../containers/about/about";
import ProjectsPreview from "../../containers/projects/projectsPreview";
import Skills from "../../containers/skills/skills";
import "./home.scss";

function Home() {
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
      <section id="welcome" className="section-welcome section">
        <h1 data-testid="home-testid" className="home__main__title">
          Welcome to the jungle
        </h1>
        <p className="home__main__message">
          Accueil en cours de construction
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nemo
          a sunt et in voluptate magni libero. Dicta, in dolores quos ratione
          magnam, enim eos quaerat quasi necessitatibus magni nam?
        </p>
      </section>
      <section id="projectsPreview" className="section-projects section">
        <ProjectsPreview />
      </section>
      <section id="about" className="section-about section">
        <About />
      </section>
      <section id="skills" className="section-skills section">
        <Skills />
      </section>
    </main>
  );
}

export default Home;
