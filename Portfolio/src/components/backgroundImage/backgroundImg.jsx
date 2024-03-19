import { useEffect, useState } from "react";
import backgroundImage from "../../assets/images/bgImgTest.webp";
import ImgWithFallback from "../../components/imageRender/imgWithFallback";
import PropTypes from "prop-types";
import "./backgroundImg.scss";

function BackgroundImg({ setLoading, className, firstVisit, welcomeLoaded }) {
  const [bob, setBob] = useState("");
  const [imgLoaded, setImgLoaded] = useState("");

  //don't forget space before className addition
  useEffect(() => {
    if (firstVisit === "false") {
      setBob(" bob");
    }
  }, [firstVisit]);

  useEffect(() => {
    if (welcomeLoaded) {
      setImgLoaded(" img-loaded");
    }
  }, [welcomeLoaded]);

  // TODO: bob below is a temporary class ...implement a better solution !!
  return (
    <div className={"main-bckgd-img" + " " + className + bob + imgLoaded}>
      <ImgWithFallback
        setLoading={setLoading}
        src={
          "https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg.webp"
        }
        fallback={backgroundImage}
        alt="Mont Buet, France"
        loading="eager"
        className="main-bckgd-img__img"
        sizes="100vw"
        srcSet="https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg-300.webp 300w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg-448.webp 448w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg-650.webp 650w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg-860.webp 860w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg-1030.webp 1030w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg-1180.webp 1180w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg-1310.webp 1310w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg-1430.webp 1430w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg-1540.webp 1540w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg-1650.webp 1650w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg-1740.webp 1740w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg-1830.webp 1830w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg.webp 1920w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg-1990.webp 1990w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg-2048.webp 2048w, https://cdn.jsdelivr.net/gh/EvivNotrub/Portfolio@gh-pages/images/bgImg/bgImg-2560.webp 2560w"
      />
    </div>
  );
}

BackgroundImg.propTypes = {
  setLoading: PropTypes.func.isRequired,
  className: PropTypes.string,
  firstVisit: PropTypes.string.isRequired,
  welcomeLoaded: PropTypes.bool.isRequired,
};

export default BackgroundImg;
