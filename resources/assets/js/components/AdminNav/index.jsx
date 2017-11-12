"use strict";

import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';

class AdminNav extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="col-xs-12 test-shadow test-section">
        <h3>Admin panel</h3>
        <hr/>
        <div className="form-inline">
          <ul >
            <li >
              <Link to="/admin/create-test">Create test</Link>
            </li>
            <li >
              <Link to="/admin/create-category">Create category</Link>
            </li>
            <li >
              <Link to="/admin/show-tests">Show tests</Link>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default AdminNav;