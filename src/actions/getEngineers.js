import { GET_ENGINEERS } from './actionType';
import axios from 'axios';

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsImdvb2dsZUlkIjoiMTA4MjgyNzkxNzkxNDk1MjMxNzk2IiwiZmlyc3ROYW1lIjoiQW1pbHkiLCJsYXN0TmFtZSI6Ikthc3NpbSIsImVtYWlsIjoiYW1pbHkua2Fzc2ltQGFuZGVsYS5jb20iLCJyb2xlIjoiTEYiLCJjcmVhdGVkQXQiOiIyMDE5LTExLTAxVDEwOjE4OjU5Ljk1MloiLCJ1cGRhdGVkQXQiOiIyMDE5LTExLTAxVDEwOjE4OjU5Ljk1MloiLCJpYXQiOjE1NzI2MDQwMDksImV4cCI6MTU3MjY5MDQwOX0.szInQ_Lb2IWDlwT4Y3Tzr5hAMonuwaQYJbF0VFCNvI8'

export const getEngineers = data => (dispatch) => {
    const token = window.localStorage.getItem('pulseToken');
    axios.get('https://dev-rating-manager-staging.herokuapp.com/api/v1/ratings', { // change the url
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://dev-rating-manager-staging.herokuapp.com',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data),
    }).then((response) => {
        console.log('the response is : ', response);
        dispatch({
            type: GET_ENGINEERS,
            payload: response,
        });
    }).catch(error => console.log('the response is : ', error));
};