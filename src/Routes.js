import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { OpenRoutes, SecuredRoutes } from "./components/layout/index";
import Home from "./screens/home/index";
import Login from "./screens/auth/login";
function Routes() {
  return (
    <Router>
      <Switch>
        <OpenRoutes exact path="/">
          <Login />
        </OpenRoutes>

        <SecuredRoutes exact path="/home">
          <Home />
        </SecuredRoutes>
      </Switch>
    </Router>
  );
}

export default Routes;
