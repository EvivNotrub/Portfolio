import { Helmet } from "react-helmet";
import { PropTypes } from "prop-types";

function HelmetMetaData({
  title,
  description,
  ogtype,
  url,
  xtype,
  name,
  img,
  imgAlt,
  children,
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={name} />
      <meta property="og:type" content={ogtype} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={img} />
      <meta property="og:image:alt" content={imgAlt} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={xtype} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <meta name="twitter:image:alt" content={imgAlt} />

      {children}
    </Helmet>
  );
}

HelmetMetaData.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ogtype: PropTypes.string,
  url: PropTypes.string,
  xtype: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  children: PropTypes.node,
};

export default HelmetMetaData;
