import Accordion from "../../accordion/Accordion";
import "./resumeSkills.scss";

function ResumeSkills() {
  const skills = [
    "HTML, CSS, JavaScript",
    "React, Redux, Jest",
    "Git, GitHub",
    "VS Code, EsLint, Prettier",
    "Lightroom, Figma, Photoshop",
    "Word, Excel, Outlook, PowerPoint",
  ];
  const languages = [
    "Francais, Langue Maternelle",
    "Allemand, Bilingue",
    "Anglais, Courant",
  ];

  return (
    <>
      <article className="essentials__article">
        <Accordion
          type="text-list"
          datum={languages}
          title="Langues"
          header="h4"
        />
      </article>
      <article className="essentials__article">
        <Accordion type="text-list" datum={skills} title="IT" header="h4" />
      </article>
    </>
  );
}

export default ResumeSkills;
