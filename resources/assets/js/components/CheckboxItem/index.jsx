"use strict";

import {connect} from "react-redux";
import React, {Component} from "react";

import constants from "../../constants";

const mapStateToProps = state => {
  return {
    testElements: state.adminPanelState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeQuestion: (item) => {
      dispatch({type: constants.adminPanelState.CHANGE_QUESTION, payload: item});
    }
  };
};

class CheckboxItem extends Component {

  constructor(props) {
    super(props);

    this.addCheckboxItem = this.addCheckboxItem.bind(this);
    this.changeCheckboxItemText = this.changeCheckboxItemText.bind(this);
    this.changeCheckboxItemCorrect = this.changeCheckboxItemCorrect.bind(this);
  }

  changeCheckboxItemText(event) {

    const idx = this.props.item.id;
    const items = this.props.testElements.testItems[this.props.item.id];

    items.answers.answerItems[event.currentTarget.name].text = event.currentTarget.value;

    this.props.changeQuestion(
      {
        [idx]: Object.assign({}, items, {
            answers: Object.assign({}, items.answers, {
              answerItems: items.answers.answerItems,
              answerQuantityItems: ++items.answers.answerQuantityItems
            })
          }
        )
      }
    );
  }

  changeCheckboxItemCorrect(event) {

    const idx = this.props.item.id;
    const items = this.props.testElements.testItems[this.props.item.id];

    items.answers.answerItems[event.currentTarget.name].correct = event.currentTarget.checked;

    this.props.changeQuestion(
      {
        [idx]: Object.assign({}, items, {
            answers: Object.assign({}, items.answers, {
              answerItems: items.answers.answerItems
            })
          }
        )
      }
    );
  }

  addCheckboxItem() {

    const idx = this.props.item.id;
    const items = this.props.testElements.testItems[this.props.item.id];

    items.answers.answerItems[items.answers.answerQuantityItems] = {
      text: '',
      correct: false,
      checked: false,
      id: items.answers.answerQuantityItems
    };

    this.props.changeQuestion(
      {
        [idx]: Object.assign({}, items, {
            answers: Object.assign({}, items.answers, {
              answerItems: items.answers.answerItems,
              answerQuantityItems: ++items.answers.answerQuantityItems
            })
          }
        )
      }
    );
  }

  render() {
    return (
      <div className="form-group">
        <div>
          <button className="btn btn-default btn-block" onClick={this.addCheckboxItem}>Add</button>
        </div>
        <hr/>
        <div>
          {
            this.props.testElements.testItems[this.props.item.id].answers.answerItems.map((answer) => {
              return (
                <div key={answer.id} className="form-inline">
                  <input
                    style={{width: '10%'}}
                    type="checkbox"
                    name={answer.id}
                    className="form-control"
                    onChange={this.changeCheckboxItemCorrect}
                  />
                  <input
                    style={{width: '80%'}}
                    type="text"
                    className="form-control"
                    name={answer.id}
                    placeholder="Input answer"
                    onChange={this.changeCheckboxItemText}
                    value={this.props.testElements.testItems[this.props.item.id].answers.answerItems[answer.id].text}
                  />
                  <input
                    style={{width: '10%'}}
                    type="text"
                    disabled={true}
                    value={answer.id}
                    className="form-control"
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxItem);