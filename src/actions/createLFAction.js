import db from '../config/dbCall';
import { CREATE_LF, CREATE_LF_ERROR, CLEAR_DATA } from './actionType';

export const createLF = data => async (dispatch) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('pulseToken')}`,
            }
        }
        const response = await db.patch('/users/make-lf', data, config)
        dispatch({
            type: CREATE_LF,
            response: response.data.message,
        });
    } catch(error) {
        dispatch({
            type: CREATE_LF_ERROR,
            response: error.response.data.message,
        });
    } 
   };
   
export const clearData = () => (dispatch) => {
    dispatch({
        type: CLEAR_DATA
    })
}
