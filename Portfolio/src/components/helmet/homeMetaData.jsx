import HelmetMetaData from "../../utils/helpers/helmet/helmetMetaData";

/* <!-- summary_large_image -->
    <!-- <meta property="og:image" content="" /> -->
    <!-- <meta name="twitter:image" content="" /> -->
*/
//TODO: add image for og:image and twitter:image
//TODO: not working with crawkers??? Why?
function HomeMetaData() {
  return (
    <HelmetMetaData
      title="Portfolio of Barthélémy Werlé || Front-end Web Developer"
      description="Portfolio website displaying web-development projects, main skills, and a resume."
      ogtype="website"
      xtype="summary"
      name="Barthélémy Werlé"
    >
      <meta property="og:locale" content="fr_FR" />
      <meta
        property="og:url"
        content="https://evivnotrub.github.io/Portfolio/"
      />
      <meta property="og:site_name" content="Portfolio - Barthélémy Werlé" />
      <meta name="twitter:site" content="@B2Werle" />
      <meta name="twitter:creator" content="@B2Werle" />
    </HelmetMetaData>
  );
}

export default HomeMetaData;
