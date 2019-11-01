import { FETCH_ENGINEER } from './actionType';

const baseurl = 'localhost:3000/api/v1'

export const fetchEngineer = (url, id = `${baseurl}/users/${id}`) => dispatch => fetch(url, {
  method: 'GET',
})
  .then(res => res.json())
  .then(data => dispatch({
    type: FETCH_ENGINEER,
    payload: data,
  }));