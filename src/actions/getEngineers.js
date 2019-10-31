import axios from 'axios';
import { GET_ENGINEERS } from './actionType';

const token = localStorage.getItem('pulseToken');

export const getEngineerss = (data) => (dispatch) => {
  axios.get('https://dev-rating-manager-staging.herokuapp.com/api/v1/ratings', { // change the url
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://dev-rating-manager-staging.herokuapp.com',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data),
  }).then((response) => {
    dispatch({
      type: GET_ENGINEERS,
      payload: response,
    });
  }).catch((error) => console.log('the response is : ', error));
};

export const getEngineers = () => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTgsImdvb2dsZUlkIjoiMTA4OTQ2NTc3OTA4MTE0ODIxNTM5IiwiZmlyc3ROYW1lIjoiRGF2aXMiLCJsYXN0TmFtZSI6IkthYmlzd2EiLCJlbWFpbCI6ImRhdmlzLmthYmlzd2FAYW5kZWxhLmNvbSIsInJvbGUiOiJMRiIsImNyZWF0ZWRBdCI6IjIwMTktMTAtMzFUMDk6NDE6NDIuNTE3WiIsInVwZGF0ZWRBdCI6IjIwMTktMTAtMzFUMDk6NDE6NDIuNTE3WiIsImlhdCI6MTU3Mjg1NTIyOSwiZXhwIjoxNTcyOTQxNjI5fQ.9qrSCUdqrj7gRJtnDQoxlWSsHen4ZbZGUjCJYiNJg5g`,
    },
  };
  console.log(token)
  axios.get('https://dev-rating-manager-staging.herokuapp.com/api/v1/ratings', config).then((response) => {
    dispatch({
      type: GET_ENGINEERS,
      payload: response,
    });
  }).catch((error) => console.log('the response is : ', error));
};
