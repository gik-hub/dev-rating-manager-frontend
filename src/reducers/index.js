import { combineReducers } from 'redux';
import createLFReducer from './createLFReducer';
import authReducer from './authReducer';
import getEngineersReducer from './getEngineers';
export default combineReducers({
    auth: authReducer,
    getEngineers: getEngineersReducer,
    createLF: createLFReducer,
});