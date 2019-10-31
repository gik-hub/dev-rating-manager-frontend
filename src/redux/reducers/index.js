import { combineReducers } from 'redux';
import authReducer from './authReducer';
import getEngineersReducer from './getEngineers';
export default combineReducers({
    auth: authReducer,
    getEngineers: getEngineersReducer,
});

// import signupReducer from './signupReducer';
// import ratingReducer from './ratingReducer';

// export default combineReducers({
//  signup: signupReducer,
//  engineers: ratingReducer
// });