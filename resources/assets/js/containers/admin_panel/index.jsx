"use strict";

import React, {Component} from "react";
import {Switch} from 'react-router-dom';

import router from "../../router/admin";
import HelperRoute from "../../helpers/HelperRoute";

class AdminPanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="row">
        <Switch>
          {router.map((route, i) => (
            <HelperRoute key={i} {...route}/>
          ))}
        </Switch>
      </section>
    );
  }
}

export default AdminPanel;