import "./education.scss";

function Education() {
  return (
    <>
      <article className="essentials__article">
        <h4 className="essentials__article__title">Intégrateur Web</h4>
        <p>
          <time dateTime="2023-03">03/2023</time>-
          <time dateTime="2023-12">12/2023</time>
        </p>
        <p className="essentials__article__institute">
          Open Classrooms - Online
        </p>
      </article>
      <article className="essentials__article">
        <h4 className="essentials__article__title">
          Baccalauréat Général Scientifique - SVT
        </h4>
        <p>
          <time dateTime="2008-06">06/2008</time>
        </p>
        <p className="essentials__article__institute">
          Lycée Jean Renoir, Munich, Allemagne
        </p>
      </article>
    </>
  );
}

export default Education;
