"use strict";

import constants from '../../../constants';

const initialState = {
  tests: [],
  currentTest: {}
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


    case constants.httpRequest.GET_TEST_REQUEST: {
      return state;
    }

    case constants.httpRequest.GET_TEST_SUCCESS: {
      return Object.assign({}, state, {
        currentTest: action.payload.data
      });
    }

    case constants.httpRequest.GET_TEST_FAILURE: {
      return state;
    }

    default:
      return state;
  }
}