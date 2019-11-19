import { combineReducers } from 'redux';
import authReducer from './authReducer';
import engineersReducer from './engineerList';
import getEngineersReducer from './getEngineers';
import EngineerReducer from './EngineerReducer';
import fetchProfileReducer from './fetchProfileReducer';
import ratingReducer from './ratingReducer';
import createLFReducer from './createLFReducer';

export default combineReducers({
  auth: authReducer,
  getEngineers: getEngineersReducer,
  engineersReducer,
  engineer: EngineerReducer,
  ratings: ratingReducer,
  createLF: createLFReducer,
  profile: fetchProfileReducer,
});
