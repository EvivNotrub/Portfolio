import "./welcome.scss";

function Welcome() {
  return (
    <div className="welcome">
      <p className="welcome__welcome">Welcome,</p>
      <h1 className="welcome__title">
        I'm a Junior <span className="typing">Front End Developer</span>,
        <br />
        my name is <span className="typing">Barthélémy Werlé</span>.
      </h1>
      <p className="welcome__message">
        Make yourself at home and feel free to browse.
      </p>
    </div>
  );
}

export default Welcome;
