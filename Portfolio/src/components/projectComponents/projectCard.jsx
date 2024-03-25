import { useEffect, useState, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./projectCard.scss";
import Tags from "../tags/tags";
import imageRenderSizes from "../../data/imageRenderSizes.json";

const ProgressiveImg = lazy(() => import("../imageRender/progressiveImg"));

function ProjectCard({ project }) {
  const [srcset, setSrcset] = useState(null);
  const [src, setSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [smallSrc, setSmallSrc] = useState(null);

  //TODO: move to imageblurloader
  useEffect(() => {
    if (project.pictures[0].src) {
      setSrc(project.pictures[0].src);
    }
    if (imageRenderSizes && project.pictures[0].src) {
      const src = project.pictures[0].src;
      const lastIndex = src.lastIndexOf("/");
      const newDir = src.replace(/\.[^/\\.]+$/, "/"); // with backslash
      // const newDir2 = src.substr(0, src.lastIndexOf(".")); // no backslash
      const fileName = src.substr(lastIndex + 1).replace(/\.[^/\\.]+$/, ""); // fileName without extension
      const fileDirectory = src.substring(
        src.lastIndexOf("/", lastIndex - 1) + 1,
        lastIndex,
      );
      const imageResizeInfo = imageRenderSizes.find(
        (el) => el.fileName === fileName,
      );
      if (imageResizeInfo) {
        const srcset = imageResizeInfo.fileSizes
          .map((size, index) => {
            const pathRoot = newDir + fileName + "-";
            const newPath = pathRoot + size.sizeName + ".webp";
            /*TODO: setSmallSrc(pathRoot + "-35.webp"); WAIT FOR PUSH TO BE ABLE TO USE CDN PATH*/
            index === 0
              ? setSmallSrc(
                  "/images/projects/" +
                    fileDirectory +
                    "/" +
                    fileName +
                    "/" +
                    fileName +
                    "-35.webp",
                )
              : null;
            return newPath + " " + size.size + "w";
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
        <Suspense
          fallback={
            <div className="project-card__link__loader"> Loading... </div>
          }
        >
          {
            //TODO: move to imageblurloader
            isLoaded ? (
              <ProgressiveImg
                src={src}
                srcSet={srcset ? srcset : null}
                sizes={
                  srcset
                    ? "(min-width: 1420px) 628px, (min-width: 540px) calc(46.51vw - 23px), (min-width: 400px) 100vw, calc(75vw + 79px)"
                    : null
                }
                smallSrc={smallSrc ? smallSrc : null}
                className="project-card__link__progImg"
                alt={project.pictures[0].alt}
                title={"Lien vers " + project.name}
              />
            ) : null
          }
        </Suspense>
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
