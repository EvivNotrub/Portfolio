// import About from "../../containers/about/about";
// import Contact from "../../containers/contact/contact.jsx";
// import ProjectsPreview from "../../containers/projects/projectsPreview";
// import Skills from "../../containers/skills/skills";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./home.scss";

function Home() {
  document.title = "Accueil";
  const outletClass = "home__main__content__outlet";
  const [checkbox, setCheckbox] = useState(
    window.matchMedia("(max-width: 767.99px)").matches,
  );
  const [checked, setchecked] = useState(false);

  function handleCheckbox() {
    setchecked(!checked);
  }

  useEffect(() => {
    function handleResize() {
      setCheckbox(window.matchMedia("(max-width: 767.99px)").matches);
      setTimeout(() => {
        setchecked(false);
      }, 1500);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!checkbox) {
      setchecked(true);
    }
  }, [checkbox]);

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
      <section className="home__main__content">
        {checkbox && (
          <input
            type="checkbox"
            className="home__main__content__toogle"
            checked={checked}
            onChange={handleCheckbox}
          />
        )}
        <aside className="home__main__content__aside">
          <nav>
            <ul>
              <li>
                <Link to="/about">A propos</Link>
              </li>
              <li>
                <Link to="/skills">Compétences</Link>
              </li>
              <li>
                <Link to="/projectsPreview">Projets Preview</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <Outlet context={outletClass} />
      </section>
    </main>
  );
}

export default Home;
