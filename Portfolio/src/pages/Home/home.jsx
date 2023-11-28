// import About from "../../containers/about/about";
// import Contact from "../../containers/contact/contact.jsx";
// import ProjectsPreview from "../../containers/projects/projectsPreview";
// import Skills from "../../containers/skills/skills";
// import { useEffect } from "react";
import MainContent from "../../containers/homeContent/mainContent";
import "./home.scss";

function Home() {
  //   const navigate = useNavigate();
  document.title = "Accueil";

  return (
    <main className="home__main">
      <h1 className="home__main__title">Accueil</h1>
      <p className="home__main__message">
        Accueil en cours de construction
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nemo a
        sunt et in voluptate magni libero. Dicta, in dolores quos ratione
        magnam, enim eos quaerat quasi necessitatibus magni nam?
      </p>
      <MainContent />
    </main>
  );
}

export default Home;
