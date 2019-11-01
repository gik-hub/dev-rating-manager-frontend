import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import EngineerReducer from "./EngineerReducer";
export default combineReducers({
 signup: signupReducer,
 engineer: EngineerReducer
});