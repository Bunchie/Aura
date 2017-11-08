"use strict";

import React, {Component} from "react";
import {connect} from "react-redux";

import constants from "../../constants";

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

class Text extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="form-group">
        11111111
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Text);