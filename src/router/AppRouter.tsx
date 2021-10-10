import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, BasicInfo } from "../pages";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="info-basica">
        <BasicInfo />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;