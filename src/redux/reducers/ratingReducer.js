import * as types from '../actions/actionType';
import initialState from './initialState';

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_ENGINEERS_SUCCESS:
      return { ...state, myEngineers: action.engineers };
    case types.RATE_ENGINEER_SUCCESS:
      return [...state.ratings, { ...action.savedRatings }];
    default:
      return state;
  }
};

export default ratingReducer;
