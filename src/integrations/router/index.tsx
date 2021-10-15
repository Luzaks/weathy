import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import { LoginPage, DashboardPage, ErrorPage } from "../../components";

export const RouterRoutes = () => {
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
