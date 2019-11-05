import fetchProfileReducer from '../fetchProfileReducer';
import { FETCH_PROFILE, FETCH_PROFILE_ERROR } from '../../actions/actionType';

const successMessage = 'Success';
const errorMessage = 'Error';
const initialState = {
    success: '',
    error: '',
};

describe('Create LF reducer', () => {
    it('should test successful LF creation', () => {
        const response = fetchProfileReducer(initialState, {
            type: FETCH_PROFILE,
            response: successMessage
        })
        expect(response).toEqual({
            success: successMessage,
            error: ''
        })
    })
    it('should test unsuccessful LF creation', () => {
        const response = fetchProfileReducer(initialState, {
            type: FETCH_PROFILE_ERROR,
            response: errorMessage
        })
        expect(response).toEqual({
            success: '',
            error: errorMessage
        })
    })
})