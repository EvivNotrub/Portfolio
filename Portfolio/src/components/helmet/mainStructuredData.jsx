import HelmetStructuredData from "../../utils/helpers/helmet/helmetStructuredData";

function MainStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Portfolio of Barthélémy Werlé - Web Developer",
    url: "https://evivnotrub.github.io/Portfolio/",
    description:
      "Portfolio website of Barthélémy Werlé displaying web-development projects, main skills, and a resume.",
    author: {
      "@type": "Person",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Annemasse",
        addressRegion: "Auvergne-Rhône-Alpes",
        postalCode: "74100",
      },
      jobTitle: "Front-End Web Developer",
      name: "Barthélémy Werlé",
      telephone: "+33 (0)7 67 88 78 84",
      sameAs: "https://www.linkedin.com/in/barthelemy-werle-b93769128/",
      alumniOf: [
        {
          "@type": "OrganizationRole",
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "OpenClassrooms",
            sameAs: "https://openclassrooms.com/",
          },
          startDate: "2023",
        },
        {
          "@type": "OrganizationRole",
          alumniOf: {
            "@type": "HighSchool",
            name: "Lycée Jean Renoir de Munich",
          },
          startDate: "2008",
        },
      ],
    },
  };

  return <HelmetStructuredData structuredData={structuredData} />;
}
export default MainStructuredData;
