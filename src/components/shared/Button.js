import React from "react";
import PropTypes from "prop-types";

const Button = ({ value }) => {
  return <input type="submit" value={value} className="form-button" />;
};
Button.propTypes = {
  value: PropTypes.string.isRequired
};
export default Button;
