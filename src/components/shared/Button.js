import React from "react";
import PropTypes from "prop-types";

const Button = ({ value }) => {
  return <button type="submit" value={value} className="form-button">{value}</button>;
};
Button.propTypes = {
  value: PropTypes.string.isRequired
};
export default Button;
