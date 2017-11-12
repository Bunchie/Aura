"use strict";

import constants from '../../../constants';

const initialState = {
  tests: [],
  currentTest: {},
  currentAnswers: {}
};

export default function testPanelState(state = initialState, action) {

  switch (action.type) {

    case constants.httpRequest.GET_TESTS_REQUEST: {
      return state;
    }

    case constants.httpRequest.GET_TESTS_SUCCESS: {
      return Object.assign({}, state, {
        tests: Object.values(action.payload.data)
      });
    }

    case constants.httpRequest.GET_TESTS_FAILURE: {
      return state;
    }

    case constants.httpRequest.GET_TEST_REQUEST: {
      return state;
    }

    case constants.httpRequest.GET_TEST_SUCCESS: {
      console.log(action.payload.data);
      return Object.assign({}, state, {
        currentTest: action.payload.data
      });
    }

    case constants.httpRequest.GET_TEST_FAILURE: {
      return state;
    }

    case constants.testPanelState.CHOICE_OF_ANSWER: {
      return Object.assign({}, state, {
        currentAnswers: Object.assign({}, state.currentAnswers, action.payload)
      });
    }

    case constants.httpRequest.SAVE_RESULT_REQUEST: {
      return state;
    }

    case constants.httpRequest.SAVE_RESULT_SUCCESS: {
      return state;
    }

    case constants.httpRequest.SAVE_RESULT_FAILURE: {
      return state;
    }

    default:
      return state;
  }
}