"use strict";

import React from "react";
import {Route} from "react-router-dom";

export const HelperRoute = (route) => (
  <Route
    path={route.path}
    render={props =>
      (
        <route.component
          {...props}
          routes={route.routes}
        />
      )
    }
  />
);


export default HelperRoute;