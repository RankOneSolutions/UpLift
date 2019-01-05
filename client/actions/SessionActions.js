import * as API from "../util/SessionUtil";


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

//actions
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


// action thunk creators
export const login = (user) => (dispatch) => (
  API.login(user).then(
    cUser => dispatch(receiveCurrentUser(cUser)),
    error => dispatch(receiveSessionErrors(error.responseJSON))
  )
);

export const signup = (user) => (dispatch) => (
  API.signup(user).then(
    cUser => dispatch(receiveCurrentUser(cUser)),
    error => dispatch(receiveSessionErrors(error.responseJSON))
  )
);

export const logout = () => (dispatch) => (
  API.logout().then(() => (
    dispatch(logoutCurrentUser())
  ))
);


