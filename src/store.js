import { createStore } from 'redux';

import { hotColdReducer } from './reducers';

const store = createStore(
  hotColdReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;