"use strict";

import constants from '../../../constants';

const initialState = {
  currentTest: {}
};

export default function testPanelState(state = initialState, action) {

  switch (action.type) {

    case "TEST": {
      return Object.assign({}, state, {
        currentTest: action.payload
      });
    }

    default:
      return state
  }
}