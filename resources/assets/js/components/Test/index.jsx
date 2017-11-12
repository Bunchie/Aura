"use strict";

import React, {Component} from "react";

import Slider from "react-slick";
import {connect} from "react-redux";

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

class Text extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      finishTest: false
    };

    this.onClickScrollNextSlider = this.onClickScrollNextSlider.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount() {
    this.props.getTest(this.props.match.params.id);
  }

  nextSlide(slide) {
    this.setState({currentSlide: slide});
  }

  onClickScrollNextSlider() {

    let lastSlide = this.refs.slider.props.children.length - 1;

    if (lastSlide != this.state.currentSlide) {
      this.refs.slider.slickNext();
    } else if (lastSlide == this.state.currentSlide && !this.state.finishTest) {
      this.setState({finishTest: true});
    } else if (this.state.finishTest) {
      this.props.history.push('/result');
    }

  }

  render() {

    const settings = {
      speed: 1500,
      arrows: false,
      touchMove: false,
      swipeToSlide: false,
      swipe: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: this.nextSlide,
    };

    let answers = (<div>Loading ...</div>);

    if (this.props.testState.currentTest.items) {
      answers = Object.values(JSON.parse(this.props.testState.currentTest.items)).map((item) => {
        return (
          <div key={item.id} className="padding-for-section">
            <div className="center-block test-shadow section-for-tests">
              <h3>{item.question}</h3>
              <hr/>
              <Answers answers={item.answers} questionId={item.id}/>
            </div>
          </div>
        );
      });
    }

    let finishText = "";
    if (this.state.finishTest) {
      finishText = (
        <h1 className="finish-text">
          You answered all questions !
        </h1>
      );
    }

    return (
      <section className="col-xs-12 test-shadow test-section">
        <h1>{this.props.testState.currentTest.name}</h1>
        <hr/>
        <Slider ref='slider' {...settings}>
          {answers}
        </Slider>
        <hr/>
        {finishText}
        <div className="center-block button-test-section">
          <button
            className={this.state.finishTest ? "btn btn-primary btn-block" : "btn btn-success btn-block"}
            onClick={this.onClickScrollNextSlider}
          >
            {this.state.finishTest ? "Finish" : "Next >>"}
          </button>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Text);