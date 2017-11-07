"user strict";

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

class RadioItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      itemId: this.props.item.id,
      items: this.props.testElements.testItems[this.props.item.id]
    };

    this.addRadioItem = this.addRadioItem.bind(this);
    this.changeRadioItemText = this.changeRadioItemText.bind(this);
    this.changeRadioItemCorrect = this.changeRadioItemCorrect.bind(this);
  }

  changeRadioItemText(event) {
    const idx = this.state.itemId;
    const items = this.state.items;

    items.answers.answerItems[event.currentTarget.name].text = event.currentTarget.value;

    this.props.changeQuestion(
      {
        [idx]: Object.assign({}, items, {
            answers: Object.assign({}, items.answers, {
              answerItems: items.answers.answerItems,
              answerQuantityItems: items.answers.answerQuantityItems++
            })
          }
        )
      }
    );
  }

  changeRadioItemCorrect(event) {

    const idx = this.state.itemId;
    const items = this.state.items;

    this.props.changeQuestion(
      {
        [idx]: Object.assign({}, items, {
            answers: Object.assign({}, items.answers, {
              correctAnswer: event.currentTarget.value,
            })
          }
        )
      }
    );
  }

  addRadioItem() {

    const idx = this.state.itemId;
    const items = this.state.items;

    items.answers.answerItems[items.answers.answerQuantityItems] = {text: '', id: items.answers.answerQuantityItems};

    this.props.changeQuestion(
      {
        [idx]: Object.assign({}, items, {
            answers: Object.assign({}, items.answers, {
              answerItems: items.answers.answerItems,
              answerQuantityItems: items.answers.answerQuantityItems++
            })
          }
        )
      }
    );
  }

  render() {
    return (
      <div className="form-group">
        <button className="btn btn-default btn-block" onClick={this.addRadioItem}>Add</button>
        <hr/>
        <form>
          {
            this.props.testElements.testItems[this.props.item.id].answers.answerItems.map((answer) => {
              return (
                <div key={answer.id} className="form-inline">
                  <input
                    style={{width: '10%'}}
                    type="radio"
                    name={`radio-${this.props.item.id}`}
                    value={answer.id}
                    className="form-control"
                    onClick={this.changeRadioItemCorrect}
                  />
                  <input
                    style={{width: '80%'}}
                    type="text"
                    name={answer.id}
                    placeholder="Input answer"
                    onChange={this.changeRadioItemText}
                    className="form-control"
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
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioItem);