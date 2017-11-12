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

    let lablesResult = this.props.customerState.results.map((lable) => {
      return lable.tests.name;
    });

    let dataResults = this.props.customerState.results.map((lable) => {
      return lable.result;
    });

    const data = {
      labels: lablesResult,
      datasets: [
        {
          label: 'Test results',
          backgroundColor: 'rgba(99, 107, 111, 0.65)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75, 192, 192, 1)',
          hoverBorderColor: 'rgba(75, 192, 192, 1)',
          data: dataResults
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
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }}
        />
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerChart);