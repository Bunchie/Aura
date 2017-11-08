"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import store from "./redux/store";
import {BrowserRouter as Router} from 'react-router-dom';

/**
 * Admin
 * */
import AdminPanel from "./containers/admin_panel";
const admin_panel = document.getElementById('admin_panel');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AdminPanel/>
    </Router>
  </Provider>,
  admin_panel);