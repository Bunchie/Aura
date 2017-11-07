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

class CheckboxItem extends Component {
  constructor(props) {
    super(props);
    this.addCheckboxItem = this.addCheckboxItem.bind(this);
  }

  addCheckboxItem() {

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

  render() {
    return (
      <div className="form-group">
        <button className="btn btn-default btn-block" onClick={this.addCheckboxItem}>Add</button>
        <form>
          {
            this.props.testElements.testItems[this.props.item.id].answers.answerItems.map((item, i) => {
              return (
                <div key={i} className="form-inline">
                  <input
                    style={{width: '10%'}}
                    type="checkbox"
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
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxItem);