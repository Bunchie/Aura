"use strict";

import React, {Component} from "react";
import {connect} from "react-redux";

import constants from "../../constants";

const mapStateToProps = state => {
  return {
    testElements: state.adminPanelState.test
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToTest: (item) => {
      dispatch({type: constants.adminPanelState.ADD_ITEM_TO_TEST, payload: item});
    },
    addNameToTest: (name) => {
      dispatch({type: constants.adminPanelState.ADD_ITEM_TO_TEST, payload: item});
    }
  };
};


class CreateTest extends Component {
  constructor(props) {
    super(props);

    this.addText = this.addText.bind(this);
    this.addNameTest = this.addNameTest.bind(this);
  }

  addNameTest() {

  }

  addText() {
    this.props.addItemToTest({testItems: {element1: {name: "name"}}});
  }

  render() {
    return (
      <section>
        <h3>Create test</h3>
        <div className="form-group">
          <label htmlFor="">Name test</label>
          <input type="text" className="form-control" placeholder="Input name test" onChange={this.addNameTest}/>
          <hr/>
        </div>

        <div className="form-inline">
          <button className="form-control" onClick={this.addText}>Add Text</button>
          <button className="form-control">Add Radio</button>
          <button className="form-control">Add Checkbox</button>
        </div>

        <div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Input your question</label>
            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter email"
                   onChange={this.addText}/>
            <hr/>
          </div>

        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTest);