import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./welcome.scss";
import Typewriter from "../../components/typing/typing";

function Welcome({ setWelcomeLoaded, loading, firstVisit }) {
  const visitStamp = window.sessionStorage.getItem("firstTyping") || "true";
  const job = "Front End Developer";
  const fullName = "Barthélémy Werlé";
  const [typingJob, setTypingJob] = useState(false);
  const [typingFullName, setTypingFullName] = useState(false);
  const [firstTyping] = useState(visitStamp === "true");

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
    setWelcomeLoaded(true);
  }, [setWelcomeLoaded]);

  return (
    <div
      className={
        "welcome" + (firstVisit === "false" && !loading ? " --show" : "")
      }
    >
      <p className="welcome__welcome">Welcome,</p>
      <h1 className="welcome__title typing">
        I&apos;m a{" "}
        {firstTyping ? (
          typingJob ? (
            <Typewriter text={job} speed={80} />
          ) : (
            ""
          )
        ) : (
          <span>{job}</span>
        )}
        {/*TODO: find a more efficient way.<span className="typing">{job}</span>*/}
        ,
        <br />
        my name is{" "}
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
        <span>Make yourself at home and feel free to browse.</span>
      </p>
    </div>
  );
}

Welcome.propTypes = {
  setWelcomeLoaded: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  firstVisit: PropTypes.string.isRequired,
};

export default Welcome;
