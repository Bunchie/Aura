"use strict";

import React, {Component} from "react";
import constants from "../../constants";

import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    testState: state.testPanelState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    choiceAnswer: (answer) => {
      dispatch({type: constants.testPanelState.CHOICE_OF_ANSWER, payload: answer});
    }
  };
};

class Answers extends Component {
  constructor(props) {
    super(props);
    this.answerItems = this.props.answers.answerItems;
    this.choiceOfAnswer = this.choiceOfAnswer.bind(this);
  }

  choiceOfAnswer(event) {
    let result = 0;
    switch (this.props.answers.answerType) {
      case constants.typeAnswer.TEXT: {
        this.props.answers.correctAnswer === event.currentTarget.value ? result = 100 : 0;
      }
        break;
      case constants.typeAnswer.RADIO: {
        this.props.answers.correctAnswer === event.currentTarget.value ? result = 100 : 0;
      }
        break;
      case constants.typeAnswer.CHECKBOX: {
        this.answerItems[event.currentTarget.value].checked = event.currentTarget.checked;
        let correctAnswers = this.props.answers.answerItems.filter((answer) => {
          return answer.correct;
        });
        let customerAnswers = this.answerItems.filter((answer) => {
          return (answer.correct && answer.checked);
        });
        result = (customerAnswers.length * 100) / correctAnswers.length;
      }
        break;
    }

    this.props.choiceAnswer({[this.props.questionId]: {result: result}});

  }

  render() {

    if (this.props.answers.answerType === constants.typeAnswer.TEXT) {
      return (
        <div>
          <div className="form-group">
            <label htmlFor="">Correct answer</label>
            <input
              type="text"
              className="form-control"
              placeholder="Input correct answer"
              onChange={this.choiceOfAnswer}
            />
          </div>
        </div>
      );
    } else if (this.props.answers.answerType === constants.typeAnswer.RADIO) {

      return (
        <div>
          {this.props.answers.answerItems.map((currentAnswer) => {
            return <div key={currentAnswer.id} className="form-inline">
              <input
                style={{width: '10%'}}
                type="radio"
                value={currentAnswer.id}
                name={`radio-${this.props.questionId}`}
                className="form-control"
                onChange={this.choiceOfAnswer}
              />
              <span>
              {currentAnswer.text}
            </span>
            </div>
          })}
        </div>
      );

    } else if (this.props.answers.answerType === constants.typeAnswer.CHECKBOX) {

      return (
        <div>
          {this.props.answers.answerItems.map((currentAnswer) => {
            return <div key={currentAnswer.id} className="form-inline">
              <input
                value={currentAnswer.id}
                style={{width: '10%'}}
                type="checkbox"
                className="form-control"
                onChange={this.choiceOfAnswer}
              />
              <span>
              {currentAnswer.text}
            </span>
            </div>
          })}
        </div>
      );

    }


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Answers);