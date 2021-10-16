import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { RouterProps } from "../../utils";
import PrivateRoute from "./PrivateRoute";
import { LoginPage, DashboardPage, ErrorPage } from "../../components";

export const RouterRoutes: FC<RouterProps> = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={"/"}
          render={() => <Redirect from={"/"} to={"/login"} />}
        />
        <Route path={"/login"} component={LoginPage} />
        <PrivateRoute path={"/dashboard"} component={DashboardPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};
