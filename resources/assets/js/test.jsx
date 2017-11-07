"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import store from "./redux/store";
import {BrowserRouter as Router} from 'react-router-dom';

/**
 * Test
 * */
import TestPanel from "./containers/test_panel";
const test_panel = document.getElementById('test_panel');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <TestPanel/>
    </Router>
  </Provider>,
  test_panel);