import db from '../config/dbCall';
import { CREATE_LF, CREATE_LF_ERROR, CLEAR_DATA } from './actionType';

export const createLF = data => async (dispatch) => {
    try {
        const config = {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ29vZ2xlSWQiOiIxMDc2MjAwMTI3NDE0MDU5Njg4MzciLCJmaXJzdE5hbWUiOiJTdXBlciIsImxhc3ROYW1lIjoiTEYiLCJlbWFpbCI6Im1hcnZlbGRldjUzQGdtYWlsLmNvbSIsInJvbGUiOiJTdXBlciBMRiIsImNyZWF0ZWRBdCI6IjIwMTktMTAtMjFUMTI6MTI6MTIuNDgyWiIsInVwZGF0ZWRBdCI6IjIwMTktMTAtMjFUMTI6MTI6MTIuNDgyWiIsImlhdCI6MTU3MjUzMDM1NSwiZXhwIjoxNTcyNjE2NzU1fQ.35gGu3EQz6LJ7g7-6To3nZpuMG4wav_1dqAt-buUqt0',
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