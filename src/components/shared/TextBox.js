import React from "react";
import PropTypes from "prop-types";

const TextBox = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <div className="form-fieldset">
      <label>{label}</label>
      <span className="important">*</span>
      <input
        type={type}
        className="form-textbox"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
TextBox.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
};
TextBox.defaultProps = {
  type: "text"
};
export default TextBox;
