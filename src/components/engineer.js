import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.scss';

function btnClasses(btnClass) {
  return `btn btn-smallest ${btnClass}`;
}

function mainClasses(mainClass) {
  return `engineer ${mainClass}`;
}

const Engineer = ({
  value,
  onDelete,
  engineer,
  btnClass,
  mainClass,
}) => (

  <div className={mainClasses(mainClass)}>
    <button onClick={() => onDelete(engineer)} className={btnClasses(btnClass)} type="button">{value}</button>
    <p>
      {engineer.name}
    </p>
  </div>
);


Engineer.propTypes = {
  engineer: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  mainClass: PropTypes.string,
};
Engineer.defaultProps = {
  btnClass: '',
  mainClass: '',
};

export default Engineer;
