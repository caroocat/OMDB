import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import * as reducers from "./reducers";
const reducer = combineReducers({ ...reducers });
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, middleware))
);
