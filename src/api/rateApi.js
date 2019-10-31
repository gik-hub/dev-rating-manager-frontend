import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL;

export const getMyEngineers = () => {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
};

export const rateEngineer = engineerRatings => {
  return fetch(baseUrl + 'ratings/rate/' + (engineerRatings.id || ''), {
    method: engineerRatings.id ? 'PATCH' : 'POST', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(engineerRatings)
  })
    .then(handleResponse)
    .catch(handleError);
};