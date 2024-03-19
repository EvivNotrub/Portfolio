import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// !!!! CAREFUL the loading attribute is for img tag NOT related to setLoading
export default function ImgWithFallback({
  src,
  fallback,
  alt,
  loading,
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

  return (
    <>
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        loading={loading}
        {...props}
      />
    </>
  );
}

ImgWithFallback.propTypes = {
  setLoading: PropTypes.func.isRequired,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  fallback: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  loading: PropTypes.string,
  sercSet: PropTypes.string,
  sizes: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};
