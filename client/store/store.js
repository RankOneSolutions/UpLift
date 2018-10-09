import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preLoadedState = {}) => {
  const store = createStore(
    rootReducer,
    preLoadedState,
    applyMiddleware(thunk, logger));
    
  return store;
};

export default configureStore;