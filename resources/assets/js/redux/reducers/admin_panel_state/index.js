"use strict";

import constants from '../../../constants';

const initialState = {
  testName: "",
  testItems: {},
  testCategories: [],
  testCategoryName: "",
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

    case constants.adminPanelState.CHANGE_NAME_OF_THE_CATEGORY: {
      return Object.assign({}, state, {
        testCategoryName: action.payload
      });
    }

    //-------------------------------------------------------------------------

    case constants.httpRequest.CREATE_TEST_REQUEST: {
      return state
    }

    case constants.httpRequest.CREATE_TEST_SUCCESS: {
      return initialState;
    }

    case constants.httpRequest.CREATE_TEST_FAILURE: {
      return state
    }

    //-------------------------------------------------------------------------

    case constants.httpRequest.CREATE_CATEGORY_REQUEST: {
      return state
    }

    case constants.httpRequest.CREATE_CATEGORY_SUCCESS: {
      return Object.assign({}, state, {
        testCategoryName: ""
      });
    }

    case constants.httpRequest.CREATE_CATEGORY_FAILURE: {
      return state
    }

    //-------------------------------------------------------------------------

    case constants.httpRequest.GET_CATEGORIES_REQUEST: {
      return state
    }

    case constants.httpRequest.GET_CATEGORIES_SUCCESS: {
      return Object.assign({}, state, {
        testCategories: action.payload.data
      });
    }

    case constants.httpRequest.GET_CATEGORIES_SUCCESS: {
      return state
    }

    default:
      return state
  }
}