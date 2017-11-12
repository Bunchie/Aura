"use strict";

import constants from '../../../constants';

const initialState = {
  results: []
};

export default function customerPanelState(state = initialState, action) {

  switch (action.type) {

    case constants.httpRequest.GET_RESULTS_REQUEST: {
      return state
    }

    case constants.httpRequest.GET_RESULTS_SUCCESS: {
      return Object.assign({}, state, {
        results: action.payload.data
      });
    }

    case constants.httpRequest.GET_RESULTS_FAILURE: {
      return Object.assign({}, state, {
        testMessages: action.error.response.data.error
      });
    }

    default:
      return state
  }
}