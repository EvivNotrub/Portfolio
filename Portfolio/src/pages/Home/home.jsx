import About from "../../containers/about/about";
import Contact from "../../containers/contact/contact.jsx";
import ProjectsPreview from "../../containers/projects/projectsPreview";
import Skills from "../../containers/skills/skills";
import "./home.scss";

function Home() {
  document.title = "Accueil";

  return (
    <main className="home__main">
      <h1 className="home__main__title">Accueil</h1>
      <p className="home__main__message">Accueil en cours de construction</p>
      <section id="about">
        <About />
      </section>
      <section id="projectsPreview">
        <ProjectsPreview />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default Home;
