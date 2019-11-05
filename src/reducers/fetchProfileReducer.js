import { FETCH_PROFILE, FETCH_PROFILE_ERROR } from '../actions/actionType';
const initialState = {
    success: '',
    error: '',
};
const fetchProfileReducer = (state = initialState, action) => {
 switch (action.type) {
   case FETCH_PROFILE:
   return { ...state, success: action.response };
   case FETCH_PROFILE_ERROR:
   return { ...state, error: action.response };
   default:
   return state;
 }
};
 export default fetchProfileReducer;