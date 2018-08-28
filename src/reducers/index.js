import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import session from './session';
import user from './user';

const rootReducer = combineReducers({
  session,
  user,
  firebase: firebaseReducer
});


export default rootReducer;
