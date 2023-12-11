import { PropTypes } from "prop-types";
import "./resumeMajor.scss";
import ResumeArticle from "../../../components/resume/resumeArticle/resumeArticle";

function ResumeMajor({ className }) {
  const article1 = {
    title: "Proxy Solicitation",
    jobs: [
      {
        id: "s12fs51g2",
        title:
          "« Associate » Franco-Allemand-Anglais, D.F.King Ltd (Londres, GB)",
        dates: {
          start: "2015",
          end: "2016",
        },
        description: [
          {
            id: "d5fg13b53",
            text: "Analyser l'ordre du jour et les documents d'assemblée générale en rapport avec les pratiques du marché concerné/pays. S'informer sur les pratiques et changements de législation",
          },
          {
            id: "6s8dfs864",
            text: "Organisation de téléconférences, rédaction des rapports (EN, FR) pour nos client",
          },
        ],
      },
    ],
  };
  const article2 = {
    title: "Boulangerie",
    jobs: [
      {
        id: "687f1s53g",
        title: "Vendeur / Cuiseur en Boulangerie (Saint Jean de Sixt, FR)",
        dates: {
          start: "2021-05",
          end: "2022-05",
        },
        description: [
          {
            id: "8gs4df15vc4g8",
            text: "Cuisson et préparation des produits, mise en rayon, gestion des quantités de production en temps réel, inventaire, suivi des DLC, accueil clientèle et vente, formation des recrue",
          },
        ],
      },
    ],
  };
  return (
    <div className={(className && className) + " " + "catalog"}>
      <h2>Expérience professionnelle</h2>
      <section className="catalog__section --tertiaire">
        <h3 className="catalog__section__title">Tertiaire</h3>
        <ResumeArticle article={article1} />
      </section>
      <section className="catalog__section --services">
        <h3 className="catalog__section__title">Restauration et Services</h3>
        <ResumeArticle article={article2} />
      </section>
    </div>
  );
}

ResumeMajor.propTypes = {
  className: PropTypes.string,
};

export default ResumeMajor;
