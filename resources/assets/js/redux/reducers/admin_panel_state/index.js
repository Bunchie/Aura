"use strict";

import constants from '../../../constants';

const initialState = {
  test: {
    testName: "",
    testItems: {},
    testCategory: "",
    testQuantityItems: 0
  }
};

export default function adminPanelState(state = initialState, action) {

  switch (action.type) {

    case constants.adminPanelState.ADD_ELEMENT_TO_TEST: {
      return Object.assign({}, state, {
        test: action.payload
      });
    }

    default:
      return state
  }
}