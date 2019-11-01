import axios from 'axios';

const baseUrl = 'http://dev-rating-manager-staging.herokuapp.com';

export default function getUsersApi(token) {
  return axios.get(`${baseUrl}/api/v1/users/all`, { // change the url
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
  }).then((response) => response).catch((error) => { throw (error); });
}
