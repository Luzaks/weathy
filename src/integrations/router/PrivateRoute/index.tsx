import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { handleSession } from "../../auth";

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  if (!handleSession()) return <Redirect exact={true} to="/" />;
  else return <Route {...rest} />;
};

export default PrivateRoute;
