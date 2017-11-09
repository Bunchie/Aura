"use strict";

import React, {Component} from "react";

import {Switch} from 'react-router-dom';

import router from "../../router/test";
import HelperRoute from "../../helpers/HelperRoute";

class TestPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="container">
        <div className="row">
          <Switch>
            {router.map((route, i) => (
              <HelperRoute key={i} {...route}/>
            ))}
          </Switch>
        </div>
      </section>
    );
  }
}

export default TestPanel;