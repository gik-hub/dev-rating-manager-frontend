import { RATE_ENGINEER_SUCCESS, UPDATE_RATING_SUCCESS } from '../actions/actionType';

const initialState = {
  myEngineers: [],
  ratings: []
}

const ratingReducer = (state = initialState.ratings, action) => {
  switch (action.type) {
    case RATE_ENGINEER_SUCCESS:
      debugger;
      return [...state, { ...action.savedRatings }];
    case UPDATE_RATING_SUCCESS:
      return state.map(rating =>
        rating.id === action.newRating.id ? action.newRating : rating
      );
    default:
      return state;
  }
};

export default ratingReducer;
