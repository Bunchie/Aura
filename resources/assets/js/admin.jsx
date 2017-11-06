"use strict";

import React from "react";
import ReactDOM from "react-dom";

/**
 * Admin
 * */
import AdminPanel from "./containers/admin_panel";
const admin_panel = document.getElementById('admin_panel');
ReactDOM.render(<AdminPanel/>, admin_panel);