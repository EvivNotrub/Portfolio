import { Link } from "react-router-dom";
import "./portfolio.scss";

function Portfolio() {
  const id = 1;
  return (
    <main data-testid="portfolio-testid" className="about">
      <h1>Portfolio</h1>
      <p>En cours de construction</p>
      <Link to={"/portfolio/" + id}>Lien vers Projet {id}</Link>
    </main>
  );
}

export default Portfolio;
