import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import Routes from "./Routes";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
