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

    return (
      <img
        key={picture.src + index}
        className={"slideshow__picture" + position + classFullscreen}
        id={index}
        src={picture.src}
        alt={picture.alt}
      />
    );
  });
}

export default Slider;
