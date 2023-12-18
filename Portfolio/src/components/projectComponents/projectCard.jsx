import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./projectCard.scss";
import Tags from "../tags/tags";
import { useEffect, useState } from "react";
import imageRenderSizes from "../../data/imageRenderSizes.json";

function ProjectCard({ project, index }) {
  const [srcset, setSrcset] = useState(null);
  const [src, setSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (project.pictures[0].src) {
      setSrc(project.pictures[0].src);
    }
    if (imageRenderSizes && project.pictures[0].src) {
      const src = project.pictures[0].src;
      const newDir = src.replace(/\.[^/\\.]+$/, "/"); // with backslash
      // const newDir2 = src.substr(0, src.lastIndexOf(".")); // no backslash
      const file = src.substr(src.lastIndexOf("/") + 1); //with extension
      const fileName = file.replace(/\.[^/\\.]+$/, ""); //without extension
      const imageResizeInfo = imageRenderSizes.find(
        (el) => el.fileName === fileName,
      );
      if (imageResizeInfo) {
        const srcset = imageResizeInfo.fileSizes
          .map((size) => {
            return (
              newDir +
              fileName +
              "-" +
              size.sizeName +
              ".webp" +
              " " +
              size.size +
              "w"
            );
          })
          .join(", ");
        setSrcset(srcset);
      }
    }
    setIsLoaded(true);
  }, [project]);

  return (
    <article className="project-card">
      <Link
        className="project-card__link"
        id={project.name}
        to={"/projects/" + project.id}
      >
        {isLoaded ? (
          <img
            className="project-card__link__img"
            src={src}
            srcSet={srcset ? srcset : null}
            sizes={
              srcset
                ? "(min-width: 1420px) 628px, (min-width: 540px) calc(46.51vw - 23px), (min-width: 400px) 100vw, calc(75vw + 79px)"
                : null
            }
            alt={project.pictures[0].alt}
            title={"Lien vers " + project.name}
            loading={index > 1 ? "lazy" : "eager"}
            // fetchpriority={index > 1 ? "high" : "low"}
          />
        ) : (
          <div className="project-card__link__loader"> Loading... </div>
        )}
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
  index: PropTypes.number,
  project: PropTypes.object,
};

export default ProjectCard;
