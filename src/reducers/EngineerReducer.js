import { FETCH_ENGINEER, FETCH_RATING } from '../actions/actionType';

const initialState = {
  user: {},
  average: [],
  ratings: [],
};

const EngineerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ENGINEER:
      return { ...state, user: payload };
    case FETCH_RATING:
      return { ...state, average: payload.average, ratings: payload.ratings  };
    default:
      return state;
  }
};

export default EngineerReducer;
