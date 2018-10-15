import * as API from "../util/session_util";


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = (user) => (dispatch) => (
  API.login(user).then(
    cUser => dispatch(receiveCurrentUser(cUser)),
    error => dispatch(receiveSessionErrors(error.responseJSON))
  )
);

export const logout = () => (dispatch) => (
  API.logout().then(() => (
    dispatch(logoutCurrentUser())
  ))
);


