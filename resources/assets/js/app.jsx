"use strict";

import React from "react";
import ReactDOM from "react-dom";

/**
 * Test
 * */
import TestPanel from "./containers/test_panel";
const test_panel = document.getElementById('test_panel');
ReactDOM.render(<TestPanel/>, test_panel);

/**
* Admin
* */
import AdminPanel from "./containers/admin_panel";
const admin_panel = document.getElementById('admin_panel');
ReactDOM.render(<AdminPanel/>, admin_panel);