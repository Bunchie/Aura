"use strict";

import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const mapStateToProps = state => {
  return {
    testState: state.testPanelState
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class Result extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    if (!Object.values(this.props.testState.currentTest).length && !Object.values(this.props.testState.currentAnswers).length) {
      return <Redirect to="/"/>
    }

    let score = Object.values(this.props.testState.currentAnswers).reduce((a, b) => Number(a) + Number(b.result), "");
    let result = (score * 100) / (Object.values(JSON.parse(this.props.testState.currentTest.items)).length * 100);

    return (
      <section>
        <h2>{this.props.testState.currentTest.name}</h2>
        <hr/>
        <div>
          Result: {result}
        </div>
        <div>
          <button>Save</button>
          <button>Back to Tests</button>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);