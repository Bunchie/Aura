"use strict";

import Slider from "react-slick";
import {connect} from "react-redux";
import React, {Component} from "react";

import _getTestXHR from "./_getTestXHR";

import constants from "../../constants";
import Answers from "../Answers";

const mapStateToProps = state => {
  return {
    testState: state.testPanelState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTest: (id) => {
      dispatch({
        type: constants.httpRequest.PROMISE,
        actions: [
          constants.httpRequest.GET_TEST_REQUEST,
          constants.httpRequest.GET_TEST_SUCCESS,
          constants.httpRequest.GET_TEST_FAILURE
        ],
        promise: _getTestXHR(id)
      });
    }
  };
};

const settings = {
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1
};

class Text extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTest(this.props.match.params.id);
  }

  render() {

    let answers = (<div>Loading ...</div>);

    if (this.props.testState.currentTest.items) {
      answers = Object.values(JSON.parse(this.props.testState.currentTest.items)).map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.question}</h3>
            <hr/>
            <Answers answers={item.answers}/>
          </div>
        );
      });
    }

    return (
      <section className="col-xs-12" style={{backgroundColor: "white", minHeight: "600px"}}>
        <h1>{this.props.testState.currentTest.name}</h1>
        <Slider {...settings}>
          {answers}
        </Slider>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Text);