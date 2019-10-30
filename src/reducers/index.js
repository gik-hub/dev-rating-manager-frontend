import { combineReducers } from 'redux';
import authReducer from './authReducer';
import getEngineersReducer from './getEngineers';
export default combineReducers({
    auth: authReducer,
    getEngineers: getEngineersReducer,
});