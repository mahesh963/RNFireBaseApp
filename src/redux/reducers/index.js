import {combineReducers} from 'redux';
import user from './user.js';

const rootReducer = combineReducers({
  user: user,
});
export default rootReducer;
