import { useState } from "react";
import PropTypes from "prop-types";
import "./progressiveImg.scss";

// TODO: children prop is not used here, remove it or find a way to handle children onLoad
function ImageBlurLoader({ src, smallSrc, children, className, ...props }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className={"img-blur " + className + (loaded ? " --loaded" : "")}
      style={{ backgroundImage: `url(${smallSrc})` }}
    >
      {src ? (
        <img
          src={src}
          alt={props.alt || ""}
          className={className ? className + "__img" : ""}
          loading={props.loading || "lazy"}
          onLoad={() => {
            setLoaded(true);
          }}
          {...props}
        />
      ) : null}
      {children}
    </div>
  );
}

ImageBlurLoader.propTypes = {
  src: PropTypes.string.isRequired,
  smallSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  alt: PropTypes.string,
  loading: PropTypes.string,
};

export default ImageBlurLoader;
