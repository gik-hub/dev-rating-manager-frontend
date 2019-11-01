import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(combinedReducers, initialState, applyMiddleware(thunk));
}
