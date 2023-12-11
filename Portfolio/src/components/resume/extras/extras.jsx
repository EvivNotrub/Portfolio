import Accordion from "../../accordion/Accordion";
import "./extras.scss";

function Extras() {
  const voyages = [
    "été 2020: Voyage à VTT dans les Pyrénées en autonomie (France et Catalogne).",
    "été 2018: permis de conduire puis voyage en fiat panda 1985 de Berlin à Istanbul: découverte des pays, cultures et paysages",
    "été 2012 à fin 2013: De l'Allemagne jusqu'au Ladakh (Inde, Himalaya) en stop puis en bus et finalement à vélo.",
  ];

  const hobbies = [
    "VTT - Vélo de route",
    "Randonnées - Trekking - Ski de randonnée",
    "Escalade - Bloc",
    "Photographie, Guitare",
  ];

  return (
    <>
      <article className="essentials__article">
        <Accordion
          type="text-list"
          title="Voyages"
          header="h4"
          datum={voyages}
          className={"essentials__article__accordion"}
        />
      </article>
      <article className="essentials__article">
        <Accordion
          type="text-list"
          title="Hobbies"
          header="h4"
          datum={hobbies}
          className={"essentials__article__accordion"}
        />
      </article>
    </>
  );
}

export default Extras;
