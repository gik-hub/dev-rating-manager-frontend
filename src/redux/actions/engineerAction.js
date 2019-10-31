import * as types from './actionType';
import { beginApiCall, apiCallError } from './apiStatusAction';
import * as ratingApi from '../../api/rateApi';
import { myEngineers } from '../../__mocks__/mockData';

// actions creator => this is what is dispatched
export const rateEngineerSuccess = savedRatings => {
  return { type: types.RATE_ENGINEER_SUCCESS, savedRatings };
};

export const loadEngineersSuccess = engineers => {
  return { type: types.LOAD_ENGINEERS_SUCCESS, engineers };
};

// THUNKS DISPATCH
// export const loadEngineers = () => {
//   return dispatch => {
//     dispatch(beginApiCall());
//     return ratingApi
//       .getMyEngineers()
//       .then(engineers => dispatch(loadEngineersSuccess(engineers)))
//       .catch(error => alert(`Fetch Failed ${error}`));
//   };
// };

export const loadEngineers = () => {
  return dispatch => {
    return dispatch(loadEngineersSuccess(myEngineers));
  };
};

// make a thunk to dispatch the RATE_ENGINEER action after hitting the rating API
export const rateEngineer = ratings => {
  return dispatch => {
    dispatch(beginApiCall());
    return ratingApi
      .rateEngineer(ratings)
      .then(savedRatings => dispatch(rateEngineerSuccess(savedRatings)))
      .catch(error => dispatch(apiCallError(error)));
  };
};
