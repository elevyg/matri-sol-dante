import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../pages";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
