import * as types from '../actions/actionType';
import initialState from './initialState';

const ratingReducer = (state = initialState.ratings, action) => {
  switch (action.type) {
    case types.RATE_ENGINEER_SUCCESS:
      debugger;
      return [...state, { ...action.savedRatings }];
    case types.UPDATE_RATING_SUCCESS:
      return state.map(rating =>
        rating.id === action.newRating.id ? action.newRating : rating
      );
    default:
      return state;
  }
};

export default ratingReducer;
