import sessionErrorReducer from "./SessionErrorsReducer";
import {combineReducers } from "redux";


export default combineReducers({ sessionErrors: sessionErrorReducer});
