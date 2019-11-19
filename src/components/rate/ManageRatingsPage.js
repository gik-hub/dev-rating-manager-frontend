import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  rateEngineer
} from '../../actions/engineerAction';
import { newRating } from '../../__mocks__/mockData';
import RatingForm from './RateForm';

const ManageRatingsPage = ({
  rateEngineer,
  myEngineers,
  history,
  ...props
}) => {
  // set come local states e.g. rating before we save it
  const [rating, setRating] = useState({ ...props.rating });
  const [savingRating, setsavingRating] = useState(false);

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
    // set the local state to savingRating
    setsavingRating(true);
    // rating is the local state being set locally above
    rateEngineer(rating);
    console.log('rating to save', rating);
    history.push('/')
  }

  const endineerId = parseInt(rating.user, 10);
  const engineer = getEngineerById(myEngineers, endineerId);
  const name = `${engineer.User.firstName} ${engineer.User.lastName}`;

  return (
    <RatingForm
      engineer={name}
      onRate={handleRateSave}
      onChange={handleChange}
      rating={rating}
    />
  );
};

ManageRatingsPage.propTypes = {
  rating: PropTypes.object.isRequired,
  // ratings: PropTypes.array.isRequired,
  myEngineers: PropTypes.array.isRequired,
  rateEngineer: PropTypes.func.isRequired,
};

const getEngineerById = (myEngineers, id) => {
    return myEngineers.find(engineer => engineer.user === id);
}

const mapStateToProps = ({ getEngineers, ratings }, ownProps) => {
  const engId = ownProps.match.params.engId;
  return {
    rating: {...newRating, user: engId},
    myEngineers: getEngineers.engineers,
    ratings
  };
};

const mapDispatchToProps = { rateEngineer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageRatingsPage);
