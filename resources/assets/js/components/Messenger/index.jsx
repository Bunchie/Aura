"use strict";

import React, {Component} from "react";

class Messenger extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        {this.props.messages.map((message, i) => {
          return <div key={i}>{message}</div>;
        })}
        <hr/>
      </section>
    );
  }
}

export default Messenger;