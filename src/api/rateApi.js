import { handleResponse, handleError } from './apiUtils';
import axios from 'axios';

const baseUrl = 'http://dev-rating-manager-staging.herokuapp.com';

export const getMyEngineers = () => {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
};


export const rateEngineer = data =>{
    const token = localStorage.getItem('pulseToken');
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios.post('https://dev-rating-manager-staging.herokuapp.com/api/v1/ratings/rate', data);
};
