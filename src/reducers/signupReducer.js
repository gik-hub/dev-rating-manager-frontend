import { ADD_USER } from '../actions/actionType';
const initialState = {
   "user": {},
   'errors':{}
};
const signupReducer = (state = initialState, action) => {
 switch (action.type) {
   case ADD_USER:
   return { ...state, user: action.payload.user };
   default:
   return state;
 }
};
 export default signupReducer;