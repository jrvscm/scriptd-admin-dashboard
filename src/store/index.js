import { createStore, applyMiddleware } from 'redux';
import { merge } from 'lodash';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from '../firebase/firebase';
import rootReducer from '../reducers';

// https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f
import { composeWithDevTools } from 'redux-devtools-extension';

const defaultProfile = {};

const rrfConfig = {
  userProfile: 'users',
  profileFactory: (user, profile) => {
    return merge({}, defaultProfile, profile);
  }
};

const store = createStore(
	rootReducer,
	composeWithDevTools(
		reactReduxFirebase(firebase, rrfConfig),
		applyMiddleware(thunk.withExtraArgument(getFirebase))
	)
);

export default store;
