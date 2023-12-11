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
      <section className="catalog__section --tertiaire">
        <h2 className="catalog__section__title">Tertiaire</h2>
        <ResumeArticle article={article1} />
        {/* <article className="catalog__section__group">
          <h3 className="catalog__section__group__title">Proxy Solicitation</h3>
          <div className="catalog__section__group__article">
            <h4 className="job-title">
              « Associate » Franco-Allemand-Anglais, D.F.King Ltd (Londres, GB){" "}
              <time>2015-2016</time>
            </h4>
            <p className="job-description">
              <ul>
                <li>
                  Analyser l&apos;ordre du jour et les documents
                  d&apos;assemblée générale en rapport avec les pratiques du
                  marché concerné/pays. S&apos;informer sur les pratiques et
                  changements de législation
                </li>
                <li>
                  Organisation de téléconférences, rédaction des rapports (EN,
                  FR) pour nos client
                </li>
              </ul>
            </p>
          </div>
        </article> */}
      </section>
      <section className="catalog__section --services">
        <h2 className="catalog__section__title">Restauration et Services</h2>
        <ResumeArticle article={article2} />
        {/* <article className="catalog__section__group">
          <h3 className="catalog__section__group__title">Boulangerie</h3>
          <div className="catalog__section__group__article">
            <h4 className="job-title">
              Vendeur / Cuiseur en Boulangerie (Saint Jean de Sixt, FR){" "}
              <time dateTime="2021-05">Mai 2021</time> à{" "}
              <time dateTime="2022-05">Mai 2022</time>
            </h4>
            <p className="job-description">
              <ul>
                <li>
                  Cuisson et préparation des produits, mise en rayon, gestion
                  des quantités de production en temps réel, inventaire, suivi
                  des DLC, accueil clientèle et vente, formation des recrue
                </li>
              </ul>
            </p>
          </div>
        </article> */}
      </section>
    </div>
  );
}

ResumeMajor.propTypes = {
  className: PropTypes.string,
};

export default ResumeMajor;
