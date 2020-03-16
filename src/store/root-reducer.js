import { combineReducers } from 'redux';
import homeReducer from './reducers/home';

const rootReducer = combineReducers({
    home: homeReducer,
});

export default rootReducer;