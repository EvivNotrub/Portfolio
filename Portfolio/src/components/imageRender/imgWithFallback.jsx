import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function ImgWithFallback({
  src,
  fallback,
  setLoading,
  ...props
}) {
  const [error, setError] = useState(false);
  // errorCount: to avoid getting stuck with loading error
  const [errorCount, setErrorCount] = useState(0);
  const [imgSrc, imgSrcSet] = useState(src);

  function handleError() {
    console.error(
      "Failed to load image from source:",
      src,
      "\nNew source:",
      fallback,
    );
    setError(true);
    setErrorCount(errorCount + 1);
  }

  function handleLoad() {
    setLoading(false);
  }

  useEffect(() => {
    if (error && imgSrc !== fallback) {
      imgSrcSet(fallback);
    }
  }, [error, fallback, imgSrc]);

  useEffect(() => {
    if (errorCount > 1) {
      console.error("Failed to load image from source:", imgSrc);
      setLoading(false);
    }
  }, [errorCount, imgSrc, setLoading]);
  /*onError={() => {
          //TODO: check with this option if it's better and works
          src !== fallbackSrc ? src = fallbackSrc : handleError();
   }}*/
  return (
    <img src={imgSrc} onError={handleError} onLoad={handleLoad} {...props} />
  );
}

ImgWithFallback.propTypes = {
  setLoading: PropTypes.func.isRequired,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  fallback: PropTypes.string.isRequired,
  sercSet: PropTypes.string,
  sizes: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};
