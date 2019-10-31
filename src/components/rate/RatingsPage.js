import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  rateEngineer,
  loadEngineers
} from '../../redux/actions/engineerAction';
import { newRating } from '../../__mocks__/mockData';
import EngeneerList from './EngeneerList';
import RatingForm from './RateForm';

const RatingsPage = ({
  rateEngineer,
  loadEngineers,
  myEngineers,
  ...props
}) => {
  
  const [rating, setRating] = useState({ ...props.rating });
  const [savingRating, setsavingRating] = useState(false);

  useEffect( () => {
      if (myEngineers.length === 0) {
        loadEngineers();
      }
      // Array of item to watch => rereun if anything in this array change
    },[] );

    const handleChange = (event) => {
      alert('chaged')
      console.log(event);
      
    }

  function handleSave(event) {
    alert('clicked')
    console.log('-------> ', event);
    
    event.preventDefault();
    setsavingRating(true);
    rateEngineer(rating);
  }

  return (
    <>
      <h2> Rate Engineer </h2>
      <EngeneerList engineers={myEngineers} onRateClick={rateEngineer} /> 
      <RatingForm onSave={handleSave} onChange={handleChange} rating={rating}/>
    </>
  );
};

RatingsPage.propTypes = {
  rating: PropTypes.object.isRequired,
  myEngineers: PropTypes.array.isRequired,
  rateEngineer: PropTypes.func.isRequired,
  loadEngineers: PropTypes.func.isRequired
};

const mapStateToProps = ({ engineers }, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    rating: newRating,
    myEngineers: engineers.myEngineers
  };
};

const mapDispatchToProps = { rateEngineer, loadEngineers };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingsPage);
