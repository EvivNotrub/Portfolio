import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./welcome.scss";
import Typewriter from "../../components/typing/typing";

function Welcome({ setWelcomeLoaded }) {
  const job = "Front End Developer";
  const fullName = "Barthélémy Werlé";
  const [typingJob, setTypingJob] = useState(false);
  const [typingFullName, setTypingFullName] = useState(false);

  function delay(setState, value, ms) {
    const timeout = setTimeout(() => {
      setState(value);
    }, ms);
    return () => clearTimeout(timeout);
  }

  useEffect(() => {
    if (!typingJob) {
      delay(setTypingJob, true, 1000);
    }
    if (!typingFullName) {
      delay(setTypingFullName, true, 3000);
    }
  }, [typingFullName, typingJob]);

  useEffect(() => {
    setWelcomeLoaded(true);
  }, [setWelcomeLoaded]);

  return (
    <div className="welcome">
      <p className="welcome__welcome">Welcome,</p>
      <h1 className="welcome__title typing">
        I&apos;m a {typingJob ? <Typewriter text={job} speed={80} /> : ""}
        {/*TODO: find a more efficient way.<span className="typing">{job}</span>*/}
        ,
        <br />
        my name is{" "}
        {typingFullName ? <Typewriter text={fullName} speed={80} /> : ""}
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
};

export default Welcome;
