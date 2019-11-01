import axios from 'axios';
import getUsersApi from '../api/usersApi';
import {
  MY_ENGINEERS,
  REMOVE_ENGINEERS,
  REPLACE_ENGINEERS,
  SAVE_ENGINEERS,
  GET_USERS,
  ADD_ENGINEER,
  REDIRECT_USER,
} from './actionType';

const editUsers = (users) => users.map((eng) => ({ id: eng.id, name: `${eng.firstName} ${eng.lastName}` }));

export const myEngineers = () => (dispatch) => {
  const token = localStorage.getItem('pulseToken');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  axios.get('https://dev-rating-manager-staging.herokuapp.com/api/v1/users', config)
    .then((res) => {
      const engineers = editUsers(res.data.data);
      dispatch({
        type: MY_ENGINEERS,
        payload: engineers,
      });
    })
    .catch((error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        dispatch({
          type: REDIRECT_USER,
          payload: { isLoggedOut: true },
        });
      }
    });
};

export const deleteEngineer = (user) => (dispatch) => {
  dispatch({
    type: REMOVE_ENGINEERS,
    payload: user,
  });
};

export const replaceEngineer = (user) => (dispatch) => {
  dispatch({
    type: REPLACE_ENGINEERS,
    payload: user,
  });
};

export const saveEngineers = (engineers) => (dispatch) => {
  const token = localStorage.getItem('pulseToken');
  dispatch({
    type: SAVE_ENGINEERS,
    payload: engineers,
  });
  const engineerIds = engineers.map((eng) => eng.id);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const body = { engineers: engineerIds };
  axios.patch('http://dev-rating-manager-staging.herokuapp.com/api/v1/group', body, config)
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error.response.status);
      if (error.response.status === 401) {
        dispatch({
          type: REDIRECT_USER,
          payload: { isLoggedOut: true },
        });
      }
    });
};

export const getUsers = () => (dispatch) => {
  const token = localStorage.getItem('pulseToken');
  let allUsers;
  getUsersApi(token).then((data) => {
    allUsers = data.data.data.filter((user) => user.role === 'Engineer');
    const allEngineers = editUsers(allUsers);
    dispatch({
      type: GET_USERS,
      payload: allEngineers,
    });
  }).catch((error) => {
    console.log(error.response);
  });
};

export const addEngineer = (engineer) => (dispatch) => {
  dispatch({
    type: ADD_ENGINEER,
    payload: engineer,
  });
};
