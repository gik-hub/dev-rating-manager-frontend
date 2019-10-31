import { handleResponse, handleError } from './apiUtils';
import axios from 'axios';
const baseUrl = process.env.API_URL;

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsImdvb2dsZUlkIjoiMTA4MjgyNzkxNzkxNDk1MjMxNzk2IiwiZmlyc3ROYW1lIjoiQW1pbHkiLCJsYXN0TmFtZSI6Ikthc3NpbSIsImVtYWlsIjoiYW1pbHkua2Fzc2ltQGFuZGVsYS5jb20iLCJyb2xlIjoiTEYiLCJjcmVhdGVkQXQiOiIyMDE5LTExLTAxVDEwOjE4OjU5Ljk1MloiLCJ1cGRhdGVkQXQiOiIyMDE5LTExLTAxVDEwOjE4OjU5Ljk1MloiLCJpYXQiOjE1NzI2MDQwMDksImV4cCI6MTU3MjY5MDQwOX0.szInQ_Lb2IWDlwT4Y3Tzr5hAMonuwaQYJbF0VFCNvI8';


export const getMyEngineers = () => {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
};


  export const rateEngineer = data =>{
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios.post('https://dev-rating-manager-staging.herokuapp.com/api/v1/ratings/rate', data);
};
