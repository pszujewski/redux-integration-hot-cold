import { createStore } from 'redux';

import { hotColdReducer } from './reducers';

const store = createStore(hotColdReducer);

export default store;