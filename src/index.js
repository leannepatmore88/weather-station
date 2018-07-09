import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import graphDisplayReducer from "./reducers/GraphDisplayReducer";
import graphOptionsReducer from "./reducers/GraphOptionsReducer";
import App from "./App";

import "semantic-ui-css/semantic.min.css";

const logger = createLogger();
const store = createStore(
  combineReducers({ graphDisplayReducer, graphOptionsReducer }),
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
