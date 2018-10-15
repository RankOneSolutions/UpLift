import sessionErrorReducer from "./session_error_reducer";
import {combineReducers } from "redux";


export default combineReducers({ sessionErrors: sessionErrorReducer});
