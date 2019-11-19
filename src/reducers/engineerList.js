import {
  MY_ENGINEERS, REMOVE_ENGINEERS, REPLACE_ENGINEERS, SAVE_ENGINEERS, GET_USERS, ADD_ENGINEER, REDIRECT_USER,
} from '../actions/actionType';

const initialState = {
  engineers: [],
  removed: [],
  users: [],
  isLoggedOut: false,
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  let removed = [];
  let engineers = [];
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload };
    case MY_ENGINEERS:
      return { ...state, engineers: payload, removed };
    case REMOVE_ENGINEERS:
      engineers = state.engineers.filter((eng) => eng.id !== payload.id);
      removed = state.removed.concat([payload]);
      return { ...state, engineers, removed };
    case REPLACE_ENGINEERS:
      removed = state.removed.filter((eng) => eng.id !== payload.id);
      engineers = state.engineers.concat([payload]);
      return { ...state, engineers, removed };
    case SAVE_ENGINEERS:
      return { ...state, engineers: payload, removed };
    case ADD_ENGINEER:
      return state.engineers.some((eng) => parseInt(eng.id, 10) === parseInt(payload.id, 10))
        ? state
        : { ...state, engineers: [...state.engineers, payload] };
    case REDIRECT_USER:
      localStorage.removeItem('token');
      return { ...state, isLoggedOut: payload.isLoggedOut, removed };
    default:
      return state;
  }
};
