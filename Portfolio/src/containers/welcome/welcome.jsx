import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./welcome.scss";
import Typewriter from "../../components/typing/typing";
import { useLanguage } from "../../utils/contexts/reactContext/language/useLang";

function Welcome({ setWelcomeLoaded, loading, firstVisit, textContent }) {
  const fullName = "Barthélémy Werlé";
  const [typingJob, setTypingJob] = useState(false);
  const [typingFullName, setTypingFullName] = useState(false);
  const [firstTyping] = useState(() => {
    const visitStamp = window.sessionStorage.getItem("firstTyping") || "true";
    return visitStamp === "true";
  });
  const { language } = useLanguage();
  function delay(setState, value, ms) {
    const timeout = setTimeout(() => {
      setState(value);
    }, ms);
    return () => clearTimeout(timeout);
  }
  useEffect(() => {
    if (firstTyping && !loading && firstVisit === "false") {
      if (!typingJob) {
        delay(setTypingJob, true, 1000);
      }
      if (!typingFullName) {
        delay(setTypingFullName, true, 3000);
      }
      window.sessionStorage.setItem("firstTyping", false);
    }
  }, [firstTyping, typingFullName, typingJob, loading, firstVisit]);

  useEffect(() => {
    /* setWelcomeLoaded is here to time animations properly in background comonent,
    therefore in a useEffect to set the state after first render,
     no welcomeLoaded dependancy to avoid firing it again.}*/
    setWelcomeLoaded(true);
  }, [setWelcomeLoaded]);

  return (
    <div
      className={
        "welcome" + (firstVisit === "false" && !loading ? " --show" : "")
      }
    >
      <p className="welcome__welcome">{textContent.greating[language] + ","}</p>
      <h1 className="welcome__title typing">
        {textContent.message.start[language] + " "}
        {/*TODO: issue with typing and language changes in the same time*/}
        {firstTyping ? (
          typingJob ? (
            <Typewriter text={textContent.message.job[language]} speed={80} />
          ) : (
            ""
          )
        ) : (
          <span>{textContent.message.job[language]}</span>
        )}
        {/*TODO: find a more efficient way.<span className="typing">{job}</span>*/}
        ,
        <br />
        {textContent.message.end[language] + " "}
        {firstTyping ? (
          typingFullName ? (
            <Typewriter text={fullName} speed={80} />
          ) : (
            ""
          )
        ) : (
          <span>{fullName}</span>
        )}
        {/*<span className="typing">{fullName}</span>*/}.
      </h1>
      <p className="welcome__message typing --size">
        <span>{textContent.message.getIn[language]}</span>
      </p>
    </div>
  );
}
//TODO: describe the props
Welcome.propTypes = {
  setWelcomeLoaded: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  firstVisit: PropTypes.string.isRequired,
  textContent: PropTypes.object.isRequired,
};

export default Welcome;
