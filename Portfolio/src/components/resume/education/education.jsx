import Accordion from "../../accordion/Accordion";
import "./education.scss";

function Education() {
  const intWeb = (
    <>
      <span>
        <time dateTime="2023-03">03/2023</time>-
        <time dateTime="2023-12">12/2023</time>
      </span>
      <br />
      <span className="essentials__article__institute">
        Open Classrooms - Online
      </span>
    </>
  );
  const bacc = (
    <>
      <span>
        <time dateTime="2008-06">06/2008</time>
      </span>
      <br />
      <span className="essentials__article__institute">
        Lycée Jean Renoir, Munich, Allemagne
      </span>
    </>
  );
  return (
    <>
      <article className="essentials__article">
        <Accordion
          type="text"
          title="Intégrateur Web"
          header="h4"
          datum={intWeb}
          className={"essentials__article__accordion"}
        />
      </article>
      <article className="essentials__article">
        <Accordion
          type="text"
          title="Baccalauréat Général S - SVT"
          header="h4"
          datum={bacc}
          className={"essentials__article__accordion"}
        />
      </article>
    </>
  );
}

export default Education;
