import createLFReducer from '../createLFReducer';
import { CLEAR_DATA, CREATE_LF_ERROR, CREATE_LF } from '../../actions/actionType';

const successMessage = 'Successfully created LF';
const errorMessage = 'User not found';
const initialState = {
    success: '',
    error: '',
};

describe('Create LF reducer', () => {
    it('should test successful LF creation', () => {
        const response = createLFReducer(initialState, {
            type: CREATE_LF,
            response: successMessage
        })
        expect(response).toEqual({
            success: successMessage,
            error: ''
        })
    })
    it('should test unsuccessful LF creation', () => {
        const response = createLFReducer(initialState, {
            type: CREATE_LF_ERROR,
            response: errorMessage
        })
        expect(response).toEqual({
            success: '',
            error: errorMessage
        })
    })
    it('should test clearing data', () => {
        const response = createLFReducer(initialState, {
            type: CLEAR_DATA
        })
        expect(response).toEqual(initialState)
    })
})