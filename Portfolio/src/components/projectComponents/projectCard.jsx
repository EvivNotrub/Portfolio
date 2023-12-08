import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./projectCard.scss";
import Tags from "../tags/tags";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        className="project-card__link"
        id={project.name}
        to={"/projects/" + project.id}
      >
        <img
          className="project-card__link__img"
          src={project.pictures[0].src}
          alt={project.pictures[0].src}
          title={"Lien vers " + project.name}
        />
      </Link>
      <Tags
        className="project-card__tags"
        tags={project.tags}
        htmlFor={project.name}
      />
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
