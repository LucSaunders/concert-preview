import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import App from "./components/app";
import reducers from "./reducers";

import 'bootstrap/dist/css/bootstrap.css';

/* Creates a store with middleware, renders the App component */

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);