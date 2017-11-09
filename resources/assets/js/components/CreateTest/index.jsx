"use strict";

import {connect} from "react-redux";
import React, {Component} from "react";

import constants from "../../constants";
import Question from "../../components/Question";

import _createTestXHR from "./_createTestXHR";

const mapStateToProps = state => {
  return {
    testElements: state.adminPanelState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeItemOfTheTest: (item) => {
      dispatch({type: constants.adminPanelState.ADD_ITEM_TO_TEST, payload: item});
    },
    changeNameOfTheTest: (name) => {
      dispatch({type: constants.adminPanelState.CHANGE_NAME_OF_THE_TEST, payload: name});
    },
    createTest: (data) => {
      dispatch({
        type: constants.httpRequest.PROMISE,
        actions: [
          constants.httpRequest.CREATE_TEST_REQUEST,
          constants.httpRequest.CREATE_TEST_SUCCESS,
          constants.httpRequest.CREATE_TEST_FAILURE
        ],
        promise: _createTestXHR(data)
      });
    }
  };
};

class CreateTest extends Component {

  constructor(props) {
    super(props);

    this.createTest = this.createTest.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.changeRoute = this.changeRoute.bind(this);
    this.changeNameOfTheTest = this.changeNameOfTheTest.bind(this);
  }

  createTest() {
    const data = new FormData(), name = this.props.testElements.testName,
      items = JSON.stringify(this.props.testElements.testItems);

    data.append('name', name);
    data.append('items', items);

    this.props.createTest(data);
  }

  changeRoute() {
    location.href = "/";
  }

  changeNameOfTheTest(event) {
    this.props.changeNameOfTheTest(event.currentTarget.value);
  }

  addQuestion() {

    const question = {
      id: this.props.testElements.testQuantityItems,
      question: '',
      answers: {}

    }, idxItem = this.props.testElements.testQuantityItems;

    this.props.changeItemOfTheTest({[idxItem]: question});
  }

  render() {
    return (
      <section
        className="col-xs-12"
        style={{backgroundColor: "white", boxShadow: "0px 0px 20px 0px rgba(87,83,87,1)", minHeight: 400}}
      >
        <div className="col-xs-4">
          <div style={{position: "fixed", width: "385px"}}>
            <div className="form-group">
              <h3>Create test</h3>
              <hr/>
              <label htmlFor="">Name test</label>
              <input
                type="text"
                className="form-control"
                placeholder="Input name test"
                onChange={this.changeNameOfTheTest}
                value={this.props.testElements.testName}
              />
            </div>
            <div className="form-group">
              <button className="form-control btn-success" onClick={this.addQuestion}>Add questions</button>
            </div>
            <div className="form-group">
              <button className="form-control btn-warning" onClick={this.createTest}>Create test</button>
            </div>
            <div className="form-group">
              <button className="form-control btn-primary" onClick={this.changeRoute}>Go to tests</button>
            </div>
            <hr/>
          </div>
        </div>

        <div className="col-xs-8">
          {Object.values(this.props.testElements.testItems).map((item) => {
            return (
              <div key={item.id}>
                <Question item={item}/>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTest);