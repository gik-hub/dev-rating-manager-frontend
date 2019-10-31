import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  rateEngineer,
  loadEngineers
} from '../../redux/actions/engineerAction';
import { newRating } from '../../__mocks__/mockData';
import RatingForm from './RateForm';

const ManageRatingsPage = ({
  rateEngineer,
  loadEngineers,
  // myEngineers,
  // ratings,
  history,
  ...props
}) => {
  // set come local states e.g. rating before we save it
  const [rating, setRating] = useState({ ...props.rating });
  const [savingRating, setsavingRating] = useState(false);

  // useEffect(() => {
  //   if (myEngineers.length === 0) {
  //     loadEngineers();
  //   }
  //   // Array of item to watch => rereun if anything in this array change
  // }, []);

  const handleChange = event => {
    if (event.target.id === 'rate') {
      setRating({
        ...rating,
        [event.target.name]: {
          rate: parseInt(event.target.value),
          feedback: rating[event.target.name].feedback
        }
      });
    }
    if (event.target.id === 'feedback') {
      setRating({
        ...rating,
        [event.target.name]: {
          feedback: event.target.value,
          rate: rating[event.target.name].rate
        }
      });
    }
  };

  function handleRateSave(event) {
    event.preventDefault();
    debugger;

    // set the local state to savingRating
    setsavingRating(true);
    // rating is the local state being set locally above
    rateEngineer(rating);
    console.log('rating to save', rating);
    history.push('/')
  }

  return (
    <RatingForm
      // engineers={myEngineers}
      onRate={handleRateSave}
      onChange={handleChange}
      rating={rating}
    />
  );
};

ManageRatingsPage.propTypes = {
  rating: PropTypes.object.isRequired,
  // ratings: PropTypes.array.isRequired,
  // myEngineers: PropTypes.array.isRequired,
  rateEngineer: PropTypes.func.isRequired,
  loadEngineers: PropTypes.func.isRequired
};

export function getEngineerById(myEngineers, id) {
    return myEngineers.find(engineer => engineer.id === id) || null;
  }

const mapStateToProps = ({ engineers, ratings }, ownProps) => {
  const engId = ownProps.match.params.engId;
  return {
    rating: {...newRating, user: engId},
    myEngineers: engineers,
    ratings
  };
};

const mapDispatchToProps = { rateEngineer, loadEngineers };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageRatingsPage);
