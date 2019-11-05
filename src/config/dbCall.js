/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export default axios.create({
  baseURL: 'https://dev-rating-manager-staging.herokuapp.com/api/v1',
});
