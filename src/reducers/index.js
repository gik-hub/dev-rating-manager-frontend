import { combineReducers } from 'redux';
import authReducer from './authReducer';
import engineersReducer from './engineerList';

export default combineReducers({
  auth: authReducer,
  engineersReducer,
});
