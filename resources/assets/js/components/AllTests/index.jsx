"use strict";

import React, {Component} from "react";

import {connect} from "react-redux";
import {Link} from 'react-router-dom';

import constants from "../../constants";
import _getTestsXHR from "./_getTestsXHR";

import Select2 from 'react-select2-wrapper';

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
        <h3>Category test</h3>
        <Select2
          className="form-control"
          style={{width: "100%"}}
          multiple
          data={['test1', 'test2', 'test3', 'test4']}
          options={
            {
              placeholder: 'search by tags',
            }
          }
        />
        <hr/>
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