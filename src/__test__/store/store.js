// configureStore.js

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Import your root reducer

const configureStore = (initialState = {}) => {
  // Create the Redux store
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
};

export default configureStore;
