import { AUTH_USER, AUTH_ERROR } from '../actions/actionType';

const initialState = {
  user: {},
  errors: {},
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, user: action.payload };
    case AUTH_ERROR:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};
export default authReducer;
