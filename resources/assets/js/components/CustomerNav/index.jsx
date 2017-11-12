"use strict";

import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';

class CustomerChart extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="test-section test-shadow">
        <h3>Customer panel</h3>
        <hr/>
        <div className="form-inline">
          <ul >
            <li >
              <Link to="/customer/chart">Chart</Link>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default CustomerChart;