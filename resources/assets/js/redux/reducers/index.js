"use strict";

import {combineReducers} from "redux";

import testPanelState from "./test_panel_state";
import adminPanelState from "./admin_panel_state";

export default combineReducers({
  testPanelState,
  adminPanelState
});