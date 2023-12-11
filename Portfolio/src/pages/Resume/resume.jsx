import "./resume.scss";

function Resume() {
  document.title = "CV";

  return (
    <main data-testid="resume-testid" className="resume__main">
      <div className="resume__banner">
        <h1 className="resume__main__title">CV</h1>
      </div>
      <p className="resume__main__message">En cours de construction</p>
    </main>
  );
}

export default Resume;
