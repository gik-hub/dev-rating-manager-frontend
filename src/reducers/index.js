import { combineReducers } from 'redux';
import signupReducer from '../redux/reducers/signupReducer';
import getEngineersReducer from './getEngineers';
export default combineReducers({
    signup: signupReducer,
    getEngineers: getEngineersReducer,
});