"use strict";

import React, {Component} from "react";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

class TextItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="">Correct answer</label>
        <input
          type="text"
          className="form-control"
          placeholder="Input correct answer"
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextItem);