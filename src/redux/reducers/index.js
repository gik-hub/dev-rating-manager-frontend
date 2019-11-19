import { combineReducers } from 'redux';
import createLFReducer from './createLFReducer';
import authReducer from './authReducer';
import getEngineersReducer from './getEngineers';
import fetchProfileReducer from './fetchProfileReducer';
import ratingReducer from './ratingReducer';
import engineersReducer from './engineersReducer';
export default combineReducers({
    auth: authReducer,
    getEngineers: getEngineersReducer,
    createLF: createLFReducer,
    profile: fetchProfileReducer,
    engineers: engineersReducer,
    ratings: ratingReducer
});
