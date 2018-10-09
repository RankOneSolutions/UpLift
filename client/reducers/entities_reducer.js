import { combineReducers } from "redux";
import workoutReducer from "./workout_reducer";

export default combineReducers({ workout: workoutReducer });