import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

function HelmetStructuredData(props) {
  const structuredData = props.structuredData;
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

HelmetStructuredData.propTypes = {
  structuredData: PropTypes.object.isRequired,
};

export default HelmetStructuredData;
