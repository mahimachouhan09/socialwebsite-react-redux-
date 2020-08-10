import { combineReducers } from 'redux';
import login from './login';
import comments from './comments';

export default combineReducers({
 login,
 comments
});