import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ handleClick, children, ...props }) => {
  return (
    <button className="custom-btn" onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
