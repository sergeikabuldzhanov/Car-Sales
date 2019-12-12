import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { featureListReducer } from "./state/reducers";

import "bulma/css/bulma.css";
import "./styles.scss";

const reducer = combineReducers({
  featureList: featureListReducer
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  rootElement
);
