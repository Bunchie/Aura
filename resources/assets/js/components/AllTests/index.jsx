"use strict";

import React, {Component} from "react";

import {connect} from "react-redux";
import {Link} from 'react-router-dom';

import constants from "../../constants";
import _getTestsXHR from "./_getTestsXHR";

const mapStateToProps = state => {
  return {
    testState: state.testPanelState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTests: () => {
      dispatch({
        type: constants.httpRequest.PROMISE,
        actions: [
          constants.httpRequest.GET_TESTS_REQUEST,
          constants.httpRequest.GET_TESTS_SUCCESS,
          constants.httpRequest.GET_TESTS_FAILURE
        ],
        promise: _getTestsXHR()
      });
    }
  };
};

class AllTests extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTests();
  }

  render() {
    return (
      <section
        className="col-xs-12 test-shadow"
        style={{backgroundColor: "white", minHeight: "600px", padding: "20px"}}
      >
        {
          this.props.testState.tests.map((item) => {
            return (
              <div key={item.id} style={{fontSize: "30px"}}>
                <Link to={`/test/${item.id}`}><span style={{color: "red"}}>Test => </span>{item.name}</Link>
              </div>
            );
          })
        }
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTests);