import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import combinedReducer from './reducers';

const configureStore = (initialState) => {
  // add support for redux devtools
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    combinedReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
};

export default configureStore;
