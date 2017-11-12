"use strict";

import React from "react";
import ReactDOM from "react-dom";

import {Provider} from 'react-redux';

import store from "./redux/store";
import {BrowserRouter as Router} from 'react-router-dom';

/**
 * Customer
 * */
import CustomerPanel from "./containers/customer_panel";
const customer_panel = document.getElementById('customer_panel');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <CustomerPanel/>
    </Router>
  </Provider>,
  customer_panel);