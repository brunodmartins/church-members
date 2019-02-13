import React from "react";
import ReactDOM from "react-dom";
import App from "../client/components/app/App.js";
import Auth from "../client/auth/auth.js";
import history from "../client/auth/history";


import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  routerReducer,
  routerMiddleware,
} from "react-router-redux";

import member from "../client/reducers/member"; // Or wherever you keep your reducers
import members from "../client/reducers/members"; // Or wherever you keep your reducers
import isLoading from "../client/reducers/isLoading";
import search from "../client/reducers/search";
const middleware = routerMiddleware(history);
const reducers = combineReducers({
  member, members, isLoading,search,
  router: routerReducer
});
const store = createStore(
  reducers,
  applyMiddleware(middleware)
);
const auth = new Auth();
ReactDOM.render(
  <App auth={auth} history={history} store={store}/>,
  document.getElementById("root")
);
