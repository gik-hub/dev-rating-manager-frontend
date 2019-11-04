import { GET_ENGINEERS } from './actionType';
import axios from 'axios';

<<<<<<< HEAD
<<<<<<< HEAD
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsImdvb2dsZUlkIjoiMTA4MjgyNzkxNzkxNDk1MjMxNzk2IiwiZmlyc3ROYW1lIjoiQW1pbHkiLCJsYXN0TmFtZSI6Ikthc3NpbSIsImVtYWlsIjoiYW1pbHkua2Fzc2ltQGFuZGVsYS5jb20iLCJyb2xlIjoiTEYiLCJjcmVhdGVkQXQiOiIyMDE5LTExLTAxVDEwOjE4OjU5Ljk1MloiLCJ1cGRhdGVkQXQiOiIyMDE5LTExLTAxVDEwOjE4OjU5Ljk1MloiLCJpYXQiOjE1NzI2MDQwMDksImV4cCI6MTU3MjY5MDQwOX0.szInQ_Lb2IWDlwT4Y3Tzr5hAMonuwaQYJbF0VFCNvI8'
// const token = window.localStorage.getItem('pulseToken');
// console.log('the token is : ', token);

export const getEngineers = data => (dispatch) => {
    axios.get('https://dev-rating-manager-staging.herokuapp.com/api/v1/ratings', { // change the url
=======
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZ29vZ2xlSWQiOiIxMDgyODI3OTE3OTE0OTUyMzE3OTYiLCJmaXJzdE5hbWUiOiJBbWlseSIsImxhc3ROYW1lIjoiS2Fzc2ltIiwiZW1haWwiOiJhbWlseS5rYXNzaW1AYW5kZWxhLmNvbSIsInJvbGUiOiJMRiIsImNyZWF0ZWRBdCI6IjIwMTktMTAtMzBUMTM6MTY6NTYuNTk0WiIsInVwZGF0ZWRBdCI6IjIwMTktMTAtMzBUMTM6MTY6NTYuNTk0WiIsImlhdCI6MTU3MjQ0MTg3NiwiZXhwIjoxNTcyNTI4Mjc2fQ.Yd4sj_Har0clPMk6boyLih79m8SkNWN5NAUgVH_f3E4';

export const getEngineers = data => (dispatch) => {
    axios.get('http://localhost:3000/api/v1/ratings', { // change the url
>>>>>>> ft(get-all-engineers): as an LF I should be able to get all enginee
=======
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsImdvb2dsZUlkIjoiMTA4MjgyNzkxNzkxNDk1MjMxNzk2IiwiZmlyc3ROYW1lIjoiQW1pbHkiLCJsYXN0TmFtZSI6Ikthc3NpbSIsImVtYWlsIjoiYW1pbHkua2Fzc2ltQGFuZGVsYS5jb20iLCJyb2xlIjoiTEYiLCJjcmVhdGVkQXQiOiIyMDE5LTExLTAxVDEwOjE4OjU5Ljk1MloiLCJ1cGRhdGVkQXQiOiIyMDE5LTExLTAxVDEwOjE4OjU5Ljk1MloiLCJpYXQiOjE1NzI2MDQwMDksImV4cCI6MTU3MjY5MDQwOX0.szInQ_Lb2IWDlwT4Y3Tzr5hAMonuwaQYJbF0VFCNvI8';

export const getEngineers = data => (dispatch) => {
    axios.get('https://dev-rating-manager-staging.herokuapp.com/api/v1/ratings', { // change the url
>>>>>>> Updated routes
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
<<<<<<< HEAD
<<<<<<< HEAD
            'Access-Control-Allow-Origin': 'https://dev-rating-manager-staging.herokuapp.com',
=======
            'Access-Control-Allow-Origin': 'http://localhost:3000',
>>>>>>> ft(get-all-engineers): as an LF I should be able to get all enginee
=======
            'Access-Control-Allow-Origin': 'https://dev-rating-manager-staging.herokuapp.com',
>>>>>>> Updated routes
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data),
    }).then((response) => {
<<<<<<< HEAD
        console.log('the response is : ', response);
=======
>>>>>>> ft(get-all-engineers): as an LF I should be able to get all enginee
        dispatch({
            type: GET_ENGINEERS,
            payload: response,
        });
<<<<<<< HEAD
    }).catch(error => console.log('the response is : ', error));
=======
    }).catch(error => error);
>>>>>>> ft(get-all-engineers): as an LF I should be able to get all enginee
};