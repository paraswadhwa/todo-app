import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import storage from 'redux-persist/lib/storage';

export default combineReducers({
  	todoReducer
});