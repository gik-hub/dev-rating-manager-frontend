import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  rateEngineer,
  loadEngineers
} from '../../redux/actions/engineerAction';
import { newRating } from '../../__mocks__/mockData';
import EngeneerList from './EngeneerList';
import RatingForm from './RateForm';

const RatingsPage = ({
  loadEngineers,
  myEngineers,
  loadRatings,
  ratings,
  ...props
}) => {
  const [rating, setRating] = useState({ ...props.rating });
  const [savingRating, setsavingRating] = useState(false);

  useEffect(() => {
    if (myEngineers.length === 0) {
      loadEngineers();
      // loadEngineers().catch(error => {
      //   alert('Loading ratings failed' + error);
      // });
    }
    if (ratings.length === 0) {
      console.log('no ratings in redux store found');
      // loadRatings().catch(error => {
      //   alert('Loading ratings failed' + error);
      // });
    }
    // Array of item to watch => rereun if anything in this array change
  }, []);

  return (
    <>
      <>
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-course"
          onClick={ console.log('clicked') }
        >
          Rate Engineer
        </button>

      </>
      <h2> Rate Engineer </h2>
      <EngeneerList engineers={myEngineers} />
    </>
  );
};

RatingsPage.propTypes = {
  rating: PropTypes.object.isRequired,
  myEngineers: PropTypes.array.isRequired,
  loadEngineers: PropTypes.func.isRequired
};

const mapStateToProps = ({ engineers, ratings }) => {
  return {
    rating: newRating,
    ratings: ratings,
    myEngineers: engineers
  };
};

const mapDispatchToProps = { loadEngineers };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingsPage);
