import * as sessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const login = user => dispatch => {
  return sessionApiUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => {
      return dispatch(receiveErrors(err.responseJSON));
    }
  );
};

export const signup = user => dispatch => {
  return sessionApiUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => {
      return dispatch(receiveErrors(err.responseJSON));
    }
  );
};

export const logout = () => dispatch =>
  sessionApiUtil.logout().then(user => dispatch(receiveCurrentUser(null)));
