import "./resumeSkills.scss";

function ResumeSkills() {
  return (
    <>
      <article className="essentials__article">
        <h4 className="essentials__article__title">Langues</h4>
        <ul>
          <li>Francais, Langue Maternelle</li>
          <li>Allemand, Bilingue</li>
          <li>Anglais, Courant</li>
        </ul>
      </article>
      <article className="essentials__article">
        <h4 className="essentials__article__title">IT:</h4>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Redux, Jest</li>
          <li>Git, GitHub</li>
          <li>VS Code, EsLint, Prettier</li>
          <li>Lightroom, Figma, Photoshop</li>
          <li>Word, Excel, Outlook, PowerPoint</li>
        </ul>
      </article>
    </>
  );
}

export default ResumeSkills;
