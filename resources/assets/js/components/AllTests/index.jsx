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
      <section className="col-xs-12" style={{backgroundColor: "white"}}>
        {
          this.props.testState.tests.map((item) => {
            return (<div key={item.id}>
              <Link to={`/test/${item.id}`}>{item.name}</Link>
            </div>);
          })
        }
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTests);