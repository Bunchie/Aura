"use strict";

import constants from '../../../constants';

const initialState = {
  testName: "",
  testItems: {},
  testCategory: [],
  testQuantityItems: 0
};

export default function adminPanelState(state = initialState, action) {

  switch (action.type) {

    case constants.adminPanelState.ADD_ITEM_TO_TEST: {

      let testQuantityItems = state.testQuantityItems,
        testItems = Object.assign({}, state.testItems, {...action.payload});

      return Object.assign({}, state, {
        testItems: testItems,
        testQuantityItems: ++testQuantityItems
      });

    }
    case constants.adminPanelState.DELETE_ITEM_TEST: {

      delete state.testItems[action.payload];

      return Object.assign({}, state, {testItems: state.testItems});
    }

    case constants.adminPanelState.CHANGE_QUESTION: {
      return Object.assign({}, state, {
        testItems: Object.assign({}, state.testItems, {...action.payload})
      });
    }

    case constants.adminPanelState.CHANGE_NAME_OF_THE_TEST: {
      return Object.assign({}, state, {
        testName: action.payload
      });
    }

    case constants.httpRequest.CREATE_TEST_REQUEST: {
      return state
    }

    case constants.httpRequest.CREATE_TEST_SUCCESS: {
      return initialState;
    }

    case constants.httpRequest.CREATE_TEST_FAILURE: {
      return state
    }

    default:
      return state
  }
}