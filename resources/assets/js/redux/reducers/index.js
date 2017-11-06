"use strict";

import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import testPanelState from "./test_panel_state";
import adminPanelState from "./admin_panel_state";

export default combineReducers({
  testPanelState,
  adminPanelState,
  router: routerReducer
});