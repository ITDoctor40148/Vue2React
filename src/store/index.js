import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';

import rootReducer from './root-reducer';

// const logger = createLogger();
const middlewares = []; // [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;