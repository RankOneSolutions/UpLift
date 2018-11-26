import { combineReducers } from "redux";
import workoutReducer from "./WorkoutReducer";

export default combineReducers({ workout: workoutReducer });