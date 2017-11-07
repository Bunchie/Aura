"use strict";

import React, {Component} from "react";
import {connect} from "react-redux";

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

class TextItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId: this.props.item.id,
      items: this.props.testElements.testItems[this.props.item.id]
    };

    this.changeText = this.changeText.bind(this);
  }

  changeText(event) {
    const idx = this.state.itemId;
    const items = this.state.items;

    this.props.changeQuestion(
      {
        [idx]: Object.assign({}, items, {
            answers: Object.assign({}, items.answers, {
              correctAnswer: event.currentTarget.value
            })
          }
        )
      }
    );
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="">Correct answer</label>
        <input
          type="text"
          className="form-control"
          placeholder="Input correct answer"
          onChange={this.changeText}
          value={this.props.testElements.testItems[this.props.item.id].answers.correctAnswer}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextItem);