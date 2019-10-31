import React from 'react';
import '../../styles/ratings.scss';
import PropTypes from 'prop-types';
import { handleError } from '../../api/apiUtils';

const RateForm = ({ onSave, rating, onChange }) => {
  const rateSpec = [
    'quality',
    'quantity',
    'Professionalisim',
    'communication',
    'integration',
    'initiative'
  ];
 

  return (
    <div className="wrapper">
      <div className="flex-parent">
        {rateSpec.map(rate => (
          <CategoryElement key={rate} category={rate} onChange={onChange}/>
        ))}
      </div>
      <button className='rate-btn' onClick={ () => onSave }> Rate </button>
    </div>
  );
};

const CategoryElement = ({ category, onChange }) => {
  return (
    <div className="rate-editor">
      <h5>{category}</h5>
      <select name={category} onChange={onChange}>

        <option disabled selected>
          Select Rating
        </option>

        <option value="2">Very satisfied (2) </option>
        <option value="1">Satisfied (1)</option>
        <option value="0">Neutral (0)</option>
        <option value="-1">Unsatisfied (-1) </option>
        <option value="-2">Very Unsatisfied (-2) </option>

      </select>
      <textarea rows="5" cols="26" id="message" name="message" onChange={onChange}></textarea>
    </div>
  );
};

RateForm.propTypes = {
  rating: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
}

console.log(RateForm.PropTypes);


export default RateForm;
