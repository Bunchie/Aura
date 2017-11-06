"use strict";

import React, {Component} from "react";
import CreateTest from "../../components/CreateTest";

class AdminPanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <CreateTest/>
      </section>
    );
  }
}

export default AdminPanel;