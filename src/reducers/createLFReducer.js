import { CREATE_LF, CREATE_LF_ERROR, CLEAR_DATA } from '../actions/actionType';
const initialState = {
    success: '',
    error: '',
};
const createLFReducer = (state = initialState, action) => {
 switch (action.type) {
   case CREATE_LF:
   return { ...state, success: action.response };
   case CREATE_LF_ERROR:
   return { ...state, error: action.response };
   case CLEAR_DATA:
   return initialState;
   default:
   return state;
 }
};
 export default createLFReducer;