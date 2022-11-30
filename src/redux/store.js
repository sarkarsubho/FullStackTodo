import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";

import thunk from "redux-thunk";
import { appReducer } from "./app/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
