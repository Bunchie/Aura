"use strict";

import React, {Component} from "react";
import {connect} from "react-redux";

import constants from "../../constants";

import CheckboxItem from "../CheckboxItem";
import RadioItem from "../RadioItem";
import TextItem from "../TextItem";

const mapStateToProps = state => {
  return {
    testElements: state.adminPanelState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeQuestion: (item) => {
      dispatch({type: constants.adminPanelState.CHANGE_QUESTION, payload: item});
    },
    deleteQuestion: (id) => {
      dispatch({type: constants.adminPanelState.DELETE_ITEM_TEST, payload: id});
    }
  };
};

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: this.props.item.id
    };

    this.addText = this.addText.bind(this);
    this.addRadio = this.addRadio.bind(this);
    this.addCheckbox = this.addCheckbox.bind(this);

    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.changeNameOfTheQuestion = this.changeNameOfTheQuestion.bind(this);
  }

  changeNameOfTheQuestion(event) {

    const idx = this.state.itemId;

    this.props.changeQuestion(
      {
        [idx]: Object.assign(
          {}, this.props.testElements.testItems[idx], {question: event.currentTarget.value}
        )
      }
    );
  }

  deleteQuestion() {
    this.props.deleteQuestion(this.state.itemId);
  }

  addText() {

    const idx = this.state.itemId;

    this.props.changeQuestion(
      {
        [idx]: Object.assign(
          {}, this.props.testElements.testItems[idx], {
            answers: {
              answerType: constants.typeAnswer.TEXT,
              correctAnswer: "",
            }
          }
        )
      }
    );
  }

  addRadio() {

    const idx = this.state.itemId;

    this.props.changeQuestion(
      {
        [idx]: Object.assign(
          {}, this.props.testElements.testItems[idx], {
            answers: {
              answerType: constants.typeAnswer.RADIO,
              answerItems: [],
              correctAnswer: null,
              answerQuantityItems: 0
            }
          }
        )
      }
    );
  }

  addCheckbox() {

    const idx = this.state.itemId;

    this.props.changeQuestion(
      {
        [idx]: Object.assign(
          {}, this.props.testElements.testItems[idx], {
            answers: {
              answerType: constants.typeAnswer.CHECKBOX,
              answerItems: [],
              answerQuantityItems: 0
            }
          }
        )
      }
    );
  }

  render() {

    let content = "";
    const idx = this.state.itemId;
    const answerType = this.props.testElements.testItems[idx].answers.answerType;

    if (answerType === constants.typeAnswer.TEXT) {
      content = <TextItem item={this.props.item}/>
    } else if (answerType === constants.typeAnswer.RADIO) {
      content = <RadioItem item={this.props.item}/>
    } else if (answerType === constants.typeAnswer.CHECKBOX) {
      content = <CheckboxItem item={this.props.item}/>
    }

    return (
      <section>
        <div className="form-inline">
          <button className="form-control" onClick={this.deleteQuestion}>Delete</button>
          <button className="form-control" onClick={this.addText}>Add Text</button>
          <button className="form-control" onClick={this.addRadio}>Add Radio</button>
          <button className="form-control" onClick={this.addCheckbox}>Add Checkbox</button>
        </div>
        <hr/>
        <div>
          <div className="form-group">
            <label>Question</label>
            <input
              type="text"
              className="form-control"
              placeholder="Input your question"
              onChange={this.changeNameOfTheQuestion}
              value={this.props.testElements.testItems[idx].name}
            />
          </div>
          <hr/>
          {content}
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);