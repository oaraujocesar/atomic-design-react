import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import Routes from "./Routes";

// import Navigation from "templates/Navigation";
// import Footer from "templates/Footer";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      {/* <Navigation /> */}
      <div className="app-wrapper">
        <Routes />
      </div>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
