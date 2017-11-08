"use strict";

import React, {Component} from "react";

class Answers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.answers);
    if (!this.props.answers) {
      return null;
    }

    if (this.props.answers.answerType == "TEXT") {
      return null;
    }

    return (
      <div>
        {this.props.answers.answerItems.map((answer) => {
          return <div key={answer.id}>{answer.text}</div>
        })}
      </div>
    );
  }
}

export default Answers;