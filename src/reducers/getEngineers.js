import { GET_ENGINEERS } from '../actions/actionType';
const initialState = {
    "engineers": [],
    'errors': {}
};
const getEngineersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ENGINEERS:
            return { ...state, engineers: action.payload.data.data };
        default:
            return state;
    }
};
export default getEngineersReducer;