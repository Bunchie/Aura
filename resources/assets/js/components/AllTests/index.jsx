"use strict";

import React, {Component} from "react";

import {connect} from "react-redux";
import {Link} from 'react-router-dom';

import constants from "../../constants";
import _getTestsXHR from "./_getTestsXHR";
import getCategoriesXHR from "../../helpers/GetCategoriesXHR";

import Select2 from 'react-select2-wrapper';

const mapStateToProps = state => {
  return {
    testState: state.testPanelState,
    testElements: state.adminPanelState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTests: (categories) => {
      dispatch({
        type: constants.httpRequest.PROMISE,
        actions: [
          constants.httpRequest.GET_TESTS_REQUEST,
          constants.httpRequest.GET_TESTS_SUCCESS,
          constants.httpRequest.GET_TESTS_FAILURE
        ],
        promise: _getTestsXHR(categories)
      });
    },
    getCategories: () => {
      dispatch({
        type: constants.httpRequest.PROMISE,
        actions: [
          constants.httpRequest.GET_CATEGORIES_REQUEST,
          constants.httpRequest.GET_CATEGORIES_SUCCESS,
          constants.httpRequest.GET_CATEGORIES_FAILURE
        ],
        promise: getCategoriesXHR()
      });
    }
  };
};

class AllTests extends Component {
  constructor(props) {
    super(props);
    this.changeCategories = this.changeCategories.bind(this);
  }

  changeCategories() {

    let categories = this.refs.tags.el.select2('data').map((items) => {
      return items.id;
    });

    if (Boolean(categories.join(",")))
      this.props.getTests(categories.join(","));
  }

  componentDidMount() {
    this.props.getCategories();
    this.props.getTests();
  }

  render() {

    return (
      <section className="col-xs-12 test-shadow test-section">
        <h3>Category test</h3>
        <div className="form-inline">
          <Select2
            ref="tags"
            className="form-control"
            style={{width: "80%"}}
            multiple
            data={this.props.testElements.testCategories}
            options={{placeholder: 'Category selection'}
            }
          />
          <button
            style={{width: "19%", marginLeft: '1%', height: '37px', borderColor: '#aaa'}}
            className="btn btn-default" onClick={this.changeCategories}
          >
            Search
          </button>
        </div>

        <hr/>
        {
          this.props.testState.tests.map((item) => {
            return (
              <div key={item.id} style={{fontSize: "30px"}}>
                <Link to={`/test/${item.id}`} style={{color: "#aaa"}}><span>Test #{item.id} </span>{item.name}</Link>
              </div>
            );
          })
        }
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTests);