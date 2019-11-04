import * as types from '../actions/actionType';
import initialState from './initialState';

const ratingReducer = (state = initialState.myEngineers, action) => {
  switch (action.type) {
    case types.LOAD_ENGINEERS_SUCCESS:
      return action.engineers;
    default:
      return state;
  }
};

export default ratingReducer;
