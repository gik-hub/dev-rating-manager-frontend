import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import RISI from 'redux-immutable-state-invariant';
import combineReducers from './reducers';

export default function configureStore(initialState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    combineReducers,
    initialState,
    composeEnhancer(applyMiddleware(thunk, RISI())),
  );
}
