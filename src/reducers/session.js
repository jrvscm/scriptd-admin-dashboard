import { SET_AUTH_LOADING, AUTH_USER_SET } from '../actions';

const INITIAL_STATE = {
  authUser: null,
  loading: false
};

const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action.authUser
});

function session(state = INITIAL_STATE, action) {
  switch(action.type) {
    case AUTH_USER_SET:
      return applySetAuthUser(state, action);
    case SET_AUTH_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export default session;
