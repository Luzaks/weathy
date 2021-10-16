import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";

import { handleSession } from "../../auth";
import { RouterProps } from "../../../utils";

const PrivateRoute: FC<RouterProps> = ({ ...rest }) => {
  if (!handleSession()) return <Redirect exact={true} to="/" />;
  else return <Route {...rest} />;
};

export default PrivateRoute;
