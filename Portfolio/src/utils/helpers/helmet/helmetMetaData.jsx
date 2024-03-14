import { Helmet } from "react-helmet-async";
import { PropTypes } from "prop-types";

function HelmetMetaData({ title, description, ogtype, xtype, name, children }) {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={name} />
      <meta property="og:type" content={ogtype} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={xtype} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {children}
    </Helmet>
  );
}

HelmetMetaData.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ogtype: PropTypes.string,
  xtype: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
};

export default HelmetMetaData;
