import { combineReducers } from "redux";
import entitiesReducer from "./EntitiesReducer";
import sessionReducer from "./SessionReducer";
import errorReducer from "./errors/ErrorsReducer";
import uiReducer from "./ui/UiReducer";

export default combineReducers({ entities: entitiesReducer, ui: uiReducer, session: sessionReducer, errors: errorReducer});