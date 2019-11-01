import { combineReducers } from 'redux';
import EngineerReducer from "./EngineerReducer";
import getEngineersReducer from './getEngineers';

export default combineReducers({
 engineer: EngineerReducer,
 getEngineers: getEngineersReducer,
});