import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt || "image"} {...props} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
