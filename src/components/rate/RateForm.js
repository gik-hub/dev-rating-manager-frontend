import React from 'react';
import '../../styles/ratings.scss';
import PropTypes from 'prop-types';
import { handleError } from '../../api/apiUtils';

const RateForm = ({ onRate, rating, onChange }) => {
  console.log('rating passed to save',rating);
  const rateSpec = [
    'quality',
    'quantity',
    'professionalism',
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

      <button type="submit" className='rate-btn' onClick={onRate}> Rate </button>

    </div>
  );
};

const CategoryElement = ({ category, onChange }) => {
  return (
    <div className="rate-editor">
      <h5>{category}</h5>
      <select id="rate" name={category} onChange={onChange}>
        <option value="null">Select Rating </option>
        <option value={2}>Very satisfied (2) </option>
        <option value={1}>Satisfied (1)</option>
        <option value={0}>Neutral (0)</option>
        <option value={-1}>Unsatisfied (-1) </option>
        <option value={-2}>Very Unsatisfied (-2) </option>
      </select>
      <textarea rows="5" cols="26" id="feedback" name={category} onChange={onChange}></textarea>
    </div>
  );
};

RateForm.propTypes = {
  rating: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRate: PropTypes.func.isRequired
}

CategoryElement.propTypes = {
  category: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired

}

export default RateForm;
