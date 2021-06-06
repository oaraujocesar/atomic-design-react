import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";

import Home from "./pages/Home/";
import NotFound from "./pages/404/";

let Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default Routes;
