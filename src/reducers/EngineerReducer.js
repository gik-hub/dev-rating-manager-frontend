import { FETCH_ENGINEER } from '../actions/actionType';

const initialState = {
    "departments":[],
    'errors':{}
};

const EngineerReducer = (state = initialState, action) => {
    console.log(action);

  switch (action.type) {
    case FETCH_ENGINEER:
    return { ...state, departments: action.payload };
    default:
    return state;
  }
};

  export default EngineerReducer;