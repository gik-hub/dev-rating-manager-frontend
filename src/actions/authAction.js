import { AUTH_USER, AUTH_ERROR } from './actionType';

export const authUser = (data) => (dispatch) => {
  if (data.status === 200) {
    dispatch({
      type: AUTH_USER,
      payload: data.data,
    });
  } else {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        message: data.message,
        error: data.error,
      },
    });
  }
};
