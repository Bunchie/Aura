"use strict";

import React, {Component} from "react";
import {connect} from "react-redux";
import {Bar} from "react-chartjs-2";

import constants from "../../constants";
import _getResultsXHR from "./_getResultsXHR";
import getCookie from "../../helpers/GetCookie";

const mapStateToProps = state => {
  return {
    customerState: state.customerPanelState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getResults: (userId) => {
      dispatch({
        type: constants.httpRequest.PROMISE,
        actions: [
          constants.httpRequest.GET_RESULTS_REQUEST,
          constants.httpRequest.GET_RESULTS_SUCCESS,
          constants.httpRequest.GET_RESULTS_FAILURE
        ],
        promise: _getResultsXHR(userId)
      });
    }
  };
};

class CustomerChart extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getResults(getCookie("UI"));
  }

  render() {

    console.log(this.props.customerState);

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };


    return (
      <section className="test-section test-shadow">
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerChart);