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
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
};

class Text extends Component {
  constructor(props) {
    super(props);
    this.onClickScrollNextSlider = this.onClickScrollNextSlider.bind(this);
  }

  componentDidMount() {
    this.props.getTest(this.props.match.params.id);
  }

  onClickScrollNextSlider() {
    this.refs.slider.slickNext();
  }

  render() {

    let answers = (<div>Loading ...</div>);

    if (this.props.testState.currentTest.items) {
      answers = Object.values(JSON.parse(this.props.testState.currentTest.items)).map((item) => {
        return (
          <div key={item.id}>
            <div className="center-block" style={{width: "800px"}}>
              <h3>{item.question}</h3>
              <hr/>
              <Answers answers={item.answers} questionId={item.id}/>
            </div>
          </div>
        );
      });
    }

    return (
      <section className="col-xs-12" style={{backgroundColor: "white", minHeight: "600px"}}>
        <h1>{this.props.testState.currentTest.name}</h1>
        <hr/>
        <Slider ref='slider' {...settings}>
          {answers}
        </Slider>
        <hr/>
        <div className="center-block" style={{width: "200px"}}>
          <button className="btn btn-success btn-block" onClick={this.onClickScrollNextSlider}>Next</button>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Text);