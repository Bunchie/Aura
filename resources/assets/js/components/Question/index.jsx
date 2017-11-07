"use strict";

import React, {Component} from "react";
import {connect} from "react-redux";

import constants from "../../constants";
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
    this.addText = this.addText.bind(this);
    this.addRadio = this.addRadio.bind(this);
    this.addRadioItem = this.addRadioItem.bind(this);
    this.addCheckbox = this.addCheckbox.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.changeNameOfTheQuestion = this.changeNameOfTheQuestion.bind(this);
  }

  changeNameOfTheQuestion(event) {
    this.props.changeQuestion(
      {
        [this.props.item.id]: Object.assign(
          {}, this.props.testElements.testItems[this.props.item.id], {question: event.currentTarget.value}
        )
      }
    );
  }

  deleteQuestion() {
    this.props.deleteQuestion(this.props.item.id);
  }

  addText() {

    const idx = this.props.item.id;

    this.props.changeQuestion(
      {
        [idx]: Object.assign(
          {}, this.props.testElements.testItems[idx], {
            answers: {
              answerType: constants.typeAnswer.TEXT,
              answerItem: {correctAnswer: ""},
            }
          }
        )
      }
    );
  }

  addRadio() {

    const idx = this.props.item.id;

    this.props.changeQuestion(
      {
        [idx]: Object.assign(
          {}, this.props.testElements.testItems[idx], {
            answers: {
              answerType: constants.typeAnswer.RADIO,
              answerItems: [],
              answerQuantityItems: 0
            }
          }
        )
      }
    );
  }

  addRadioItem() {

    const idx = this.props.item.id;
    const items = this.props.testElements.testItems[idx];

    items.answers.answerItems[items.answers.answerQuantityItems] = {text: ''};

    this.props.changeQuestion(
      {
        [idx]: Object.assign({}, items, Object.assign({}, items.answers, {
            answerItems: items.answers.answerItems,
            answerQuantityItems: items.answers.answerQuantityItems++
          })
        )
      }
    );
  }

  addCheckbox() {
  }

  render() {

    let content = "";

    if (this.props.testElements.testItems[this.props.item.id].answers.answerType === constants.typeAnswer.TEXT) {
      content = <TextItem/>
    } else if (this.props.testElements.testItems[this.props.item.id].answers.answerType === constants.typeAnswer.RADIO) {
      content = (
        <div className="form-group">
          <button className="btn btn-default btn-block" onClick={this.addRadioItem}>Add</button>
          <form>
            {
              this.props.testElements.testItems[this.props.item.id].answers.answerItems.map((item, i) => {
                return (
                  <div key={i} className="form-inline">

                    <input
                      style={{width: '10%'}}
                      type="radio"
                      name={`radio-${this.props.item.id}`}
                      className="form-control"
                    />


                    <input
                      style={{width: '90%'}}
                      type="text"
                      className="form-control"
                    />

                  </div>
                );
              })
            }
          </form>
        </div>);
    }

    return (
      <section style={{margin: "25px", padding: "15px", boxShadow: "0px 0px 20px 0px rgba(87,83,87,1)"}}>

        <div className="form-inline">
          <button className="form-control" onClick={this.deleteQuestion}>Delete</button>
          <button className="form-control" onClick={this.addText}>Add Text</button>
          <button className="form-control" onClick={this.addRadio}>Add Radio</button>
          <button className="form-control">Add Checkbox</button>
        </div>

        <div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input
              type="text"
              className="form-control"
              placeholder="Input your question"
              onChange={this.changeNameOfTheQuestion}
              value={this.props.testElements.testItems[this.props.item.id].name}
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