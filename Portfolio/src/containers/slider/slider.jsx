import imageRenderSizes from "../../data/imageRenderSizes.json";

function Slider({
  pictures,
  currentPicture,
  previousPicture,
  nextPicture,
  classFullscreen,
}) {
  return pictures.map((picture, index) => {
    let position;
    switch (index) {
      case currentPicture:
        position = " --current";
        break;
      case nextPicture:
        position = " --next";
        break;
      case previousPicture:
        position = " --previous";
        break;
      default:
        position = "";
    }

    if (imageRenderSizes && picture.src) {
      const src = picture.src;
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
        picture.srcset = srcset;
      }
    }

    return (
      <img
        key={picture.src + index}
        className={"slideshow__picture" + position + classFullscreen}
        id={index}
        src={picture.src}
        sizes="(min-width: 1280px) 936px, (min-width: 960px) 836px, (min-width: 540px) 90vw, 100vw"
        srcSet={picture.srcset ? picture.srcset : null}
        alt={picture.alt}
        loading={position === " --current" ? "eager" : "lazy"}
      />
    );
  });
}

export default Slider;
