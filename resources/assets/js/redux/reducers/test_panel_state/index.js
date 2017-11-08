"use strict";

import constants from '../../../constants';

const initialState = {
  tests: []
};

export default function testPanelState(state = initialState, action) {

  switch (action.type) {

    case constants.httpRequest.GET_TESTS_REQUEST: {
      return state;
    }

    case constants.httpRequest.GET_TESTS_SUCCESS: {
      return Object.assign({}, state, {
        tests: action.payload.data
      });
    }

    case constants.httpRequest.GET_TESTS_FAILURE: {
      return state;
    }

    default:
      return state;
  }
}