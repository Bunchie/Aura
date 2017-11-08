"use strict";

import React, {Component} from "react";
import constants from "../../constants";

class Answers extends Component {
  constructor(props) {
    super(props);
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
            />
          </div>
        </div>
      );
    }

    let inputItem = null;

    if (this.props.answers.answerType === constants.typeAnswer.RADIO) {

      inputItem = (
        <input
          style={{width: '10%'}}
          type="radio"
          name={`radio-${this.props.questionId}`}
          className="form-control"
        />
      );

    } else if (this.props.answers.answerType === constants.typeAnswer.CHECKBOX) {

      inputItem = (
        <input
          style={{width: '10%'}}
          type="checkbox"
          className="form-control"
        />
      );

    }

    return (
      <div>
        {this.props.answers.answerItems.map((answer) => {
          return <div key={answer.id} className="form-inline">
            {inputItem}
            <span>
              {answer.text}
            </span>
          </div>
        })}
      </div>
    );
  }
}

export default Answers;