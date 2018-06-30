import React from "react";
import ReactDOM from "react-dom";
import App from "../client/components/app/App.js";
import Auth from "../client/auth/auth.js";
import history from "../client/auth/history";
const auth = new Auth();
ReactDOM.render(
  <App auth={auth} history={history}/>,
  document.getElementById("root")
);
