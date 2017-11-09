"use strict";

import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import constants from "../../constants";
import _saveResultXHR from "./_saveResultXHR";

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

const mapStateToProps = state => {
  return {
    testState: state.testPanelState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveResult: (data) => {
      dispatch({
        type: constants.httpRequest.PROMISE,
        actions: [
          constants.httpRequest.SAVE_RESULT_REQUEST,
          constants.httpRequest.SAVE_RESULT_SUCCESS,
          constants.httpRequest.SAVE_RESULT_FAILURE
        ],
        promise: _saveResultXHR(data)
      });
    }
  };
};

class Result extends Component {

  constructor(props) {
    super(props);

    this.saveResult = this.saveResult.bind(this);
  }

  saveResult() {
    let score = Object.values(this.props.testState.currentAnswers).reduce((a, b) => Number(a) + Number(b.result), "");
    let result = (score * 100) / (Object.values(JSON.parse(this.props.testState.currentTest.items)).length * 100);

    const data = new FormData(), testId = this.props.testState.currentTest.id;

    data.append('test', testId);
    data.append('result', result);
    data.append('user_id', getCookie("UI"));

    this.props.saveResult(data);
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

        <div className="btn-group ">
          <button type="button" className="btn btn-warning" onClick={this.saveResult}>Save</button>
          <button type="button" className="btn btn-success">Back to Tests</button>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);